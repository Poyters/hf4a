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
  @Input() playersData!: Player[];

  expansionsFormGroup!: FormGroup;
  politicalAssemblies = politicalBoardConfig.politicalAssemblies;

  freedomAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  honorAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  unityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  authorityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  equalityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  individualityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<string>(''),
  });

  centristAssemblyFormGroup = new FormGroup({
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
  }
}
