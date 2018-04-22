import { Injectable } from '@angular/core';

@Injectable()
export class MacroService {
  constructor() {}

  GetSkillMacro(
    skillName: string,
    dieType: number,
    dieCount: number,
    rollmodifier: number,
    specialization: string = null
  ): string {
    const namePart =
      `${skillName}` + (specialization ? `: ${specialization}` : '');
    const rollmodifierPart = rollmodifier ? `+${rollmodifier}` : '';
    const macro =
      `/me ${namePart}` +
      '\n' +
      `/roll ${dieCount}d${dieType}kh1!` +
      rollmodifierPart;
    return macro;
  }
}
