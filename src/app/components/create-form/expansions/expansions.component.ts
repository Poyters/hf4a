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
import { MatIconModule } from '@angular/material/icon';
import { expansionsConfig } from '../../../configs/expansions.config';

@Component({
  selector: 'app-expansions',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  templateUrl: './expansions.component.html',
  styleUrl: './expansions.component.scss',
})
export class ExpansionsComponent {
  expansionsFormGroup!: FormGroup;
  expansions = expansionsConfig;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.expansionsFormGroup = this.rootFormGroup.control;
  }

  selectExpansion(expansion: string): void {
    this.expansionsFormGroup.get('expansions')?.markAsTouched();

    if (
      this.expansionsFormGroup.get('expansions')?.value?.includes(expansion)
    ) {
      const index =
        this.expansionsFormGroup.get('expansions')?.value?.indexOf(expansion) ??
        -1;

      if (index >= 0) {
        this.expansionsFormGroup.get('expansions')?.value?.splice(index, 1);

        return;
      }
    }

    if (this.expansionsFormGroup.get('expansions')?.value) {
      this.expansionsFormGroup.get('expansions')?.value?.push(expansion);
    }
  }
}
