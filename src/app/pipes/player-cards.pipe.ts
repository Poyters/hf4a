import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../interfaces/player.interface';

@Pipe({
  name: 'playerCards',
  standalone: true,
})
export class PlayerCardsPipe implements PipeTransform {
  transform(cards: Card[] | undefined): unknown {
    if (!cards) {
      return null;
    }

    return cards.map((card) => card.name).toString();
  }
}
