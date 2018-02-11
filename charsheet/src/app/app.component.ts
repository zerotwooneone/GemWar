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
  skillGroup: SkillGroup;

  constructor() {
    this.skillGroup = new SkillGroup(new Attribute(), [new Skill('first', 3, 0, 'specialization')], 0);
  }
}
