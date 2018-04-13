import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponentComponent } from './skill-component.component';
import { MatSnackBar, MatSnackBarRef, MatSnackBarModule, MatExpansionModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../../../testing/index';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/observable/of';

describe('SkillComponentComponent', () => {
  let component: SkillComponentComponent;
  let fixture: ComponentFixture<SkillComponentComponent>;
  let matSnackBar: MatSnackBar;
  let firstExpectedSkill: FormGroup;
  let editButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillComponentComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatExpansionModule],
      providers: [MatSnackBar]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillComponentComponent);
    component = fixture.componentInstance;
    matSnackBar = TestBed.get(MatSnackBar);

    firstExpectedSkill = new FormGroup({
      skillName: new FormControl('firstExpectedSkill'),
      dieCount: new FormControl(0),
      specialization: new FormControl(0)
    });
    component.skills = new FormArray([firstExpectedSkill]);
    component.dieType = 4;
    component.rollModifier = 0;

    fixture.detectChanges();

    editButton = fixture.debugElement.query(By.css('.edit-skill'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should remove when remove called',
    () => {
      const index = 0;
      const expected = component.skills.controls[index];
      component.removeSkill(index);
      const actual = component.skills.controls[index];

      expect(actual).not.toEqual(expected);
    });
  it('should add back when undone',
    () => {
      spyOn(matSnackBar, 'open').and.returnValue({
        afterDismissed: () => Observable.of({ dismissedByAction: true })
      });

      const index = 0;
      const expected = component.skills.controls[index];
      component.removeSkill(index);
      fixture.detectChanges();
      const actual = component.skills.controls[index];

      expect(actual).toBe(expected);
    });
  it('should show specialization',
    () => {
      const index = 0;

      component.addSpecialization(index);
      const actual = component.hideSpecialization(index);

      expect(actual).toBeFalsy();
    });
  it('should hide specialization',
    () => {
      const index = 0;

      component.addSpecialization(index);
      component.removeSpecialization(index);
      const actual = component.hideSpecialization(index);

      expect(actual).toBeTruthy();
    });
});
