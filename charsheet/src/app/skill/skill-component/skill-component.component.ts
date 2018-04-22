import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/finally';
import { MacroService } from '../../macro/macro.service';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {

  @Input() skills: FormArray;
  @Input() dieType: number;
  @Input() rollModifier: number;

  skillName(skill: FormGroup): string {
    return skill.get('skillName').value;
  }
  specialization(skill: FormGroup): string {
    return this.specializationControl(skill).value;
  }
  hideSpecialization(skill: FormGroup): boolean {
    const specialization = this.specialization(skill);
    return specialization == null || specialization === undefined;
  }
  dieCount(skill: FormGroup): number {
    return skill.get('dieCount').value;
  }

  constructor(private matSnackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef,
    private macroService: MacroService) {
  }

  ngOnInit() {

  }

  removeSkill(index: number): void {
    const removed = this.skills.controls[index];
    this.skills.removeAt(index);
    const undoDelete = (): void => {
      this.skills.controls.splice(index, 0, removed);
    };
    const ref = this.matSnackBar.open('Skill removed',
      'Undo',
      {
        duration: 6000
      });
    ref
      .afterDismissed()
      .first()
      .finally(() => this.changeDetectorRef.detectChanges())
      .subscribe((dismiss: MatSnackBarDismiss) => {
        if (dismiss.dismissedByAction) {
          undoDelete();
        }
      }, error => {
        undoDelete();
      });
  }

  specializationControl(skill: FormGroup): FormControl {
    return <FormControl>skill.get('specialization');
  }

  removeSpecialization(skill: FormGroup): void {
    this.specializationControl(skill).setValue(null);
  }

  addSpecialization(skill: FormGroup): void {
    this.specializationControl(skill).setValue('');
  }

  macro(skill: FormGroup): string {
    return this.macroService.GetSkillMacro(this.skillName(skill),
    this.dieType, this.dieCount(skill), this.rollModifier, this.specialization(skill));
  }

}
