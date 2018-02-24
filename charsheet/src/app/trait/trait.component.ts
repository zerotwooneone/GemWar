import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  removeSkill(index:number): void {
    this.skills.controls.splice(index, 1);
  }

}
