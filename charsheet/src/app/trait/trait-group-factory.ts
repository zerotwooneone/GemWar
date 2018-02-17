import { Trait } from './trait';
import { Attribute } from '../attribute/attribute';
import { Skill } from '../skill/skill';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { CustomValidators } from './custom.validators';
import { Injectable } from '@angular/core';

@Injectable()
export class TraitGroupFactory {

  constructor(private formBuilder: FormBuilder) { }

  GetMentalDefaults(): FormArray {
    let traits: FormGroup[] = [];

    let trait = this.buildTraitGroup('Cognition',
      [
        { name: 'Artillery' },
        { name: 'Arts', spec: '' },
        { name: 'Scrutinize' },
        { name: 'Search', count: 1 },
        { name: 'Trackn\'' }
      ]);
    traits.push(trait);

    trait = this.buildTraitGroup('Knowledge',
      [
        { name: 'Academia', spec: '' },
        { name: 'Area Knowledge', spec: 'Home County' },
        { name: 'Demolition' },
        { name: 'Disguise' },
        { name: 'Language', spec: '' },
        { name: 'Language', count: 2, spec: 'Native Tongue' },
        { name: 'Medicine' },
        { name: 'Professional', spec: '' },
        { name: 'Science', spec: '' },
        { name: 'Trade', spec: '' }
      ]);
    traits.push(trait);

    trait = this.buildTraitGroup('Mien',
      [
        { name: 'Animal Handlin\'' },
        { name: 'Leadership' },
        { name: 'Overawe' },
        { name: 'Performin\'', spec: '' },
        { name: 'Persuasion' },
        { name: 'Tale Tellin\'' }
      ]);
    traits.push(trait);

    trait = this.buildTraitGroup('Smarts',
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

    trait = this.buildTraitGroup('Spirit',
      [
        { name: 'Faith' },
        { name: 'Guts' }
      ]);
    traits.push(trait);

    return this.formBuilder.array(traits, null, CustomValidators.uniqueTraitName);
  }

  buildTraitGroup(traitName: string, skills: { name: string, spec?: string, count?: number, type?: number, mod?: number }[],
    count?: number, type?: number, mod?: number
  ): FormGroup {
    let skillsArray = [];
    for (var skill of skills) {
      skillsArray.push(this.buildSkillGroup(skill.name, skill.spec, skill.count, skill.type, skill.mod));
    }
    let result = this.formBuilder.group({
      'traitName': this.formBuilder.control(traitName, Validators.compose([Validators.required, CustomValidators.traitName]), CustomValidators.uniqueTraitName),
      'dieType': this.formBuilder.control(type || 0, CustomValidators.dieType),
      'dieCount': this.formBuilder.control(count || 0, CustomValidators.dieCount),
      'rollModifier': this.formBuilder.control(mod || null, CustomValidators.rollModifier),
      'skills': this.formBuilder.array(skillsArray, null, CustomValidators.uniqueSkillName)
    });
    return result;
  }

  buildSkillGroup(name: string, spec?: string, count?: number, type?: number, mod?: number): FormGroup {
    let specializtionValue = spec == undefined || spec == null ? null : spec;
    let result = this.formBuilder.group({
      'skillName': this.formBuilder.control(name, Validators.compose([Validators.required, CustomValidators.skillName]), CustomValidators.uniqueSkillName),
      //'dieType': this.formBuilder.control(type || 0, CustomValidators.dieType),
      'dieCount': this.formBuilder.control(count || 0, CustomValidators.dieCount),
      //'rollModifier': this.formBuilder.control(mod || null, CustomValidators.rollModifier),
      'specialization': this.formBuilder.control(specializtionValue, CustomValidators.specialization)
    });
    return result;
  }

  GetCorporealDefaults(): FormArray {
    let traits: FormGroup[] = [];

    let trait = this.buildTraitGroup('Deftness',
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

    trait = this.buildTraitGroup('Nimbleness',
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

    trait = this.buildTraitGroup('Strength', []);
    traits.push(trait);

    trait = this.buildTraitGroup('Quickness',
      [
        { name: 'Quick Draw' }
      ]);
    traits.push(trait);

    trait = this.buildTraitGroup('Vigor', []);
    traits.push(trait);

    return this.formBuilder.array(traits, null, CustomValidators.uniqueTraitName);
  }

  addSkill(skills: Skill[], name: string, displaySpecialization?: boolean, dieCount?: number, specialization?: string): Skill;
  addSkill(skills: Skill[], name: string, displaySpecialization?: boolean): Skill;
  addSkill(skills: Skill[], name: string, displaySpecialization: boolean = false, dieCount: number = 0, specialization: string = null): Skill {
    let sortOrder = skills.length;
    let skill = new Skill(name, dieCount, sortOrder, specialization, displaySpecialization);
    skills.push(skill);
    return skill;
  }
}
