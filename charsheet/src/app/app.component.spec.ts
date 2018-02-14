import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { Attribute } from './attribute/attribute';
import { Skill } from './skill/skill';
import { Trait } from './trait/trait';
import { TraitComponent } from './trait/trait.component';
import { DefaultTraitFactory } from './trait/default-trait-factory';

describe('AppComponent', () => {

  let defaultTraitFactoryStub = {
    GetMentalDefaults(): Trait[] {
      let attribute = new Attribute(null, "dummy attr", null);
      let skills = [new Skill('dummy skill', null, null)];
      let sortOrder = 0;
      return [new Trait(attribute, skills, sortOrder)];
    },
    GetCorporealDefaults(): Trait[] {
      return this.GetMentalDefaults();
    }
  }
  
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TraitComponent,
        WindSelectorComponent,
        WindBubbleComponent
      ],
      imports: [FormsModule],
      providers: [{ provide: DefaultTraitFactory, useValue: defaultTraitFactoryStub }]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it('should load mental traits',
    () => {
      expect(app.mentalTraits).toBeTruthy();
    });
  it('should load corporeal traits',
    () => {
      expect(app.corporealTraits).toBeTruthy();
    });
});
