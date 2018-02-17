import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TraitComponent } from './trait.component';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Attribute } from '../attribute/attribute';
import { FormsModule, FormGroup, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { click } from '../../testing/index';
import { TraitGroupFactory } from './trait-group-factory';

describe('TraitComponent', () => {
  let component: TraitComponent;
  let fixture: ComponentFixture<TraitComponent>;
  let firstExpectedSkill: FormGroup;
  let expectedSkills: FormGroup[];
  let addSkillElement: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraitComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [TraitGroupFactory]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitComponent);
    component = fixture.componentInstance;

    firstExpectedSkill = new FormGroup({
      skillName: new FormControl('firstExpectedSkill'),
      dieCount: new FormControl(0)
      specialization: new FormControl(0)
    });
    expectedSkills = [firstExpectedSkill];

    let trait = new FormGroup({
      traitName: new FormControl('test attribute'),
      skills: new FormArray(expectedSkills),
      dieType: new FormControl(0),
      dieCount: new FormControl(0),
      rollModifier: new FormControl(0)
    });
    component.trait = trait;

    addSkillElement = fixture.debugElement.query(By.css('.add-skill'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have first skill',
    () => {
      expect(component.skills.controls).toContain(firstExpectedSkill);
    });

  it('should add new skill',
    () => {
      let expected = new FormGroup({});
      let spy = spyOn((<any>component).traitGroupFactory, 'buildSkillGroup').and.returnValue(expected);
      
      click(addSkillElement);
      let actual = component.skills.controls[component.skills.length - 1];

      expect(actual).toBe(expected);
    });
});
