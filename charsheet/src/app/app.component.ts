import { Component } from '@angular/core';
import { Trait } from './src/app/trait/trait';
import { Attribute } from './src/app/attribute/attribute';
import { Skill } from './src/app/skill/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mentalTraits: Trait[];
  corporealTraits: Trait[];

  constructor() {
    this.mentalTraits = [new Trait(new Attribute(3,'Cognition',4), [new Skill('first', 3, 0, 'specialization')], 0)];
    this.corporealTraits = [new Trait(new Attribute(12,'Deftness',2), [new Skill('first', 3, 0, 'specialization')], 0)];
  }
}
