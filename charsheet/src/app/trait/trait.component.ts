import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { FormGroup, FormArray } from '@angular/forms';
import { TraitGroupFactory } from './trait-group-factory';

@Component({
  selector: 'trait',
  templateUrl: './trait.component.html',
  styleUrls: ['./trait.component.scss']
})
export class TraitComponent implements OnInit {

  @Input() trait: FormGroup;
  get skills(): FormArray {
    return <FormArray>this.trait.get('skills');
  }
  get traitName(): string {
    return this.trait.get('traitName').value;
  }

  constructor(private traitGroupFactory: TraitGroupFactory) { }

  ngOnInit() {

  }

  addSkill() {
    const name = "";
    let skill = this.traitGroupFactory.buildSkillGroup(name);
    this.skills.push(skill);
  }

  getSkillName(index: number): string {
    return this.getSkill(index).get('skillName').value;
  }
  hideSpecialization(index: number): boolean {
    let value = this.getSkill(index).get('specialization').value;
    return value == undefined || value == null;
  }
  getSkill(index: number): FormGroup {
    return <FormGroup>this.skills.controls[index];
  }
  getDieType(): number {
    return this.trait.get('dieType').value;
  }
  getRollModifier(): number {
    return this.trait.get('rollModifier').value;
  }
}
