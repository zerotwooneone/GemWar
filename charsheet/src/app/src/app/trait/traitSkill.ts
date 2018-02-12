export class TraitSkill {
  name: string;
  dieCount: number;
  sortOrder: number;
  specialization: string;

  constructor(name: string,
    dieCount: number,
    sortOrder: number,
    specialization: string = null) {
    this.name = name;
    this.dieCount = dieCount;
    this.sortOrder = sortOrder;
    this.specialization = specialization;
  }
}
