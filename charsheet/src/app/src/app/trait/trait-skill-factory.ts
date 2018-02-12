import { TraitSkill } from "./traitSkill";
import { Skill } from "../skill/skill";

export class TraitSkillFactory {
  Create(skill: Skill): TraitSkill {
    return this.CreateBase(skill.dieCount, skill.name, skill.sortOrder, skill.specialization);
  }

  CreateBase(dieCount: number, name: string, sortOrder: number, specialization: string, displaySpecialization: boolean = false): TraitSkill {
    return new TraitSkill(name, dieCount, sortOrder, specialization, displaySpecialization);
  }
}
