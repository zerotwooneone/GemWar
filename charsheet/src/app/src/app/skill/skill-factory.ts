import { Skill } from "./skill";

export class SkillFactory {
  CreateSkill(sortOrder:number): Skill {
    let newName = `Skill${sortOrder}`;
    const initialDieCount: number = 0;
    let skill = new Skill(newName, initialDieCount, sortOrder);
    return skill;
  }
}
