import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSheetComponent } from './new-sheet.component';
import { Router } from '@angular/router';
import { FormSaveService } from '../form/form-save.service';
import { FormStorageService } from '../storage/form-storage.service';

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let fixture: ComponentFixture<NewSheetComponent>;
  let router:Router;
  let formSaveService:FormSaveService;
  let formStorageService:FormStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSheetComponent ],
      providers:[Router, FormSaveService, FormStorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSheetComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    spyOn(router,'navigate');
    formSaveService = TestBed.get(FormSaveService);
    formStorageService = TestBed.get(FormStorageService);
    spyOn(formStorageService,'saveNewForm');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should should call save', () => {
    formSaveService.save();

    expect(formStorageService.saveForm).toHaveBeenCalled();
  });  
});
