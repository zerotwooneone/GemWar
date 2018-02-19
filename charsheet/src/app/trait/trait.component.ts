import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { TraitGroupFactory } from './trait-group-factory';
import { TraitFactoryService } from './trait-factory.service';

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

  constructor(private traitGroupFactory: TraitGroupFactory,
    private traitFactoryService: TraitFactoryService) { }

  ngOnInit() {
    this.isEditable = false;
  }

  addSkill() {
    const name = "";
    let skill = this.traitFactoryService.buildSkill(name);
    let skillGroup = this.traitGroupFactory.buildSkillGroup(skill);
    this.skills.push(skillGroup);
  }

  hideSpecialization(index: number): boolean {
    let skill = this.getSkillByIndex(index);
    let value = this.getSpecialization(skill);

    return value == undefined || value == null;
  }
  getSpecializationControl(skill: FormGroup): FormControl {
    return <FormControl>skill.get('specialization');
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
    let value = this.getSpecializationControl(skill).value;
    return value == null || value == undefined ? null : String(value);
  }

  getSkillDieCount(skill: FormGroup): number {
    return Number(skill.get('dieCount').value);
  }

  removeSkill(index: number): void {
    this.skills.controls.splice(index, 1);
  }

  addSpec(skill: FormGroup): void {
    let control = this.getSpecializationControl(skill);
    control.setValue('');
  }

  removeSpec(skill: FormGroup): void {
    let control = this.getSpecializationControl(skill);
    control.setValue(null);
  }
}
