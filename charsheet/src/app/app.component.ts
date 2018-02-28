import { Component, OnInit, TemplateRef } from '@angular/core';
import { Trait } from './trait/trait';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { TraitFactoryService } from './trait/trait-factory.service';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material';
import { EdgeModel } from './edge-hinderance/edge-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
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
  form: FormGroup;

  constructor(private traitGroupFactory: TraitGroupFactory,
    private formBuilder: FormBuilder,
    private formStorageService: FormStorageService,
    private traitFactoryService: TraitFactoryService) {

  }

  ngOnInit(): void {
    let formModel = this.traitFactoryService.getFormDefault();
    
    //this is just for testing
    formModel.edgeModels.push({isEdge: false, name: "", value:0});
    formModel.edgeModels.push({isEdge: false, name: "", value:0}); 

    this.form = this.traitGroupFactory.getFormGroup(formModel);
    
  }

  getTrait(traitArray: FormArray, name: string): FormGroup {
    return <FormGroup>traitArray.controls.find(g => g.get('traitName').value === name);
  }

  get vigorTrait(): FormGroup {
    return this.getTrait(this.corporealTraits, 'Vigor');
  }

  get vigorDieType(): number {
    let vigorTrait = this.vigorTrait;
    return vigorTrait ? Number(vigorTrait.get('dieType').value) : null;
  }

  get spiritTrait(): FormGroup {
    return this.getTrait(this.mentalTraits, 'Spirit');
  }

  get spiritDieType(): number {
    let spiritTrait = this.spiritTrait;
    return spiritTrait ? Number(spiritTrait.get('dieType').value) : null;
  }

  onSave(): void {
    this.formStorageService.saveForm('test', this.form);
  }

}
