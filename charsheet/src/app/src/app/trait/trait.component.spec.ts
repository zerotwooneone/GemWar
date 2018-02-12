import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitComponent } from './trait.component';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../../../../testing/index';
import { SkillFactory } from '../skill/skill-factory';
import { Attribute } from '../attribute/attribute';
import { TraitSkillFactory } from './traitSkillFactory';
import { TraitSkill } from './traitSkill';
import { FormsModule } from '@angular/forms';

let skillFactoryStub = {
  CreateSkill(sortOrder: number): Skill {
    return new Skill('stub skill factory skill', 99, sortOrder);
  }
};

let traitSkillFactoryStub = {
  Create(skill: Skill): TraitSkill {
    return new TraitSkill('name', 2, 0, 'specialization', true);
  }
};

describe('SkillBlockComponent', () => {
  let component: TraitComponent;
  let fixture: ComponentFixture<TraitComponent>;
  let firstExpectedSkill: Skill;
  let expectedSkills: Skill[];
  let addSkillElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraitComponent],
      imports:[FormsModule],
      providers: [{ provide: SkillFactory, useValue: skillFactoryStub },
      { provide: TraitSkillFactory, useValue: traitSkillFactoryStub }]
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
      expect(component.skills).toContain(firstExpectedSkill);
    });

  it('should add new skill when clicked',
    () => {
      let initialSkillCount = component.skills.length;
      let expected = initialSkillCount + 1;

      click(addSkillElement);
      let actual = component.skills.length;

      expect(actual).toBe(expected);
    });
});
