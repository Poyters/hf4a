import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayerCardsPipe } from '../../pipes/player-cards.pipe';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { SaveSheet } from '../../interfaces/saveSheet.interface';
import localforage from 'localforage';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { crewConfig } from '../../configs/crew.config';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-save-sheets',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    PlayerCardsPipe,
    MatChipsModule,
    MatDividerModule,
    DatePipe,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
  ],
  templateUrl: './save-sheets.component.html',
  styleUrl: './save-sheets.component.scss',
})
export class SaveSheetsComponent {
  public saveSheets: SaveSheet[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.fetchSavedSaveSheets();
  }

  async fetchSavedSaveSheets() {
    try {
      const currentSaveSheets = ((await localforage.getItem('saveSheets')) ??
        []) as SaveSheet[];

      this.saveSheets = currentSaveSheets;
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  }

  public loadSaveSheet(saveSheetId: string) {
    this.router.navigate(['/load', saveSheetId]);
  }

  public calculateProgress(saveSheet: SaveSheet) {
    const fullYears = saveSheet.seniorityDiscs * 12;
    const leftYears =
      saveSheet.leftSeniorityDiscs * 12 - saveSheet.yearPosition;

    const progress = Math.floor(100 - (leftYears / fullYears) * 100);

    return progress;
  }

  public findCrewByType(crewType?: string) {
    if (!crewType) return null;

    return crewConfig.find((record) => record.type === crewType) || null;
  }

  redirectToNewSave() {
    this.router.navigate(['/new']);
  }
}
