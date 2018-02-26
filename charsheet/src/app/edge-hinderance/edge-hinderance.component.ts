import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { EdgeModel } from './edge-model';

@Component({
  selector: 'zer-edge-hinderance',
  templateUrl: './edge-hinderance.component.html',
  styleUrls: ['./edge-hinderance.component.scss']
})
export class EdgeHinderanceComponent implements OnInit {

  edgeControls: FormArray;
  @Input() edges: EdgeModel[]; 

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    let edgeControls = [];
    for (const edgeModel of this.edges) {
      edgeControls.push(this.formBuilder.group(edgeModel));
    }
    this.edgeControls = this.formBuilder.array(edgeControls);
  }

  isEdge(index: number): boolean {
    return this.edgeControls.controls[index].get('isEdge').value;
  }

  type(index: number): string {
    return this.isEdge(index) ? 'Edge' : 'Hinderance';
  }

  name(index: number): string {
    return this.edgeControls.controls[index].get('name').value;
  }

  value(index: number): string {
    return this.edgeControls.controls[index].get('value').value;
  }
}
