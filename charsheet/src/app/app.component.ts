import { Component } from '@angular/core';
import { SkillGroup } from './src/app/skill/skill-group';
import { Attribute } from './src/app/attribute/attribute';
import { Skill } from './src/app/skill/skill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mentalSkillGroups: SkillGroup[];
  corporealSkillGroups: SkillGroup[];

  constructor() {
    this.mentalSkillGroups = [new SkillGroup(new Attribute(3,'Cognition',4), [new Skill('first', 3, 0, 'specialization')], 0)];
    this.corporealSkillGroups = [new SkillGroup(new Attribute(12,'Deftness',2), [new Skill('first', 3, 0, 'specialization')], 0)];
  }
}
