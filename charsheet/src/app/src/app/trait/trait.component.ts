import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { SkillFactory } from '../skill/skill-factory';

@Component({
  selector: 'trait',
  templateUrl: './trait.component.html',
  styleUrls: ['./trait.component.css']
})
export class TraitComponent implements OnInit {
  
  @Input() trait: Trait;
  skills: Skill[];

  constructor(private skillFactory: SkillFactory) { }

  ngOnInit() {
    this.skills = this.trait.skills.sort((skilla, skillb) => {
      return skilla.sortOrder - skillb.sortOrder;
    });
  }

  addSkill() {
    let sortOrder = this.trait.skills.length + 1;
    let skill = this.skillFactory.CreateSkill(sortOrder);
    this.trait.skills.push(skill);
  }
}
