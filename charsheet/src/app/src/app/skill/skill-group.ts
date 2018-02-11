import { Attribute } from "../attribute/attribute";
import { Skill } from "./skill";

export class SkillGroup {
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
