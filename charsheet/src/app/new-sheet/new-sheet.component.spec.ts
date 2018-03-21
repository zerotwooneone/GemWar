import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSheetComponent } from './new-sheet.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormSaveService } from '../form/form-save.service';
import { FormStorageService } from '../storage/form-storage.service';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, Input, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { FormModel } from '../form/form-model';
import { SaveResult } from '../form/save-result';
import { BrowserStorageService } from '../storage/browser-storage.service';
import { MockSheetComponent } from '../../testing/mock-components';
import { MockFormStorageService, MockTraitGroupFactory, MockTraitFactoryService } from '../../testing/mock-services';

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let fixture: ComponentFixture<NewSheetComponent>;
  let formSaveService: FormSaveService;
  let formStorageService: FormStorageService;
  let traitGroupFactory: TraitGroupFactory;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewSheetComponent, MockSheetComponent],
      providers: [FormSaveService,
        { provide: FormStorageService, useClass: MockFormStorageService },
        { provide: TraitGroupFactory, useClass: MockTraitGroupFactory },
        { provide: TraitFactoryService, useClass: MockTraitFactoryService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSheetComponent);
    component = fixture.componentInstance;

    formSaveService = TestBed.get(FormSaveService);
    formStorageService = TestBed.get(FormStorageService);

    const traitFactoryService: TraitFactoryService = TestBed.get(TraitFactoryService);
    traitGroupFactory = TestBed.get(TraitGroupFactory);

    formSaveService = TestBed.get(FormSaveService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should call save', async () => {
    let actual: string = null;
    const id = 'id';
    spyOn(formStorageService, 'saveNewForm').and.returnValue(id);

    const saveResult = formSaveService.save();
    saveResult.sheetId.subscribe(s => {
      actual = s;
    });

    await saveResult.sheetId.first().toPromise();

    expect(actual).toBe(id);
  });
});
