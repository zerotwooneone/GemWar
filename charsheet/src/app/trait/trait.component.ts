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
  isEditable: boolean;

  constructor(private traitGroupFactory: TraitGroupFactory) { }

  ngOnInit() {
    this.isEditable = false;
  }

  addSkill() {
    const name = "";
    let skill = this.traitGroupFactory.buildSkillGroup(name);
    this.skills.push(skill);
  }

  hideSpecialization(index: number): boolean {
    let skill = this.getSkillByIndex(index);
    let value = skill.get('specialization').value;

    return value == undefined || value == null;
  }
  getSkillByIndex(index: number): FormGroup {
    return <FormGroup>this.skills.controls[index];
  }
  getDieType(): number {
    return this.trait.get('dieType').value;
  }
  get dieCount(): number {
    return this.trait.get('dieCount').value;
  }
  getRollModifier(): number {
    return this.trait.get('rollModifier').value;
  }
  toggleEdit(): void {
    this.isEditable = !this.isEditable;
  }

  getSkillName(skill: FormGroup): string {
    return String(skill.get('skillName').value);
  }

  getSpecialization(skill: FormGroup): string {
    return String(skill.get('specialization').value);
  }

  getSkillDieCount(skill: FormGroup): number {
    return Number(skill.get('dieCount').value);
  }
}
