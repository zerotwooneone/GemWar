import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { EdgeModel } from './edge-model';

@Component({
  selector: 'zh-edge-hinderance',
  templateUrl: './edge-hinderance.component.html',
  styleUrls: ['./edge-hinderance.component.scss']
})
export class EdgeHinderanceComponent implements OnInit {

  @Input() edges: FormArray;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  isEdge(index: number): boolean {
    return this.edges.controls[index].get('isEdge').value;
  }

  type(index: number): string {
    return this.isEdge(index) ? 'Edge' : 'Hinderance';
  }

  name(index: number): string {
    return this.edges.controls[index].get('name').value;
  }

  value(index: number): string {
    return this.edges.controls[index].get('value').value;
  }

  add(): void {
    const edgeModel = new EdgeModel();
    edgeModel.isEdge = false;
    edgeModel.name = '';
    edgeModel.value = 0;
    const edgeGroup = this.formBuilder.group(edgeModel);
    this.edges.push(edgeGroup);
  }
  remove(index: number): void {
    this.edges.controls.splice(index, 1);
  }
}
