import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCharactersComponent } from './saved-characters.component';
import {
  MockFormStorageService,
  MockSheetStorageService,
  MockJsonLinkService,
  MockSavedCharacterModelService
} from '../../testing/mock-services';
import { FormStorageService } from '../storage/form-storage.service';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';
import { FormModel } from '../form/form-model';
import {
  MatListModule,
  MatIconModule,
  MatSnackBarModule,
  MatSnackBar,
  MatTooltipModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SheetStorageService } from '../storage/sheet-storage.service';
import { JsonLinkService } from '../json/json-link.service';
import { SavedCharacterModelService } from '../file/saved-character-model.service';
import { SavedCharactersService } from './saved-characters.service';
import { SavedCharacterModel } from './saved-character-model';

describe('SavedCharactersComponent', () => {
  let component: SavedCharactersComponent;
  let fixture: ComponentFixture<SavedCharactersComponent>;
  let formStorageService: FormStorageService;
  const expectedSheets: ISheetsStorageModel = {};
  const firstCharName = 'firstCharName';
  const firstCharKey = 'firstCharKey';
  let matSnackBar: MatSnackBar;
  let sheetStorageService: SheetStorageService;
  let jsonLinkService: JsonLinkService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCharactersComponent],
      providers: [
        { provide: FormStorageService, useClass: MockFormStorageService },
        { provide: SheetStorageService, useClass: MockSheetStorageService },
        { provide: JsonLinkService, useClass: MockJsonLinkService },
        SavedCharactersService
      ],
      imports: [
        MatListModule,
        MatIconModule,
        RouterTestingModule,
        MatSnackBarModule,
        NoopAnimationsModule,
        MatTooltipModule,
        MatCardModule,
        MatInputModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCharactersComponent);
    component = fixture.componentInstance;
    formStorageService = TestBed.get(FormStorageService);
    matSnackBar = TestBed.get(MatSnackBar);

    sheetStorageService = TestBed.get(SheetStorageService);
    expectedSheets[firstCharKey] = {
      name: firstCharName,
      value: new FormModel(null, null, null, null, null, null)
    };
    expectedSheets['two'] = {
      name: 'char two',
      value: new FormModel(null, null, null, null, null, null)
    };
    spyOn(sheetStorageService, 'get').and.returnValue(expectedSheets);

    jsonLinkService = TestBed.get(JsonLinkService);
    spyOn(jsonLinkService, 'getObjectUrl').and.callFake((c: SavedCharacterModel) => c.name);

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
  it('should call delete sheet when undo expires', () => {
    const index = 0;
    spyOn(formStorageService, 'deleteForm');
    spyOn(matSnackBar, 'open').and.returnValue({
      afterDismissed: () => Observable.of({ dismissedByAction: false })
    });
    component.delete(index);
    fixture.detectChanges();

    expect(formStorageService.deleteForm).toHaveBeenCalledWith(firstCharKey);
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
