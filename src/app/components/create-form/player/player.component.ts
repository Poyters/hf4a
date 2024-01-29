import { Component, Input } from '@angular/core';
import { PlayerData } from '../../../interfaces/player.interface';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent {
  @Input() playerData: PlayerData | undefined;
}
