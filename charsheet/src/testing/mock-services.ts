import { Injectable } from '@angular/core';
import { FormSaveService } from '../app/form/form-save.service';
import { FormModel } from '../app/form/form-model';
import { FormGroup } from '@angular/forms';
import { TraitGroupFactory } from '../app/trait/trait-group-factory';
import { FormStorageService } from '../app/storage/form-storage.service';
import { TraitFactoryService } from '../app/trait/trait-factory.service';

@Injectable()
export class MockFormSaveService extends FormSaveService { }

@Injectable()
export class MockTraitGroupFactory extends TraitGroupFactory {
    constructor() {
        super(null);
    }
    getFormGroup(formModel: FormModel): FormGroup { return <any>{ value: null }; }
}

@Injectable()
export class MockFormStorageService extends FormStorageService {
    constructor() {
        super(null, null, null);
    }
    saveNewForm(charName: string, formValue: FormModel): string {
        return null;
    }

    saveForm(key: string, charName: string, formValue: FormModel): void {

    }

    loadForm(key: string): FormModel { return null; }
}

@Injectable()
export class MockTraitFactoryService extends TraitFactoryService {
    getFormDefault(): FormModel { return new FormModel(0, 0, [], [], []); }
}
