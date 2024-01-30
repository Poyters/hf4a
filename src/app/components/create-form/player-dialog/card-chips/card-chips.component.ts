import { Component, Input } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Card } from '../../../../interfaces/player.interface';

@Component({
  selector: 'app-card-chips',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
  ],
  templateUrl: './card-chips.component.html',
  styleUrl: './card-chips.component.scss',
})
export class CardChipsComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  rocketCards: Card[] = [];
  leoCards: Card[] = [];
  outpost1Cards: Card[] = [];
  outpost2Cards: Card[] = [];

  add(cardsType: string, event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.getTypeOfCards(cardsType).push({ name: value });
    }

    event.chipInput!.clear();
  }

  remove(cardsType: string, card: Card): void {
    const index = this.getTypeOfCards(cardsType).indexOf(card);

    if (index >= 0) {
      this.getTypeOfCards(cardsType).splice(index, 1);
    }
  }

  edit(cardsType: string, card: Card, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(cardsType, card);
      return;
    }

    const index = this.getTypeOfCards(cardsType).indexOf(card);
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
