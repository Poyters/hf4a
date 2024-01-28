import { Component, inject, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

export interface Card {
  name: string;
}

export interface PlayerDialogData {
  playerName: string;
  crewType: string;
  aquas: number;
  cards: {
    rocket: Card[];
    leo: Card[];
    outpost1: Card[];
    outpost2: Card[];
  };
}

@Component({
  selector: 'app-player-dialog',
  standalone: true,
  imports: [
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
  ],
  templateUrl: './player-dialog.component.html',
  styleUrl: './player-dialog.component.scss',
})
export class PlayerDialogComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  rocketCards: Card[] = [];
  leoCards: Card[] = [];
  outpost1Cards: Card[] = [];
  outpost2Cards: Card[] = [];

  announcer = inject(LiveAnnouncer);

  constructor(@Inject(MAT_DIALOG_DATA) public data: PlayerDialogData) {}

  add(cardsType: string, event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.getTypeOfCards(cardsType).push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(cardsType: string, fruit: Card): void {
    const index = this.getTypeOfCards(cardsType).indexOf(fruit);

    if (index >= 0) {
      this.getTypeOfCards(cardsType).splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(cardsType: string, fruit: Card, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(cardsType, fruit);
      return;
    }

    // Edit existing fruit
    const index = this.getTypeOfCards(cardsType).indexOf(fruit);
    if (index >= 0) {
      this.getTypeOfCards(cardsType)[index].name = value;
    }
  }

  private getTypeOfCards(type: string) {
    switch (type) {
      case 'LEO':
        return this.leoCards;
      case 'OUTPOST_1':
        return this.outpost1Cards;
      case 'OUTPOST_2':
        return this.outpost2Cards;
      default:
        return this.rocketCards;
    }
  }
}
