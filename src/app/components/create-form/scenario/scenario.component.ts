import { Component } from '@angular/core';
import { scenariosConfig } from '../../../configs/scenarios.config';
import { ScenarioData } from '../../../interfaces/scenarios.interface';
import { Observable } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { SaveSheetService } from '../../../services/save-sheet.service';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.scss',
})
export class ScenarioComponent {
  public scenarios = scenariosConfig;
  private currentScenario$: Observable<ScenarioData | null> =
    this.saveSheetService.selectedScenario$;
  private currentScenario: ScenarioData | null = null;

  constructor(private saveSheetService: SaveSheetService) {}

  ngOnInit() {
    this.currentScenario$.subscribe((scenario) => {
      this.currentScenario = scenario;
    });
  }

  selectScenario(scenario: ScenarioData): void {
    if (scenario.name === this.currentScenario?.name) {
      this.saveSheetService.setScenario(null);
      return;
    }

    this.saveSheetService.setScenario(scenario);
  }
}
