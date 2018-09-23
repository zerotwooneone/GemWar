import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSheetComponent } from './existing-sheet.component';
import { FormStorageService } from '../storage/form-storage.service';
import { FormSaveService } from '../form/form-save.service';
import { MockSheetComponent } from '../../testing/mock-components';
import { TraitGroupFactory } from '../trait/trait-group-factory';
import { TraitFactoryService } from '../trait/trait-factory.service';
import { MockTraitFactoryService, MockTraitGroupFactory, MockFormStorageService, MockMostRecentService } from '../../testing/mock-services';
import { FormBuilder } from '@angular/forms';
import { Observable, from } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { MostRecentService } from '../most-recent/most-recent.service';
import { FormModel } from '../form/form-model';

describe('ExistingSheetComponent', () => {
  let component: ExistingSheetComponent;
  let fixture: ComponentFixture<ExistingSheetComponent>;
  let formStorageService: FormStorageService;
  let formSaveService: FormSaveService;
  const id = 'id';
  let mostRecentService: MostRecentService;
  let activatedRoute: ActivatedRoute;
  let traitGroupFactory: TraitGroupFactory;
  let formBuilder: FormBuilder;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExistingSheetComponent, MockSheetComponent],
      providers: [FormSaveService,
        { provide: FormStorageService, useClass: MockFormStorageService },
        { provide: TraitGroupFactory, useClass: MockTraitGroupFactory },
        { provide: TraitFactoryService, useClass: MockTraitFactoryService },
        { provide: MostRecentService, useClass: MockMostRecentService },
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: id }]),
          },
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingSheetComponent);
    component = fixture.componentInstance;

    formSaveService = TestBed.get(FormSaveService);
    mostRecentService = TestBed.get(MostRecentService);
    activatedRoute = TestBed.get(ActivatedRoute);

    formStorageService = TestBed.get(FormStorageService);
    spyOn(formStorageService, 'loadForm').and.returnValue(new FormModel(null, null, null, null, null, null));

    formBuilder = TestBed.get(FormBuilder);
    traitGroupFactory = TestBed.get(TraitGroupFactory);
    spyOn(traitGroupFactory, 'getFormGroup').and.returnValue(formBuilder.group({name: 'name'}));

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

      await saveResult.sheetId.pipe(first()).toPromise();

      expect(actual).toBe(id);
    });
  it('should update most recent', () => {
    spyOn(mostRecentService, 'set');

    component.ngOnInit();
    fixture.detectChanges();

    expect(mostRecentService.set).toHaveBeenCalledWith(id);
  });
});
