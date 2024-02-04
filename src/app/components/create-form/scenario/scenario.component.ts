import { Component } from '@angular/core';
import { scenariosConfig } from '../../../configs/scenarios.config';
import { Scenario } from '../../../interfaces/scenarios.interface';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatChipsModule],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.scss',
})
export class ScenarioComponent {
  public scenarios = scenariosConfig;

  scenarioFormGroup!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.scenarioFormGroup = this.rootFormGroup.control;
  }

  selectScenario(scenario: Scenario): void {
    console.log('scenario', scenario);
    if (
      scenario.name ===
      this.scenarioFormGroup.get('currentScenario')?.value?.name
    ) {
      this.scenarioFormGroup.get('currentScenario')?.setValue(null);
      return;
    }

    this.scenarioFormGroup.get('currentScenario')?.setValue(scenario);
    this.scenarioFormGroup
      .get('seniorityDiscs')
      ?.setValue(
        this.scenarioFormGroup.get('currentScenario')?.value
          ?.seniorityDiscs?.[0] ?? null
      );
  }
}
