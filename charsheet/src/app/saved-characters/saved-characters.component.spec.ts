import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCharactersComponent } from './saved-characters.component';
import { MockFormStorageService } from '../../testing/mock-services';
import { FormStorageService } from '../storage/form-storage.service';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';
import { FormModel } from '../form/form-model';
import {
  MatListModule,
  MatIconModule,
  MatSnackBarModule,
  MatSnackBar,
  MatTooltipModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SavedCharactersComponent', () => {
  let component: SavedCharactersComponent;
  let fixture: ComponentFixture<SavedCharactersComponent>;
  let formStorageService: FormStorageService;
  const expectedSheets: ISheetsStorageModel = {};
  let matSnackBar: MatSnackBar;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCharactersComponent],
      providers: [
        { provide: FormStorageService, useClass: MockFormStorageService }
      ],
      imports: [
        MatListModule,
        MatIconModule,
        RouterTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        MatTooltipModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCharactersComponent);
    component = fixture.componentInstance;
    formStorageService = TestBed.get(FormStorageService);
    matSnackBar = TestBed.get(MatSnackBar);

    expectedSheets['one'] = {
      name: 'char one',
      value: new FormModel(null, null, null, null, null, null)
    };
    expectedSheets['two'] = {
      name: 'char one',
      value: new FormModel(null, null, null, null, null, null)
    };

    spyOn(formStorageService, 'getSheets').and.returnValue(expectedSheets);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should list saved characters', () => {
    expect(component.chars.length).toBe(Object.keys(expectedSheets).length);
  });
  it('should remove when delete called', () => {
    const index = 0;
    const notExpected = component.chars[index];
    component.delete(index);
    const actual = component.chars[index];

    expect(actual).not.toBe(notExpected);
  });
  it('should replace when delete is undone', () => {
    const index = 0;
    const expected = component.chars[index];
    spyOn(matSnackBar, 'open').and.returnValue({
      afterDismissed: () => Observable.of({ dismissedByAction: true })
    });
    component.delete(index);
    fixture.detectChanges();
    const actual = component.chars[index];

    expect(actual).toBe(expected);
  });
});
