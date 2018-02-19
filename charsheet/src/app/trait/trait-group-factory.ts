import { Trait } from './trait';
import { Skill } from '../skill/skill';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CustomValidators } from './custom.validators';
import { Injectable } from '@angular/core';

@Injectable()
export class TraitGroupFactory {

  constructor(private formBuilder: FormBuilder) { }

  getMentalDefaults(): FormArray {
    let traits: Trait[] = [];

    let trait = this.buildTrait('Cognition',
      [
        { name: 'Artillery' },
        { name: 'Arts', spec: '' },
        { name: 'Scrutinize' },
        { name: 'Search', count: 1 },
        { name: 'Trackn\'' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Knowledge',
      [
        { name: 'Academia', spec: '' },
        { name: 'Area Knowledge', spec: 'Home County', count: 2 },
        { name: 'Demolition' },
        { name: 'Disguise' },
        { name: 'Language', count: 2, spec: 'Native Tongue' },
        { name: 'Medicine' },
        { name: 'Professional', spec: '' },
        { name: 'Science', spec: '' },
        { name: 'Trade', spec: '' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Mien',
      [
        { name: 'Animal Handlin\'' },
        { name: 'Leadership' },
        { name: 'Overawe' },
        { name: 'Performin\'', spec: '' },
        { name: 'Persuasion' },
        { name: 'Tale Tellin\'' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Smarts',
      [
        { name: 'Bluff' },
        { name: 'Gamblin\'' },
        { name: 'Ridicule' },
        { name: 'Scroungin\'' },
        { name: 'Survival', spec: '' },
        { name: 'Streetwise' },
        { name: 'Tinkerin\'' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Spirit',
      [
        { name: 'Faith' },
        { name: 'Guts' }
      ]);
    traits.push(trait);

    let array = this.buildTraitGroups(traits);
    return this.formBuilder.array(array, null, CustomValidators.uniqueTraitName);
  }

  buildTraitGroups(traits: Trait[]): FormGroup[] {
    let array: FormGroup[] = [];
    for (let trait of traits) {
      let traitGroup = this.buildTraitGroup(trait);
      array.push(traitGroup);
    }
    return array;
  }

  buildTraitGroup(trait:Trait): FormGroup {
    let skillsArray = [];
    for (var skill of trait.skills) {
      skillsArray.push(this.buildSkillGroup(skill));
    }
    let result = this.formBuilder.group({
      'traitName': this.formBuilder.control(trait.traitName, Validators.compose([Validators.required, CustomValidators.traitName]), CustomValidators.uniqueTraitName),
      'dieType': this.formBuilder.control(trait.dieType || 0, CustomValidators.dieType),
      'dieCount': this.formBuilder.control(trait.dieCount || 0, CustomValidators.dieCount),
      'rollModifier': this.formBuilder.control(trait.rollModifier || null, CustomValidators.rollModifier),
      'skills': this.formBuilder.array(skillsArray, null, CustomValidators.uniqueSkillName)
    });
    return result;
  }

  buildTrait(traitName: string, skillsData: { name: string, spec?: string, count?: number}[],
    count?: number, type?: number, mod?: number): Trait {
    let skills: Skill[]=[];
    for (let skillData of skillsData) {
      let skill = this.buildSkill(skillData.name, skillData.spec, skillData.count);
      skills.push(skill);
    }
    let result = new Trait(traitName, type || 0, count || 0, mod || null, skills);
    return result;
  }

  buildSkill(name: string, spec?: string, count?: number): Skill {
    let specializtionValue = spec == undefined || spec == null ? null : spec;
    let result = new Skill(name, count || 0, specializtionValue);
    return result;
  }

  buildSkillGroup(skill:Skill): FormGroup {
    let specializtionValue = skill.specialization == undefined || skill.specialization == null ? null : skill.specialization;
    let result = this.formBuilder.group({
      'skillName': this.formBuilder.control(skill.skillName, Validators.compose([Validators.required, CustomValidators.skillName]), CustomValidators.uniqueSkillName),
      'dieCount': this.formBuilder.control(skill.dieCount || 0, CustomValidators.dieCount),
      'specialization': this.formBuilder.control(specializtionValue, CustomValidators.specialization)
    });
    return result;
  }

  getCorporealDefaults(): FormArray {
    let traits: Trait[] = [];

    let trait = this.buildTrait('Deftness',
      [
        { name: 'Bow' },
        { name: 'Filchin\'' },
        { name: 'Lockpickin\'' },
        { name: 'Shootin\'', spec: '' },
        { name: 'Slight o\' Hand' },
        { name: 'Speed Load' },
        { name: 'Throwin\'', spec: '' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Nimbleness',
      [
        { name: 'Climbin\'', count: 1 },
        { name: 'Dodge' },
        { name: 'Drivin\'', spec: '' },
        { name: 'Fightin\'', spec: '' },
        { name: 'Ridin\'', spec: '' },
        { name: 'Sneak', count: 1 },
        { name: 'Swimin\'' },
        { name: 'Teamster' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Strength', []);
    traits.push(trait);

    trait = this.buildTrait('Quickness',
      [
        { name: 'Quick Draw' }
      ]);
    traits.push(trait);

    trait = this.buildTrait('Vigor', []);
    traits.push(trait);

    let array = this.buildTraitGroups(traits);
    return this.formBuilder.array(array, null, CustomValidators.uniqueTraitName);
  }

}
