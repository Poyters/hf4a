import { Component, Input } from '@angular/core';
import { PlayerData } from '../../../interfaces/player.interface';
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayerCardsPipe } from '../../../pipes/player-cards.pipe';
import { CommonModule } from '@angular/common';
import { crewConfig } from '../../../configs/crew.config';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule,
    PlayerCardsPipe,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input() playersData!: PlayerData[];

  public findCrewByType(crewType?: string) {
    if (!crewType) return null;

    return crewConfig.find((record) => record.type === crewType) || null;
  }
}
