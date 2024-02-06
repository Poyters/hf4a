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
  PlayerDelegate,
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
    delegates: new FormControl<PlayerDelegate[]>([]),
  });

  honorAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<PlayerDelegate[]>([]),
  });

  unityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<PlayerDelegate[]>([]),
  });

  authorityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<PlayerDelegate[]>([]),
  });

  equalityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<PlayerDelegate[]>([]),
  });

  individualityAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<PlayerDelegate[]>([]),
  });

  centristAssemblyFormGroup = new FormGroup({
    seniorityDiscs: new FormControl<number>(0),
    delegates: new FormControl<PlayerDelegate[]>([]),
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
