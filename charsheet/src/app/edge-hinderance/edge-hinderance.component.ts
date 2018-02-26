import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'zer-edge-hinderance',
  templateUrl: './edge-hinderance.component.html',
  styleUrls: ['./edge-hinderance.component.scss']
})
export class EdgeHinderanceComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name:'',
      isEdge: false,
      value: 0
    });
  }

  get isEdge():boolean{
    return this.form.get('isEdge').value;
  }

  get type():string{
    return this.isEdge ? 'Edge' : 'Hinderance';
  }

  get name():string{
    return this.form.get('name').value;
  }

  get value():string{
    return this.form.get('value').value;
  }
}
