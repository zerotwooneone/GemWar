import { Injectable } from '@angular/core';
import { Trait } from './trait';
import { Skill } from '../skill/skill';
import { FormModel } from '../form/form-model';
import { EdgeModel } from '../edge-hinderance/edge-model';

@Injectable()
export class TraitFactoryService {

  constructor() { }

  getMentalDefaults(): Trait[] {
    const traits: Trait[] = [];

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

    return traits;
  }

  buildTrait(traitName: string, skillsData: { name: string, spec?: string, count?: number }[],
    count?: number, type?: number, mod?: number): Trait {
    const skills: Skill[] = [];
    for (const skillData of skillsData) {
      const skill = this.buildSkill(skillData.name, skillData.spec, skillData.count);
      skills.push(skill);
    }
    const result = new Trait(traitName, type || 0, count || 0, mod || null, skills);
    return result;
  }

  buildSkill(name: string, spec?: string, count?: number): Skill {
    const specializtionValue = spec === undefined || spec == null ? null : spec;
    const result = new Skill(name, count || 0, specializtionValue);
    return result;
  }

  getCorporealDefaults(): Trait[] {
    const traits: Trait[] = [];

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

    return traits;
  }

  getFormDefault(): FormModel {
    const mentalTraits = this.getMentalDefaults();
    const corporealTraits = this.getCorporealDefaults();
    const edgeModels: EdgeModel[] = [];
    const now = new Date().getTime();
    const result = new FormModel(0, 0, mentalTraits, corporealTraits, edgeModels, `new character ${now}`);
    return result;
  }
}
