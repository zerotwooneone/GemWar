import { Component, OnInit } from '@angular/core';
import { Trait } from './trait/trait';
import { DefaultTraitFactory } from './trait/default-trait-factory';

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

  constructor(private defaultTraitFactory: DefaultTraitFactory) {

  }

  ngOnInit(): void {
    this.mentalTraits = this.defaultTraitFactory.GetMentalDefaults();
    this.corporealTraits = this.defaultTraitFactory.GetCorporealDefaults();
    let vigorTrait = this.corporealTraits.find(t => t.attribute.name === 'Vigor');
    let vigorDieType = vigorTrait ? vigorTrait.attribute.dieType : 0;
    let spiritTrait = this.mentalTraits.find(t => t.attribute.name === 'Spirit');
    let spiritDieType = spiritTrait ? spiritTrait.attribute.dieType : 0;
    this.windTotal = vigorDieType + spiritDieType;
  }
}
