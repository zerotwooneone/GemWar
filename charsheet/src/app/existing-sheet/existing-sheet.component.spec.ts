import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSheetComponent } from './existing-sheet.component';
import { FormStorageService } from '../storage/form-storage.service';
import { FormSaveService } from '../form/form-save.service';
import { MockSheetComponent } from '../../testing/mock-components';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { MockTraitFactoryService, MockTraitGroupFactory, MockFormStorageService } from '../../testing/mock-services';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/observable/from';

describe('ExistingSheetComponent', () => {
  let component: ExistingSheetComponent;
  let fixture: ComponentFixture<ExistingSheetComponent>;
  let formStorageService: FormStorageService;
  let formSaveService: FormSaveService;
  const id = 'id';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingSheetComponent, MockSheetComponent],
      providers: [FormSaveService,
        { provide: FormStorageService, useClass: MockFormStorageService },
        { provide: TraitGroupFactory, useClass: MockTraitGroupFactory },
        { provide: TraitFactoryService, useClass: MockTraitFactoryService },
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: Observable.from([{ id: id }]),
          },
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSheetComponent);
    component = fixture.componentInstance;
    formStorageService = TestBed.get(FormStorageService);
    formSaveService = TestBed.get(FormSaveService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should match saved id',
    async () => {
      let actual: string = null;

      spyOn(formStorageService, 'saveForm').and.returnValue(id);

      const saveResult = formSaveService.update();
      saveResult.sheetId.subscribe(s => {
        actual = s;
      });

      await saveResult.sheetId.first().toPromise();

      expect(actual).toBe(id);
    });
});
