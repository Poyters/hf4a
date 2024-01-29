import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { scenariosConfig } from '../../configs/scenarios.config';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ScenarioPlayersRangePipe } from '../../pipes/scenario-players-range.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { PlayerDialogComponent } from './player-dialog/player-dialog.component';
import { PlayerData } from '../../interfaces/player.interface';
import { PlayerComponent } from './player/player.component';
import { ScenarioData } from '../../interfaces/scenarios.interface';

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
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  public scenarios = scenariosConfig;
  public currentScenario = new FormControl('');

  public form: FormGroup = new FormGroup({
    currentScenario: new FormControl(''),
    seniorityDiscs: new FormControl(null),
  });

  public players: PlayerData[] = [];

  constructor(public dialog: MatDialog) {}

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
    if (scenario.name === this.currentScenario.value) {
      this.currentScenario.setValue('');
      return;
    }

    this.currentScenario.setValue(scenario.name);
  }

  get currentScenarioData() {
    return scenariosConfig.find(
      (scenario) => scenario.name === this.currentScenario.value
    );
  }
}
