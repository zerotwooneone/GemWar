import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'zh-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.scss']
})
export class SheetComponent implements OnInit {

  get mentalTraits(): FormArray {
    return <FormArray>this.form.get('mentalTraits');
  }
  get corporealTraits(): FormArray {
    return <FormArray>this.form.get('corporealTraits');
  }
  get windTotal(): number {
    return this.vigorDieType + this.spiritDieType;
  }
  get strainMax(): number {
    return this.vigorDieType;
  }
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  getTrait(traitArray: FormArray, name: string): FormGroup {
    return <FormGroup>traitArray.controls.find(g => g.get('traitName').value === name);
  }

  get vigorTrait(): FormGroup {
    return this.getTrait(this.corporealTraits, 'Vigor');
  }

  get vigorDieType(): number {
    const vigorTrait = this.vigorTrait;
    return vigorTrait ? Number(vigorTrait.get('dieType').value) : null;
  }

  get spiritTrait(): FormGroup {
    return this.getTrait(this.mentalTraits, 'Spirit');
  }

  get spiritDieType(): number {
    const spiritTrait = this.spiritTrait;
    return spiritTrait ? Number(spiritTrait.get('dieType').value) : null;
  }

  get name(): string {
    return this.form.get('name').value;
  }

}
