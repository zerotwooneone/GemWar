import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBlockComponent } from './skill-block.component';
import { Skill } from '../skill/skill';
import { SkillGroup } from '../skill/skill-group';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../../../../testing/index';
import { SkillFactory } from '../skill/skill-factory';
import { Attribute } from '../attribute/attribute';

let skillFactoryStub = {
  CreateSkill(sortOrder: number): Skill {
    return new Skill('stub skill factory skill', 99, sortOrder);
  }
};

describe('SkillBlockComponent', () => {
  let component: SkillBlockComponent;
  let fixture: ComponentFixture<SkillBlockComponent>;
  let firstExpectedSkill: Skill;
  let expectedSkills: Skill[];
  let addSkillElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillBlockComponent],
      providers: [{ provide: SkillFactory, useValue: skillFactoryStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBlockComponent);
    component = fixture.componentInstance;

    firstExpectedSkill = new Skill('firstExpectedSkill', 1, 0);
    expectedSkills = [firstExpectedSkill];

    let attribute = new Attribute(9, 'test attribute', 4);
    let skillGroup = new SkillGroup(attribute, expectedSkills, 0);
    component.skillGroup = skillGroup;

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
