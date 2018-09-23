import { Component, OnInit } from '@angular/core';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormGroup } from '@angular/forms';
import { FormStorageService } from '../storage/form-storage.service';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from '../form/form-model';
import { FormSaveService } from '../form/form-save.service';
import { MostRecentService } from '../most-recent/most-recent.service';

@Component({
  selector: 'zh-existing-sheet',
  templateUrl: './existing-sheet.component.html',
  styleUrls: ['./existing-sheet.component.scss']
})
export class ExistingSheetComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formStorageService: FormStorageService,
    private activatedRoute: ActivatedRoute,
    private formSaveService: FormSaveService,
    private mostRecentService: MostRecentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        const formModel = <FormModel>this.formStorageService.loadForm(this.id);
        this.form = this.traitGroupFactory.getFormGroup(formModel);
        this.mostRecentService.set(this.id);
      }
    });
    this.formSaveService.updateObservable.subscribe(s => {
      this.formStorageService.saveForm(this.id, this.form.get('name').value, this.form.value);
      s.next(this.id);
    });
  }
}
