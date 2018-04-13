import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {

  @Input() skills: FormArray;
  @Input() dieType: number;
  @Input() rollModifier: number;

  skillName(index: number): string {
    return this.skills.controls[index].get('skillName').value;
  }
  specialization(index: number): string {
    return this.specializationControl(index).value;
  }
  hideSpecialization(index: number): boolean {
    const specialization = this.specialization(index);
    return specialization == null || specialization === undefined;
  }
  dieCount(index: number): number {
    return this.skills.controls[index].get('dieCount').value;
  }

  constructor(private matSnackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef) {
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

  specializationControl(index: number): FormControl {
    return <FormControl>this.skills.controls[index].get('specialization');
  }

  removeSpecialization(index: number): void {
    this.specializationControl(index).setValue(null);
  }

  addSpecialization(index: number): void {
    this.specializationControl(index).setValue('');
  }

}
