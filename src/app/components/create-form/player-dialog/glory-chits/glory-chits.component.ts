import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { gloryChitConfig } from '../../../../configs/gloryChit.config';

@Component({
  selector: 'app-glory-chits',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './glory-chits.component.html',
  styleUrl: './glory-chits.component.scss',
})
export class GloryChitsComponent {
  @Input() occupiedGloryChits!: string[];

  gloryChits = gloryChitConfig.availableChits;
  playerFormGroup!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.playerFormGroup = this.rootFormGroup.control;
  }

  selectGloryChit(gloryChit: string): void {
    this.playerFormGroup.get('gloryChits')?.markAsTouched();

    if (this.playerFormGroup.get('gloryChits')?.value?.includes(gloryChit)) {
      const index =
        this.playerFormGroup.get('gloryChits')?.value?.indexOf(gloryChit) ?? -1;

      if (index >= 0) {
        this.playerFormGroup.get('gloryChits')?.value?.splice(index, 1);

        return;
      }
    }

    if (this.playerFormGroup.get('gloryChits')?.value) {
      this.playerFormGroup.get('gloryChits')?.value?.push(gloryChit);
    }
  }
}
