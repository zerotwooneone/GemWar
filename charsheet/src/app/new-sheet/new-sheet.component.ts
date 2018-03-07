import { Component, OnInit } from '@angular/core';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormStorageService } from '../storage/form-storage.service';
import { TraitFactoryService } from '../trait/trait-factory.service';

@Component({
  selector: 'zer-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.scss']
})
export class NewSheetComponent implements OnInit {

  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formBuilder: FormBuilder,
    private formStorageService: FormStorageService,
    private traitFactoryService: TraitFactoryService) { }

  ngOnInit() {
    let formModel = this.traitFactoryService.getFormDefault();

    //this is just for testing
    formModel.edgeModels.push({ isEdge: false, name: "", value: 0 });
    formModel.edgeModels.push({ isEdge: false, name: "", value: 0 });

    this.form = this.traitGroupFactory.getFormGroup(formModel);
  }

  save(): void {
    const key = this.formStorageService.saveNewForm(this.form);    
  }

}
