import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TraitComponent } from './trait.component';
import { Skill } from '../skill/skill';
import { Trait } from '../trait/trait';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, FormGroup, FormControl, FormArray, ReactiveFormsModule } from '@angular/forms';
import { click } from '../../testing/index';
import { TraitGroupFactory } from './trait-group-factory';
import { TraitFactoryService } from './trait-factory.service';
import { SkillComponentComponent } from '../skill/skill-component/skill-component.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

describe('TraitComponent', () => {
  let component: TraitComponent;
  let fixture: ComponentFixture<TraitComponent>;
  let firstExpectedSkill: FormGroup;
  let expectedSkills: FormGroup[];
  let addSkillElement: DebugElement;
  let editElement: DebugElement;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TraitComponent,
        SkillComponentComponent],
      imports: [FormsModule, ReactiveFormsModule, MatSnackBarModule,
        MatCardModule,
        MatListModule],
      providers: [TraitGroupFactory, TraitFactoryService, MatSnackBar]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitComponent);
    component = fixture.componentInstance;

    firstExpectedSkill = new FormGroup({
      skillName: new FormControl('firstExpectedSkill'),
      dieCount: new FormControl(0),
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

    let traitFactoryService: TraitFactoryService = (<any>component).traitFactoryService;
    spyOn(traitFactoryService, 'buildSkill');

    addSkillElement = fixture.debugElement.query(By.css('.add-skill'));
    editElement = fixture.debugElement.query(By.css('.edit-trait'));

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
  it('should default isEditable',
    () => {
      expect(component.isEditable).toBe(false);
    });
  it('should set isEditable',
    () => {
      click(editElement);

      expect(component.isEditable).toBe(true);
    });
  it('should unset isEditable',
    () => {
      click(editElement);
      click(editElement);

      expect(component.isEditable).toBe(false);
    });
  it('should remove skill when called with true',
    () => {
      let expected = component.skills.length - 1;

      component.removeSkill(0);
      let actual = component.skills.length;

      expect(actual).toBe(expected);
    });
  it('should toggle editable to true',
    () => {
      component.toggleEdit();;
      
      expect(component.isEditable).toBe(true);
    });
  it('should toggle editable to false',
    () => {
      component.isEditable = true;

      component.toggleEdit();;

      expect(component.isEditable).toBe(false);
    });
});
