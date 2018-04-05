import { Component, OnInit } from '@angular/core';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormStorageService } from '../storage/form-storage.service';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { FormSaveService } from '../form/form-save.service';
import { NewSheetService } from './new-sheet.service';

@Component({
  selector: 'zer-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.scss']
})
export class NewSheetComponent implements OnInit {

  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formStorageService: FormStorageService,
    private traitFactoryService: TraitFactoryService,
    private formSaveService: FormSaveService,
    private newSheetService: NewSheetService) { }

  ngOnInit() {
    this.formSaveService.saveObservable.subscribe(callback => {
      const id = this.formStorageService.saveNewForm('char name', this.form.value);
      callback.next(id);
    });
    this.reloadForm();

    this.newSheetService.startOverObservable.subscribe(v => {
      this.reloadForm();
    });
  }

  reloadForm(): void {
    const formModel = this.traitFactoryService.getFormDefault();

    this.form = this.traitGroupFactory.getFormGroup(formModel);
  }
}
