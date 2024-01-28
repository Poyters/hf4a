import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { scenariosConfig } from '../../configs/scenarios.config';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ScenarioPlayersRangePipe } from '../../pipes/scenario-players-range.pipe';

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
  ],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
})
export class CreateFormComponent {
  public scenarios = scenariosConfig;
  public currentScenario = new FormControl('');

  public form: FormGroup = new FormGroup({
    currentScenario: new FormControl(''),
  });

  selectScenario(scenario: any): void {
    this.currentScenario.setValue(scenario.name);
  }

  get currentScenarioData() {
    return scenariosConfig.find(
      (scenario) => scenario.name === this.currentScenario.value
    );
  }
}
