import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSheetComponent } from './new-sheet.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SaveResult } from '../../form/save-result';
import { FormSaveService } from '../../form/form-save.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { MockFormSaveService } from '../../../testing/mock-services';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewSheetComponent', () => {
  let component: NewSheetComponent;
  let fixture: ComponentFixture<NewSheetComponent>;

  let formSaveService: FormSaveService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewSheetComponent],
      imports: [MatIconModule, RouterTestingModule],
      providers: [{ provide: FormSaveService, useClass: MockFormSaveService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSheetComponent);
    component = fixture.componentInstance;

    formSaveService = TestBed.get(FormSaveService);
    router = TestBed.get(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call save form', async(async () => {
    const sheetId = 'sheetId';
    const sheetIdSubject = new BehaviorSubject<string>(sheetId);
    const saveResult = new SaveResult(sheetIdSubject);
    spyOn(formSaveService, 'save').and.returnValue(saveResult);
    spyOn(router, 'navigate');

    await component.save();

    expect(router.navigate).toHaveBeenCalled();
  }));
});
