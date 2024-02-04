import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ScenarioPlayersRangePipe } from '../../pipes/scenario-players-range.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';
import { Player } from '../../interfaces/player.interface';
import { PlayerComponent } from './player/player.component';
import { Scenario } from '../../interfaces/scenarios.interface';
import { MatStepperModule } from '@angular/material/stepper';
import { leftSeniorityDiscsValidator } from '../../validators/leftSeniorityDiscs.validator';
import { ScenarioComponent } from './scenario/scenario.component';
import { SeniorityDiscsComponent } from './seniority-discs/seniority-discs.component';
import { MapObject } from '../../interfaces/map.interface';
import { MapStateComponent } from './map-state/map-state.component';
import { SaveSheet } from '../../interfaces/saveSheet.interface';
import localforage from 'localforage';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [
    CommonModule,
    ScenarioPlayersRangePipe,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    PlayerComponent,
    MatStepperModule,
    ScenarioComponent,
    SeniorityDiscsComponent,
    MapStateComponent,
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  scenarioFormGroup = new FormGroup(
    {
      currentScenario: new FormControl<Scenario | null>(
        null,
        Validators.required
      ),
      seniorityDiscs: new FormControl<number | null>(null, Validators.required),
      leftSeniorityDiscs: new FormControl(1, [Validators.required]),
      yearPosition: new FormControl(1, [
        Validators.required,
        Validators.min(1),
        Validators.max(12),
      ]),
    },
    { validators: leftSeniorityDiscsValidator }
  );

  playersFormGroup = new FormGroup({
    players: new FormControl<Player[]>(
      [],
      [Validators.required, this.playersValidator()]
    ),
  });

  mapStateFormGroup = new FormGroup({
    bustedDiscs: new FormControl<MapObject[]>([]),
    bridges: new FormControl<MapObject[]>([]),
  });

  public isLinear = true;
  public canAddMorePlayers = false;

  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.playersFormGroup.valueChanges.subscribe(() => {
      this.canAddMorePlayers =
        (this.scenarioFormGroup.get('currentScenario')?.value?.players?.max ??
          0) > (this.playersFormGroup.get('players')?.value?.length ?? 0);

      console.log(
        'canAddMorePlayers A',
        this.canAddMorePlayers,
        this.scenarioFormGroup.get('currentScenario')?.value?.players?.max,
        this.playersFormGroup.get('players')?.value?.length
      );
    });

    this.scenarioFormGroup.valueChanges.subscribe(() => {
      this.canAddMorePlayers =
        (this.scenarioFormGroup.get('currentScenario')?.value?.players?.max ??
          0) > (this.playersFormGroup.get('players')?.value?.length ?? 0);

      console.log(
        'canAddMorePlayers B',
        this.canAddMorePlayers,
        this.scenarioFormGroup.get('currentScenario')?.value?.players?.max,
        this.playersFormGroup.get('players')?.value?.length
      );
    });
  }

  openPlayerDialog() {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      data: {
        aquas: 0,
        cards: {},
        players: this.playersFormGroup.get('players')?.value,
      },
      minWidth: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const playersControl = this.playersFormGroup.get('players')?.value;

        const newValue = playersControl
          ? [...playersControl, result]
          : [result];

        this.playersFormGroup.get('players')?.setValue(newValue);
      }
    });
  }

  playersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const currentScenario =
        this.scenarioFormGroup.get('currentScenario')?.value;

      if (!currentScenario) {
        return null;
      }

      const minPlayers = currentScenario.players?.min;
      const maxPlayers = currentScenario.players?.max;
      const players = control.value;

      if (minPlayers !== undefined && players.length < minPlayers) {
        return { minPlayers: { required: minPlayers, actual: players.length } };
      }

      if (maxPlayers !== undefined && players.length > maxPlayers) {
        return { maxPlayers: { required: maxPlayers, actual: players.length } };
      }

      return null;
    };
  }

  async save() {
    console.log('save');
    const saveSheetData: any = {
      id: uuidv4(),
      players: this.playersFormGroup.get('players')?.value,
      scenario: this.scenarioFormGroup.get('currentScenario')?.value,
      seniorityDiscs: this.scenarioFormGroup.get('seniorityDiscs')?.value,
      leftSeniorityDiscs:
        this.scenarioFormGroup.get('leftSeniorityDiscs')?.value,
      yearPosition: this.scenarioFormGroup.get('yearPosition')?.value,
      mapState: { ...this.mapStateFormGroup.value },
      date: new Date(),
    };

    console.log('saveSheetData', saveSheetData);

    try {
      const currentSaveSheets = ((await localforage.getItem('saveSheets')) ??
        []) as SaveSheet[];

      console.log('currentSaveSheets', currentSaveSheets);
      await localforage.setItem('saveSheets', [
        ...currentSaveSheets,
        saveSheetData,
      ]);

      console.log('done');
      this.router.navigate(['']);
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  }
}
