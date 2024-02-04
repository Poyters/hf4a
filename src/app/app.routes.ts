import { Routes } from '@angular/router';
import { CreateFormComponent } from '../app/components/create-form/create-form.component';
import { SaveSheetsComponent } from './components/save-sheets/save-sheets.component';
import { LoadSheetComponent } from './components/load-sheet/load-sheet.component';

export const routes: Routes = [
  { path: 'new', component: CreateFormComponent },
  { path: '', component: SaveSheetsComponent },
  { path: 'load/:id', component: LoadSheetComponent },
];
