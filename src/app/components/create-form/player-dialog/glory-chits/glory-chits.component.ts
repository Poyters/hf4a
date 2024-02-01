import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  gloryChits = gloryChitConfig.availableChits;
  playerFormGroup!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.playerFormGroup = this.rootFormGroup.control;
  }

  selectGloryChit(gloryChit: string): void {
    console.log('gloryChit', gloryChit);
    this.playerFormGroup.get('gloryChits')?.markAsTouched();

    if (this.playerFormGroup.get('gloryChits')?.value?.includes(gloryChit)) {
      console.log('includes');

      const index =
        this.playerFormGroup.get('gloryChits')?.value?.indexOf(gloryChit) ?? -1;

      console.log('index', index);

      if (index >= 0) {
        console.log('here');
        this.playerFormGroup.get('gloryChits')?.value?.splice(index, 1);

        console.log(
          "this.playerForm.get('gloryChits')?.value",
          this.playerFormGroup.get('gloryChits')?.value
        );

        console.log('removed ghlory chit stop');
        return;
      }
    }

    if (this.playerFormGroup.get('gloryChits')?.value) {
      console.log('adding glory chit', gloryChit);
      this.playerFormGroup.get('gloryChits')?.value?.push(gloryChit);
    }
  }
}
