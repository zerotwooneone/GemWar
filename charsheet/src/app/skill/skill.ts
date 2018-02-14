export class Skill {
  constructor(public name: string,
    public dieCount: number,
    public sortOrder: number,
    public specialization: string = null,
    public displaySpecialization: boolean = false) {
  }
}
