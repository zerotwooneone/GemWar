import { Component, OnInit } from '@angular/core';
import { Trait } from './trait/trait';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mentalTraits: FormArray;
  corporealTraits: FormArray;
  get windTotal(): number {
    return this.vigorDieType + this.spiritDieType;
  }
  get strainMax(): number {
    return this.vigorDieType;
  }
  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formBuilder: FormBuilder,
    private formStorageService: FormStorageService) {

  }

  ngOnInit(): void {
    let saved: any = this.formStorageService.loadForm('test') || {};

    this.mentalTraits = this.traitGroupFactory.getMentalDefaults();
    this.corporealTraits = this.traitGroupFactory.getCorporealDefaults();
    this.form = this.formBuilder.group({
      currentWind: saved.currentWind || 0,
      currentStrain: saved.currentStrain || 0,
      mentalTraits: this.mentalTraits,
      corporealTraits: this.corporealTraits
    });

  }

  getTrait(traitArray: FormArray, name: string): FormGroup {
    return <FormGroup>traitArray.controls.find(g => g.get('traitName').value === name);
  }

  get vigorTrait(): FormGroup {
    return this.getTrait(this.corporealTraits, 'Vigor');
  }

  get vigorDieType(): number {
    let vigorTrait = this.vigorTrait;
    return vigorTrait ? Number(vigorTrait.get('dieType').value) : null;
  }

  get spiritTrait(): FormGroup {
    return this.getTrait(this.mentalTraits, 'Spirit');
  }

  get spiritDieType(): number {
    let spiritTrait = this.spiritTrait;
    return spiritTrait ? Number(spiritTrait.get('dieType').value) : null;
  }

  onSave(): void {
    this.formStorageService.saveForm('test', this.form);
  }
}
