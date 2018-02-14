import { Attribute } from "../attribute/attribute";
import { Skill } from "../skill/skill";

export class Trait {
  constructor(public attribute: Attribute,
    public skills: Skill[],
    public sortOrder: number) {
  }
}
