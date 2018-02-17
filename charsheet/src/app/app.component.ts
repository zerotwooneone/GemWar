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
  windTotal: number;
  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.mentalTraits = this.traitGroupFactory.GetMentalDefaults();
    this.corporealTraits = this.traitGroupFactory.GetCorporealDefaults();
    let vigorTrait = this.getTrait(this.corporealTraits, 'Vigor');
    let vigorDieType = vigorTrait ? vigorTrait.get('dieType').value : 0;
    let spiritTrait = this.getTrait(this.mentalTraits, 'Spirit');
    let spiritDieType = spiritTrait ? spiritTrait.get('dieType').value : 0;
    this.form = this.formBuilder.group({
      currentWind: 0,
      mentalTraits: this.mentalTraits,
      corporealTraits: this.corporealTraits
    });
    this.windTotal = vigorDieType + spiritDieType;
  }

  getTrait(traitArray: FormArray, name: string): FormGroup {
    return <FormGroup>traitArray.controls.find(g => g.get('traitName').value === name);
  }
}
