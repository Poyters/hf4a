import { Action, createReducer, on } from '@ngrx/store';
import { SaveSheetState, saveSheetState } from './save-sheet.state';
import { setScenario } from './save-sheet.actions';

const saveSheetReducerFactory = createReducer(
  saveSheetState,
  on(setScenario, (state, { scenario }) => ({ ...state, scenario }))
);

export function saveSheetReducer(state: SaveSheetState, action: Action) {
  return saveSheetReducerFactory(state, action);
}
