import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponentComponent } from './skill-component.component';
import { MatSnackBar, MatSnackBarRef, MatSnackBarModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SkillComponentComponent', () => {
  let component: SkillComponentComponent;
  let fixture: ComponentFixture<SkillComponentComponent>;
  let matSnackBar: MatSnackBar;
  let firstExpectedSkill: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillComponentComponent],
      imports: [ReactiveFormsModule, MatSnackBarModule, NoopAnimationsModule],
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
    component.form = firstExpectedSkill;
    component.dieType = 4;
    component.rollModifier = 0;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set hidden to true when remove called',
    () => {
      component.removeSkill();
      let actual = component.hidden;

      expect(actual).toBe(true);
    });
  it('should set hidden to false when undone',
    () => {
      spyOn(matSnackBar, 'open').and.returnValue({
        afterDismissed: () => Observable.of({ dismissedByAction: true })
      });

      component.removeSkill();
      fixture.detectChanges();
      let actual = component.hidden;

      expect(actual).toBe(false);
    });
  it('should emit remove when not dismissed by undo',
    () => {
      spyOn(matSnackBar, 'open').and.returnValue({
        afterDismissed: () => Observable.of({ dismissedByAction: false })
      });

      let actual: boolean = null;
      component.remove.subscribe(() => {
        actual = true;
      });

      component.removeSkill();
      
      expect(actual).toBe(true);
    });
});
