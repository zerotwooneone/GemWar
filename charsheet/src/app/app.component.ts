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

  constructor(private defaultTraitFactory: DefaultTraitFactory) {

  }

  ngOnInit(): void {
    this.mentalTraits = this.defaultTraitFactory.GetMentalDefaults();
    this.corporealTraits = this.defaultTraitFactory.GetCorporealDefaults();
  }
}
