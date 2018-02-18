import { Component, OnInit } from '@angular/core';
import { Trait } from './trait/trait';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TraitGroupFactory } from './trait/trait-group-factory';

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
  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.mentalTraits = this.traitGroupFactory.getMentalDefaults();
    this.corporealTraits = this.traitGroupFactory.getCorporealDefaults();
    this.form = this.formBuilder.group({
      currentWind: 0,
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
}
