import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-seniority-discs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './seniority-discs.component.html',
  styleUrl: './seniority-discs.component.scss',
})
export class SeniorityDiscsComponent {
  scenarioFormGroup!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.scenarioFormGroup = this.rootFormGroup.control;
  }

  selectSeniorityDiscs(disc: number): void {
    if (disc === this.scenarioFormGroup.get('seniorityDiscs')?.value) {
      this.scenarioFormGroup.get('seniorityDiscs')?.setValue(null);
      return;
    }

    this.scenarioFormGroup.get('seniorityDiscs')?.setValue(disc);
  }
}
