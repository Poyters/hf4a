import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { politicalBoardConfig } from '../../../configs/expansions.config';
import { Player } from '../../../interfaces/player.interface';
import {
  Assembly,
  PoliticalAssembly,
} from '../../../interfaces/module0.interface';
import { MatInputModule } from '@angular/material/input';
import { AssemblyComponent } from './assembly/assembly.component';

@Component({
  selector: 'app-module-0',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    AssemblyComponent,
  ],
  templateUrl: './module-0.component.html',
  styleUrl: './module-0.component.scss',
})
export class Module0Component {
  expansionsFormGroup!: FormGroup;
  politicalAssemblies = politicalBoardConfig.politicalAssemblies;

  politicalAssembly: PoliticalAssembly = {
    assemblies: [],
  };

  freedomAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[0].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  honorAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[1].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  unityAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[2].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  authorityAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[3].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  equalityAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[4].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  individualityAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[5].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  centristAssemblyFormGroup = new FormGroup({
    name: new FormControl<string>(this.politicalAssemblies[6].name),
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  formGroups = [
    this.freedomAssemblyFormGroup,
    this.honorAssemblyFormGroup,
    this.unityAssemblyFormGroup,
    this.authorityAssemblyFormGroup,
    this.equalityAssemblyFormGroup,
    this.individualityAssemblyFormGroup,
    this.centristAssemblyFormGroup,
  ];

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.expansionsFormGroup = this.rootFormGroup.control;

    this.formGroups.forEach((formGroup) => {
      formGroup.valueChanges.subscribe(() => {
        this.updatePoliticalAssembly(formGroup.value as Assembly);
      });
    });
  }

  updatePoliticalAssembly(updatedAssembly: Assembly): void {
    const existingAssemblyIndex = this.politicalAssembly.assemblies.findIndex(
      (assembly) => assembly.name === updatedAssembly.name
    );

    if (existingAssemblyIndex !== -1) {
      this.politicalAssembly.assemblies[existingAssemblyIndex] =
        updatedAssembly;
    } else {
      this.politicalAssembly.assemblies.push(updatedAssembly);
    }

    // Możesz dodać dodatkowe logiki lub manipulacje tutaj
    console.log('Updated Political Assembly:', this.politicalAssembly);
    this.expansionsFormGroup.get('module0')?.setValue(this.politicalAssembly);
  }
}
