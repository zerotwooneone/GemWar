import { Component, OnInit } from '@angular/core';
import { Trait } from './trait/trait';
import { DefaultTraitFactory } from './trait/default-trait-factory';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mentalTraits: Trait[];
  corporealTraits: Trait[];
  windTotal: number;
  form:FormGroup;

  constructor(private defaultTraitFactory: DefaultTraitFactory,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.mentalTraits = this.defaultTraitFactory.GetMentalDefaults();
    this.corporealTraits = this.defaultTraitFactory.GetCorporealDefaults();
    let vigorTrait = this.corporealTraits.find(t => t.attribute.name === 'Vigor');
    let vigorDieType = vigorTrait ? vigorTrait.attribute.dieType : 0;
    let spiritTrait = this.mentalTraits.find(t => t.attribute.name === 'Spirit');
    let spiritDieType = spiritTrait ? spiritTrait.attribute.dieType : 0;
    this.form = this.formBuilder.group({
      currentWind : 0
    });
    this.windTotal = vigorDieType + spiritDieType;
  }
}
