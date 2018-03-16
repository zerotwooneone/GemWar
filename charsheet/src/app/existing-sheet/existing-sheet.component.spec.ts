import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSheetComponent } from './existing-sheet.component';
import { FormStorageService } from '../storage/form-storage.service';

describe('ExistingSheetComponent', () => {
  let component: ExistingSheetComponent;
  let fixture: ComponentFixture<ExistingSheetComponent>;
  let formStorageService: FormStorageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingSheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSheetComponent);
    component = fixture.componentInstance;
    formStorageService = TestBed.get(FormStorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call save',
    () => {
      component.update();

      expect(formStorageService.saveForm).toHaveBeenCalled();
    });
});
