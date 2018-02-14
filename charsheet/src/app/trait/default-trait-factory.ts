import { Trait } from './trait';
import { Attribute } from '../attribute/attribute';
import { Skill } from '../skill/skill';

export class DefaultTraitFactory {
  GetMentalDefaults(): Trait[] {
    let traits = [];

    let trait = new Trait(new Attribute(0, 'Cognition', 0), [], 0);
    this.addSkill(trait.skills, 'Artillery');
    this.addSkill(trait.skills, 'Arts', true);
    this.addSkill(trait.skills, 'Scrutinize');
    this.addSkill(trait.skills, 'Search', false, 1);
    this.addSkill(trait.skills, 'Trackn\'');
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Knowledge', 0), [], 1);
    this.addSkill(trait.skills, 'Academia', true);
    this.addSkill(trait.skills, 'Area Knowledge', true);
    this.addSkill(trait.skills, 'Area Knowledge', true, 2, 'Home County');
    this.addSkill(trait.skills, 'Demolition');
    this.addSkill(trait.skills, 'Disguise');
    this.addSkill(trait.skills, 'Language', true);
    this.addSkill(trait.skills, 'Language', true, 2, 'Native Tongue');
    this.addSkill(trait.skills, 'Medicine');
    this.addSkill(trait.skills, 'Professional', true);
    this.addSkill(trait.skills, 'Science', true);
    this.addSkill(trait.skills, 'Trade', true);
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Mien', 0), [], 2);
    this.addSkill(trait.skills, 'Animal Handlin\'');
    this.addSkill(trait.skills, 'Leadership');
    this.addSkill(trait.skills, 'Overawe');
    this.addSkill(trait.skills, 'Performin\'', true);
    this.addSkill(trait.skills, 'Persuasion');
    this.addSkill(trait.skills, 'Tale Tellin\'');
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Smarts', 0), [], 3);
    this.addSkill(trait.skills, 'Bluff');
    this.addSkill(trait.skills, 'Gamblin\'');
    this.addSkill(trait.skills, 'Ridicule');
    this.addSkill(trait.skills, 'Scroungin\'');
    this.addSkill(trait.skills, 'Survival', true);
    this.addSkill(trait.skills, 'Streetwise');
    this.addSkill(trait.skills, 'Tinkerin\'');
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Spirit', 0), [], 4);
    this.addSkill(trait.skills, 'Faith');
    this.addSkill(trait.skills, 'Guts');
    traits.push(trait);

    return traits;
  }

  GetCorporealDefaults(): Trait[] {
    let traits = [];

    let trait = new Trait(new Attribute(0, 'Deftness', 0), [], 0);
    this.addSkill(trait.skills, 'Bow');
    this.addSkill(trait.skills, 'Filchin\'');
    this.addSkill(trait.skills, 'Lockpickin\'');
    this.addSkill(trait.skills, 'Shootin\'', true);
    this.addSkill(trait.skills, 'Slight o\' Hand');
    this.addSkill(trait.skills, 'Speed Load');
    this.addSkill(trait.skills, 'Throwin\'', true);
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Nimbleness', 0), [], 1);
    this.addSkill(trait.skills, 'Climbin\'', false, 1);
    this.addSkill(trait.skills, 'Dodge');
    this.addSkill(trait.skills, 'Drivin\'', true);
    this.addSkill(trait.skills, 'Fightin\'', true);
    this.addSkill(trait.skills, 'Ridin\'', true);
    this.addSkill(trait.skills, 'Sneak', false, 1);
    this.addSkill(trait.skills, 'Swimin\'');
    this.addSkill(trait.skills, 'Teamster');
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Strength', 0), [], 2);
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Quickness', 0), [], 3);
    this.addSkill(trait.skills, 'Quick Draw');
    traits.push(trait);

    trait = new Trait(new Attribute(0, 'Vigor', 0), [], 4);
    traits.push(trait);

    return traits;
  }

  addSkill(skills: Skill[], name: string, displaySpecialization?: boolean, dieCount?: number, specialization?: string): Skill;
  addSkill(skills: Skill[], name: string, displaySpecialization?: boolean): Skill;
  addSkill(skills: Skill[], name: string, displaySpecialization: boolean = false, dieCount: number = 0, specialization: string = null): Skill {
    let sortOrder = skills.length;
    let skill = new Skill(name, dieCount, sortOrder, null, displaySpecialization);
    skills.push(skill);
    return skill;
  }
}
