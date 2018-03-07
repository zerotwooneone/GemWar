import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSheetComponent } from './existing-sheet.component';

describe('ExistingSheetComponent', () => {
  let component: ExistingSheetComponent;
  let fixture: ComponentFixture<ExistingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingSheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call save',
    () => {
      component.save();

      expect(formStorageService.saveForm).toHaveBeenCalled();
    });
});
