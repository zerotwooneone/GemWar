import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { TraitSkillFactory } from './trait-skill-factory';
import { TraitSkill } from './traitSkill';

@Component({
  selector: 'trait',
  templateUrl: './trait.component.html',
  styleUrls: ['./trait.component.scss']
})
export class TraitComponent implements OnInit {
  
  @Input() trait: Trait;
  skills: TraitSkill[];

  constructor(private traitSkillFactory: TraitSkillFactory) { }

  ngOnInit() {
    this.skills = this.trait.skills
      .map(skill => {
        return this.traitSkillFactory.Create(skill);
      })
      .sort((skilla, skillb) => {
      return skilla.sortOrder - skillb.sortOrder;
    });
  }

  addSkill() {
    let sortOrder = this.trait.skills && this.trait.skills.length ? this.trait.skills[this.trait.skills.length - 1].sortOrder + 1 : 0;
    const dieCount = 0;
    const name = "";
    const specialization = "";
    const displaySpecialization = false;
    let skill = this.traitSkillFactory.CreateBase(dieCount,name,sortOrder,specialization, displaySpecialization);
    this.skills.push(skill);
  }
}
