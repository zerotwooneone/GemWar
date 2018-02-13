import { Component, OnInit } from '@angular/core';
import { Trait } from './src/app/trait/trait';
import { Attribute } from './src/app/attribute/attribute';
import { Skill } from './src/app/skill/skill';
import { DefaultTraitFactory } from './src/app/trait/default-trait-factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mentalTraits: Trait[];
  corporealTraits: Trait[];

  constructor(private defaultTraitFactory: DefaultTraitFactory) {

  }

  ngOnInit(): void {
    this.mentalTraits = this.defaultTraitFactory.GetMentalDefaults();
    this.corporealTraits = this.defaultTraitFactory.GetCorporealDefaults();
  }
}
