import { Trait } from './trait';
import { Skill } from '../skill/skill';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CustomValidators } from './custom.validators';
import { Injectable } from '@angular/core';
import { TraitFactoryService } from './trait-factory.service';
import { FormModel } from '../form/form-model';

@Injectable()
export class TraitGroupFactory {

  constructor(private formBuilder: FormBuilder) { }

  getMentalDefaults(traits: Trait[]): FormArray {
    const array = this.buildTraitGroups(traits);
    return this.formBuilder.array(array, null, CustomValidators.uniqueTraitName);
  }

  buildTraitGroups(traits: Trait[]): FormGroup[] {
    const array: FormGroup[] = [];
    for (const trait of traits) {
      const traitGroup = this.buildTraitGroup(trait);
      array.push(traitGroup);
    }
    return array;
  }

  buildTraitGroup(trait: Trait): FormGroup {
    const skillsArray = [];
    for (const skill of trait.skills) {
      skillsArray.push(this.buildSkillGroup(skill));
    }
    const result = this.formBuilder.group({
      'traitName': this.formBuilder.control(trait.traitName, Validators.compose([Validators.required, CustomValidators.traitName]),
        CustomValidators.uniqueTraitName),
      'dieType': this.formBuilder.control(trait.dieType || 0, CustomValidators.dieType),
      'dieCount': this.formBuilder.control(trait.dieCount || 0, CustomValidators.dieCount),
      'rollModifier': this.formBuilder.control(trait.rollModifier || null, CustomValidators.rollModifier),
      'skills': this.formBuilder.array(skillsArray, null, CustomValidators.uniqueSkillName)
    });
    return result;
  }

  buildSkillGroup(skill: Skill): FormGroup {
    const specializtionValue = skill.specialization === undefined || skill.specialization == null ? null : skill.specialization;
    const result = this.formBuilder.group({
      'skillName': this.formBuilder.control(skill.skillName, Validators.compose([Validators.required, CustomValidators.skillName]),
        CustomValidators.uniqueSkillName),
      'dieCount': this.formBuilder.control(skill.dieCount || 0, CustomValidators.dieCount),
      'specialization': this.formBuilder.control(specializtionValue, CustomValidators.specialization)
    });
    return result;
  }

  getCorporealDefaults(traits: Trait[]): FormArray {
    const array = this.buildTraitGroups(traits);
    return this.formBuilder.array(array, null, CustomValidators.uniqueTraitName);
  }

  getFormGroup(formModel: FormModel): FormGroup {
    const result = this.formBuilder.group({
      currentWind: formModel.currentWind || 0,
      currentStrain: formModel.currentStrain || 0,
      mentalTraits: this.formBuilder.array(this.buildTraitGroups(formModel.mentalTraits)),
      corporealTraits: this.formBuilder.array(this.buildTraitGroups(formModel.corporealTraits)),
      edges: this.formBuilder.array(formModel.edges.map(edgeModel => this.formBuilder.group(edgeModel))),
      name: formModel.name
    });
    return result;
  }

}
