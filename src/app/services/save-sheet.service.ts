import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScenarioData } from '../interfaces/scenarios.interface';
import { PlayerCards, PlayerData } from '../interfaces/player.interface';

@Injectable({
  providedIn: 'root',
})
export class SaveSheetService {
  private scenario$ = new BehaviorSubject<ScenarioData | null>(null);
  selectedScenario$ = this.scenario$.asObservable();
  private playerData$ = new BehaviorSubject<PlayerData | null>(null);
  player$ = this.scenario$.asObservable();

  setScenario(scenario: ScenarioData) {
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
