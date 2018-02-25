import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material';
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/finally";

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() dieType: number;
  @Input() rollModifier: number;
  @Output() remove: EventEmitter<void> = new EventEmitter<void>();
  isEditable: boolean;
  hidden: boolean;

  get skillName(): string {
    return this.form.get('skillName').value;
  }
  get specialization(): string {
    return this.specializationControl.value;
  }
  get hideSpecialization(): boolean {
    return this.specialization == null || this.specialization == undefined;
  }
  get dieCount(): number {
    return this.form.get('dieCount').value;
  }

  constructor(private matSnackBar: MatSnackBar,
    private changeDetectorRef:ChangeDetectorRef) {
    this.isEditable = false;
    this.hidden = false;
  }

  ngOnInit() {
  }

  removeSkill(): void {
    this.hidden = true;
    let ref = this.matSnackBar.open("Skill removed",
      "Undo",
      {
        duration: 6000
      });
    ref
      .afterDismissed()
      .subscribe((dismiss: MatSnackBarDismiss) => {
        if (dismiss.dismissedByAction) {
          this.hidden = false;
          //this.changeDetectorRef.detectChanges();
        } else {
          this.remove.emit();
        }
      }, error => {
        this.hidden = false;
      });
  }

  get specializationControl(): FormControl {
    return <FormControl>this.form.get('specialization');
  }

  removeSpecialization(): void {
    this.specializationControl.setValue(null);
  }

  addSpecialization(): void {
    this.specializationControl.setValue('');
  }

  toggleEditable(): void {
    this.isEditable = !this.isEditable;
  }

}
