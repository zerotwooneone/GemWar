import { Component, OnInit, OnDestroy } from '@angular/core';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormGroup } from '@angular/forms';
import { FormStorageService } from '../storage/form-storage.service';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { FormSaveService } from '../form/form-save.service';
import { NewSheetService } from './new-sheet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'zh-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.scss']
})
export class NewSheetComponent implements OnInit, OnDestroy {

  startOverSubscription: Subscription;
  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formStorageService: FormStorageService,
    private traitFactoryService: TraitFactoryService,
    private formSaveService: FormSaveService,
    private newSheetService: NewSheetService) { }

  ngOnInit() {
    this.formSaveService.saveObservable.subscribe(callback => {
      const id = this.formStorageService.saveNewForm(this.form.get('name').value, this.form.value);
      callback.next(id);
    });
    this.reloadForm();

    this.startOverSubscription = this.newSheetService.startOverObservable.subscribe(v => {
      this.reloadForm();
    });
  }
  ngOnDestroy(): void {
    this.startOverSubscription.unsubscribe();
  }

  reloadForm(): void {
    const formModel = this.traitFactoryService.getFormDefault();

    this.form = this.traitGroupFactory.getFormGroup(formModel);
  }
}
