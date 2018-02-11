import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill/skill';
import { SkillGroup } from '../skill/skill-group';
import { SkillFactory } from '../skill/skill-factory';

@Component({
  selector: 'skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.css']
})
export class SkillBlockComponent implements OnInit {
  get skills(): Skill[] {
    return this.skillGroup.skills;
  }
  get name(): string {
    return this.skillGroup.attribute.name;
  }

  @Input() skillGroup: SkillGroup;

  constructor(private skillFactory: SkillFactory) { }

  ngOnInit() {
  }

  addSkill() {
    let sortOrder = this.skills.length + 1;
    let skill = this.skillFactory.CreateSkill(sortOrder);
    this.skills.push(skill);
  }
}
