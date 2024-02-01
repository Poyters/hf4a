import { Component, Inject } from '@angular/core';
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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { crewConfig } from '../../../configs/crew.config';
import { PlayerData, Card } from '../../../interfaces/player.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { getOccupiedCrews } from '../../../utils/crews';
import { MatDividerModule } from '@angular/material/divider';
import { GloryChitsComponent } from './glory-chits/glory-chits.component';
import { getOccupiedGloryChits } from '../../../utils/gloryChits';
import { MapObject } from '../../../interfaces/map.interface';
import { MapStateComponent } from './map-state/map-state.component';

export interface PlayerDialogData {
  players: PlayerData[];
}

@Component({
  selector: 'app-player-dialog',
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
    MatDividerModule,
    GloryChitsComponent,
    MapStateComponent,
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
  handCards: Card[] = [];
  public crews = crewConfig;
  public occuppiedCrews: string[] = [];
  public occuppiedGloryChits: string[] = [];

  playerForm = new FormGroup({
    playerName: new FormControl('', Validators.required),
    aquas: new FormControl(0, [Validators.min(0), Validators.max(50)]),
    crewType: new FormControl('', Validators.required),
    gloryChits: new FormControl<string[]>([]),
    colonies: new FormControl<MapObject[]>([]),
    factories: new FormControl<MapObject[]>([]),
    prospects: new FormControl<MapObject[]>([]),
  });

  constructor(
    private dialogRef: MatDialogRef<PlayerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PlayerDialogData
  ) {
    this.occuppiedCrews = getOccupiedCrews(this.data.players);
    this.occuppiedGloryChits = getOccupiedGloryChits(this.data.players);
  }

  ngOnInit(): void {
    this.playerForm.valueChanges.subscribe(() => {
      console.log('player form', this.playerForm.get('gloryChits'));
    });
  }

  selectCrew(crewType: string): void {
    this.playerForm.get('crewType')?.markAsTouched();

    if (crewType === this.playerForm.get('crewType')?.value) {
      this.playerForm.get('crewType')?.setValue('');
      return;
    }

    this.playerForm.get('crewType')?.setValue(crewType);
  }

  save() {
    const { value, valid } = this.playerForm;

    if (valid) {
      this.dialogRef.close({
        ...value,
        cards: {
          rocket: this.rocketCards,
          leo: this.leoCards,
          outpost1: this.outpost1Cards,
          outpost2: this.outpost2Cards,
          hand: this.handCards,
        },
      });
    }
  }

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
      case 'HAND':
        return this.handCards;
      default:
        return this.rocketCards;
    }
  }
}
