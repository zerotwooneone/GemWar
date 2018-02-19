import { Trait } from "../trait/trait";

export class FormModel {
  get currentWind(): number { return this._currentWind; }
  get currentStrain(): number { return this._currentStrain; }
  get mentailTraits(): Trait[] { return this._mentailTraits; }
  get corporealTraits(): Trait[] { return this._corporealTraits; }
  constructor(private _currentWind: number,
    private _currentStrain: number,
    private _mentailTraits: Trait[],
    private _corporealTraits: Trait[]) {
  }
}
