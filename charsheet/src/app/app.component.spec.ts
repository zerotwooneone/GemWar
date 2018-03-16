import { TestBed, async, ComponentFixture, inject, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { TraitComponent } from './trait/trait.component';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../testing/index';
import { TraitFactoryService } from './trait/trait-factory.service';
import { MatSnackBarModule } from '@angular/material';
import { SkillComponentComponent } from './skill/skill-component/skill-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EdgeHinderanceComponent } from './edge-hinderance/edge-hinderance.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EdgeModel } from './edge-hinderance/edge-model';
import { FormSaveService } from './form/form-save.service';

describe('AppComponent', () => {


  let saveElement: DebugElement;

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let formStorageService: FormStorageService;
  let formSaveService: FormSaveService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TraitComponent,
        WindSelectorComponent,
        WindBubbleComponent,
        SkillComponentComponent,
        EdgeHinderanceComponent
      ],
      imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatExpansionModule,
        MatSlideToggleModule],
      providers: [TraitGroupFactory,
        FormStorageService,
        TraitFactoryService,
        FormBuilder,
        FormSaveService]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    saveElement = fixture.debugElement.query(By.css('.save-form'));
    const formBuilder = TestBed.get(FormBuilder);

    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it('should call save form', async(() => {
    app.save();

    expect(formSaveService.save).toHaveBeenCalled();
  }));
  it('should call update form', async(() => {
    app.update();

    expect(formSaveService.update).toHaveBeenCalled();
  }));

});
