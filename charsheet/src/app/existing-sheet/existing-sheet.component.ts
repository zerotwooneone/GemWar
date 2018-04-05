import { Component, OnInit } from '@angular/core';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormStorageService } from '../storage/form-storage.service';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { ActivatedRoute } from '../../testing';
import { FormModel } from '../form/form-model';
import { FormSaveService } from '../form/form-save.service';

@Component({
  selector: 'zer-existing-sheet',
  templateUrl: './existing-sheet.component.html',
  styleUrls: ['./existing-sheet.component.scss']
})
export class ExistingSheetComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formBuilder: FormBuilder,
    private formStorageService: FormStorageService,
    private traitFactoryService: TraitFactoryService,
    private activatedRoute: ActivatedRoute,
    private formSaveService: FormSaveService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        const formModel = <FormModel>this.formStorageService.loadForm(this.id);
        this.form = this.traitGroupFactory.getFormGroup(formModel);
      }
    });
    this.formSaveService.updateObservable.subscribe(s => {
      this.formStorageService.saveForm(this.id, this.form.get('name').value, this.form.value);
      s.next(this.id);
    });
  }
}
