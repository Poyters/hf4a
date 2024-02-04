import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Scenario } from '../interfaces/scenarios.interface';
import { PlayerCards, Player } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class SaveSheetService {
  private scenario$ = new BehaviorSubject<Scenario | null>(null);
  selectedScenario$ = this.scenario$.asObservable();
  private playerData$ = new BehaviorSubject<Player | null>(null);
  player$ = this.scenario$.asObservable();

  setScenario(scenario: Scenario | null) {
    this.scenario$.next(scenario);
  }

  setPlayerCards(cards: PlayerCards) {
    const newValue = this.playerData$.value;

    if (!newValue) return;
    newValue.cards = cards;

    this.playerData$.next(newValue);
  }

  constructor() {}
}
