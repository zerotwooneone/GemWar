import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSheetComponent } from './existing-sheet.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SaveResult } from '../../form/save-result';
import { FormSaveService } from '../../form/form-save.service';
import { MockFormSaveService } from '../../../testing/mock-services';
import { MatIconModule } from '@angular/material';

describe('ExistingSheetComponent', () => {
  let component: ExistingSheetComponent;
  let fixture: ComponentFixture<ExistingSheetComponent>;

  let formSaveService: FormSaveService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingSheetComponent],
      providers: [{ provide: FormSaveService, useClass: MockFormSaveService }],
      imports: [MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSheetComponent);
    component = fixture.componentInstance;

    formSaveService = TestBed.get(FormSaveService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call update form', async(async () => {
    const sheetId = 'sheetId';
    const sheetIdSubject = new BehaviorSubject<string>(sheetId);
    const saveResult = new SaveResult(sheetIdSubject);
    spyOn(formSaveService, 'update').and.returnValue(saveResult);

    await component.update();

    expect(formSaveService.update).toHaveBeenCalled();
  }));
});
