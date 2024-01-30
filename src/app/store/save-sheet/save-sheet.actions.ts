import { createAction, props } from '@ngrx/store';
import { ScenarioData } from '../../interfaces/scenarios.interface';

export const setScenario = createAction(
  '[Save sheet] Set scenario',
  props<{ scenario: ScenarioData }>()
);
