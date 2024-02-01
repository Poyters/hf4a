import { Component } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatChipEditedEvent,
  MatChipInputEvent,
  MatChipsModule,
} from '@angular/material/chips';
import { MapObject } from '../../../../interfaces/map.interface';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'player-dialog-map-state',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  templateUrl: './map-state.component.html',
  styleUrl: './map-state.component.scss',
})
export class MapStateComponent {
  mapStateFormGroup!: FormGroup;

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.mapStateFormGroup = this.rootFormGroup.control;
  }

  add(cardsType: string, event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.getMapObject(cardsType)?.value.push({
        name: value,
      });
    }

    event.chipInput!.clear();
  }

  remove(cardsType: string, card: MapObject): void {
    const index = this.getMapObject(cardsType)?.value.indexOf(card);

    if (index >= 0) {
      this.getMapObject(cardsType)?.value.splice(index, 1);
    }
  }

  edit(cardsType: string, card: MapObject, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(cardsType, card);
      return;
    }

    const index = this.getMapObject(cardsType)?.value?.indexOf(card);

    if (index >= 0) {
      (this.getMapObject(cardsType) as any).value[index].name = value;
    }
  }

  private getMapObject(type: string) {
    switch (type) {
      case 'COLONY':
        return this.mapStateFormGroup.get('colonies');
      case 'FACTORY':
        return this.mapStateFormGroup.get('factories');
      default:
        return this.mapStateFormGroup.get('prospects');
    }
  }
}
