import { Trait } from './trait';
import { Attribute } from '../attribute/attribute';
import { Skill } from '../skill/skill';

export class DefaultTraitFactory {
  GetMentalDefaults(): Trait[] {
    return [new Trait(new Attribute(3, 'Cognition', 4), [new Skill('first', 3, 0, 'specialization')], 0)];
  }
  GetCorporealDefaults(): Trait[] {
    return [new Trait(new Attribute(12, 'Deftness', 2), [new Skill('first', 3, 0, 'specialization')], 0)];
  }
}
