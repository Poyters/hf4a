import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaveSheet } from '../../interfaces/saveSheet.interface';
import localforage from 'localforage';

@Component({
  selector: 'app-load-sheet',
  standalone: true,
  imports: [],
  templateUrl: './load-sheet.component.html',
  styleUrl: './load-sheet.component.scss',
})
export class LoadSheetComponent {
  saveSheet: SaveSheet | null = null;

  constructor(private route: ActivatedRoute, public router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const saveSheetId = params['id'];

      this.fetchSavedSaveSheets(saveSheetId);
    });
  }

  private async fetchSavedSaveSheets(saveSheetId: string) {
    try {
      const currentSaveSheets = ((await localforage.getItem('saveSheets')) ??
        []) as SaveSheet[];

      this.saveSheet =
        currentSaveSheets.find((saveSheet) => saveSheet.id === saveSheetId) ??
        null;
    } catch (err) {
      // This code runs if there were any errors.
      console.log(err);
    }
  }
}
