export class TraitSkill {
  name: string;
  dieCount: number;
  sortOrder: number;
  specialization: string;
  displaySpecialization: boolean;

  constructor(name: string,
    dieCount: number,
    sortOrder: number,
    specialization: string = null,
    displaySpecialization:boolean=false) {
    this.name = name;
    this.dieCount = dieCount;
    this.sortOrder = sortOrder;
    this.specialization = specialization;
    this.displaySpecialization = displaySpecialization;
  }
}
