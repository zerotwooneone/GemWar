export class Skill {
  get skillName(): string { return this._skillName; }
  get dieCount(): number { return this._dieCount; }
  get specialization(): string { return this._specialization; }
  constructor(private _skillName: string,
    private _dieCount: number,
    private _specialization: string = null) {
  }
}
