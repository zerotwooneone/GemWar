import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TraitComponent } from './src/app/trait/trait.component';
import { TraitSkillFactory } from './src/app/trait/trait-skill-factory';
import { FormsModule } from '@angular/forms';
import { Trait } from './src/app/trait/trait';
import { Attribute } from './src/app/attribute/attribute';
import { Skill } from './src/app/skill/skill';
import { DefaultTraitFactory } from './src/app/trait/default-trait-factory';
import { TraitSkill } from './src/app/trait/traitSkill';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';

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
  let expectedTraitSkill: TraitSkill = new TraitSkill('name', 2, 0, 'specialization', true);
  let nextTraitSkill: TraitSkill = null;
  let traitSkillFactoryStub = {
    Create(skill: Skill): TraitSkill {
      let result = nextTraitSkill || expectedTraitSkill;
      nextTraitSkill = null;
      return result;
    },
    CreateBase(dieCount: number, name: string, sortOrder: number, specialization: string, displaySpecialization: boolean =
    false): TraitSkill {
      return this.Create(null);
    }
  };
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
      providers: [{ provide: TraitSkillFactory, useValue: traitSkillFactoryStub },
      { provide: DefaultTraitFactory, useValue: defaultTraitFactoryStub }]
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
