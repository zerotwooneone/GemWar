import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCharactersComponent } from './saved-characters.component';
import { MockFormStorageService } from '../../testing/mock-services';
import { FormStorageService } from '../storage/form-storage.service';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';
import { FormModel } from '../form/form-model';
import { MatListModule, MatIconModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('SavedCharactersComponent', () => {
  let component: SavedCharactersComponent;
  let fixture: ComponentFixture<SavedCharactersComponent>;
  let formStorageService: FormStorageService;
  const expectedSheets: ISheetsStorageModel = {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCharactersComponent],
      providers: [{ provide: FormStorageService, useClass: MockFormStorageService }],
      imports: [MatListModule,
        MatIconModule,
        RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCharactersComponent);
    component = fixture.componentInstance;
    formStorageService = TestBed.get(FormStorageService);

    expectedSheets['one'] = { name: 'char one', value: new FormModel(null, null, null, null, null) };
    expectedSheets['two'] = { name: 'char one', value: new FormModel(null, null, null, null, null) };

    spyOn(formStorageService, 'getSheets').and.returnValue(expectedSheets);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should list saved characters', () => {

    expect(component.chars.length).toBe(Object.keys(expectedSheets).length);
  });
});
