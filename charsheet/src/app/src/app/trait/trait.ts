import { Attribute } from "../attribute/attribute";
import { Skill } from "../skill/skill";

export class Trait {
  attribute: Attribute;
  skills: Skill[];
  sortOrder: number;

  constructor(attribute: Attribute,
    skills: Skill[],
    sortOrder: number) {
    this.attribute = attribute;
    this.skills = skills;
    this.sortOrder = sortOrder;
  }
}
