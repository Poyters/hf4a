import { Component, Input } from '@angular/core';
import { PlayerData } from '../../../interfaces/player.interface';
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayerCardsPipe } from '../../../pipes/player-cards.pipe';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [MatExpansionModule, PlayerCardsPipe],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input() playerData: PlayerData | undefined;
}
