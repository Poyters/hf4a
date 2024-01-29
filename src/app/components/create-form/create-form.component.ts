import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { scenariosConfig } from '../../configs/scenarios.config';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ScenarioPlayersRangePipe } from '../../pipes/scenario-players-range.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';
import { PlayerData } from '../../interfaces/player.interface';
import { PlayerComponent } from './player/player.component';
import { ScenarioData } from '../../interfaces/scenarios.interface';
import { MatStepperModule } from '@angular/material/stepper';
import { leftSeniorityDiscsValidator } from '../../validators/leftSeniorityDiscs.validator';

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
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  public scenarios = scenariosConfig;

  scenarioFormGroup = new FormGroup(
    {
      currentScenario: new FormControl('', Validators.required),
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

  secondFormGroup = new FormGroup({
    secondCtrl: new FormControl('', Validators.required),
  });
  isLinear = false;

  public players: PlayerData[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // Subskrybuj zdarzenie valueChanges, aby reagować na zmiany w formularzu
    this.scenarioFormGroup.valueChanges.subscribe(() => {
      console.log('this.scenarioFormGroup', this.scenarioFormGroup);
      // Tutaj możesz dodatkowo obsłużyć logikę po zmianie wartości w formularzu
      console.log(
        'awfa',
        this.scenarioFormGroup.hasError('leftSeniorityDiscsMax')
      );
    });
  }

  openPlayerDialog() {
    const dialogRef = this.dialog.open(PlayerDialogComponent, {
      data: { aquas: 0, cards: {} },
      minWidth: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('res', result);
      if (result) this.players.push(result);
    });
  }

  selectScenario(scenario: any): void {
    if (
      scenario.name === this.scenarioFormGroup.get('currentScenario')?.value
    ) {
      this.scenarioFormGroup.get('currentScenario')?.setValue('');
      return;
    }

    this.scenarioFormGroup.get('currentScenario')?.setValue(scenario.name);
    this.scenarioFormGroup
      .get('seniorityDiscs')
      ?.setValue(this.currentScenarioData?.seniorityDiscs[0] ?? null);
  }

  selectSeniorityDiscs(disc: number): void {
    if (disc === this.scenarioFormGroup.get('seniorityDiscs')?.value) {
      this.scenarioFormGroup.get('seniorityDiscs')?.setValue(null);
      return;
    }

    this.scenarioFormGroup.get('seniorityDiscs')?.setValue(disc);
  }

  get currentScenarioData() {
    return scenariosConfig.find(
      (scenario) =>
        scenario.name === this.scenarioFormGroup.get('currentScenario')?.value
    );
  }
}
