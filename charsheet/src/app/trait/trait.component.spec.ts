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
import { MatSnackBar, MatSnackBarModule, MatIconModule, MatExpansionModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatIconModule,
        MatExpansionModule],
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

    const trait = new FormGroup({
      traitName: new FormControl('test attribute'),
      skills: new FormArray(expectedSkills),
      dieType: new FormControl(0),
      dieCount: new FormControl(0),
      rollModifier: new FormControl(0)
    });
    component.trait = trait;

    const traitFactoryService: TraitFactoryService = (<any>component).traitFactoryService;
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
      const expected = new FormGroup({});
      const spy = spyOn((<any>component).traitGroupFactory, 'buildSkillGroup').and.returnValue(expected);

      click(addSkillElement);
      const actual = component.skills.controls[component.skills.length - 1];

      expect(actual).toBe(expected);
    });
    it('should remove skill when called with true',
    () => {
      const expected = component.skills.length - 1;

      component.removeSkill(0);
      const actual = component.skills.length;

      expect(actual).toBe(expected);
    });
});
