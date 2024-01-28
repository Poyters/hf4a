import { Pipe, PipeTransform } from '@angular/core';
import { ScenarioData } from '../interfaces/scenarios.interface';

@Pipe({
  name: 'scenarioPlayersRange',
  standalone: true,
})
export class ScenarioPlayersRangePipe implements PipeTransform {
  transform(value: ScenarioData | undefined): unknown {
    if (!value) {
      return null;
    }

    if (value.players.min === value.players.max) {
      return value.players.min;
    }

    return `${value.players.min} - ${value.players.max}`;
  }
}
