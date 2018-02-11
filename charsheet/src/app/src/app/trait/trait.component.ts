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
  get skills(): Skill[] {
    return this.trait.skills;
  }
  get name(): string {
    return this.trait.attribute.name;
  }

  @Input() trait: Trait;

  constructor(private skillFactory: SkillFactory) { }

  ngOnInit() {
  }

  addSkill() {
    let sortOrder = this.skills.length + 1;
    let skill = this.skillFactory.CreateSkill(sortOrder);
    this.skills.push(skill);
  }
}
