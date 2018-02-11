export class Attribute {
  dieType: number;
  name: string;
  dieCount: number;
  modifier: number;

  constructor(dieType: number,
    name: string,
    dieCount: number,
    modifier: number=null) {
    this.dieType = dieType;
    this.name = name;
    this.dieCount = dieCount;
    this.modifier = modifier;
  }
}
