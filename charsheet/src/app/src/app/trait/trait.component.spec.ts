import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitComponent } from './trait.component';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../../../../testing/index';
import { Attribute } from '../attribute/attribute';
import { TraitSkillFactory } from './trait-skill-factory';
import { TraitSkill } from './traitSkill';
import { FormsModule } from '@angular/forms';

describe('TraitComponent', () => {
  let component: TraitComponent;
  let fixture: ComponentFixture<TraitComponent>;
  let firstExpectedSkill: Skill;
  let expectedSkills: Skill[];
  let addSkillElement: DebugElement;

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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraitComponent],
      imports: [FormsModule],
      providers: [{ provide: TraitSkillFactory, useValue: traitSkillFactoryStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitComponent);
    component = fixture.componentInstance;

    firstExpectedSkill = new Skill('firstExpectedSkill', 1, 0);
    expectedSkills = [firstExpectedSkill];

    let attribute = new Attribute(9, 'test attribute', 4);
    let trait = new Trait(attribute, expectedSkills, 0);
    component.trait = trait;

    addSkillElement = fixture.debugElement.query(By.css('.add-skill'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have first skill',
    () => {
      expect(component.skills).toContain(expectedTraitSkill);
    });

  it('should add new skill in order',
    () => {
      let expected = component.skills[component.skills.length - 1].sortOrder + 1;
      nextTraitSkill = Object.assign({}, expectedTraitSkill);
      nextTraitSkill.sortOrder = expected;

      click(addSkillElement);
      let skill = component.skills[component.skills.length - 1];
      let actual = skill.sortOrder;

      expect(actual).toBe(expected);
    });
});
