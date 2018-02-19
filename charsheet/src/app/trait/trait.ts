import { Skill } from "../skill/skill";

export class Trait {
  get traitName(): string { return this._traitName; }
  get dieType(): number { return this._dieType; }
  get dieCount(): number { return this._dieCount; }
  get rollModifier(): number { return this._rollModifier; }
  get skills(): Skill[] { return this._skills; }
  constructor(private _traitName: string,
    private _dieType: number,
    private _dieCount: number,
    private _rollModifier: number,
    private _skills: Skill[]) {
  }
}
