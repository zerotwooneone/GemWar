import { Component, OnInit } from '@angular/core';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormStorageService } from '../storage/form-storage.service';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { RouterLink } from '../../testing';
import { RouterLinkActive, Router } from '@angular/router';

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
    private traitFactoryService: TraitFactoryService,
    private router: Router) { }

  ngOnInit() {
    let formModel = this.traitFactoryService.getFormDefault();

    //this is just for testing
    formModel.edgeModels.push({ isEdge: false, name: "", value: 0 });
    formModel.edgeModels.push({ isEdge: false, name: "", value: 0 });

    this.form = this.traitGroupFactory.getFormGroup(formModel);
  }

  save(): void {
    const id = this.formStorageService.saveNewForm(this.form);
    this.router.navigate(['/char', id]);
  }

}
