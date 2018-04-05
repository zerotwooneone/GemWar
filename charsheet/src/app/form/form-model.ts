import { Trait } from '../trait/trait';
import { EdgeModel } from '../edge-hinderance/edge-model';

export class FormModel {
  get currentWind(): number { return this._currentWind; }
  get currentStrain(): number { return this._currentStrain; }
  get mentalTraits(): Trait[] { return this._mentalTraits; }
  get corporealTraits(): Trait[] { return this._corporealTraits; }
  get edges(): EdgeModel[] { return this._edgeModels; }
  get name(): string { return this._name; }
  constructor(private _currentWind: number,
    private _currentStrain: number,
    private _mentalTraits: Trait[],
    private _corporealTraits: Trait[],
    private _edgeModels: EdgeModel[],
    private _name: string) {
  }
}
