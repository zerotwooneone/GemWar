import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material';
import "rxjs/add/operator/timeout";
import "rxjs/add/operator/finally";

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.scss']
})
export class SkillComponentComponent implements OnInit {

  @Input() skills: FormArray;
  @Input() dieType: number;
  @Input() rollModifier: number;
  hidden: {[index:number]:boolean} ;

  skillName(index:number): string {
    return this.skills.controls[index].get('skillName').value;
  }
  specialization(index:number): string {
    return this.specializationControl(index).value;
  }
  hideSpecialization(index:number): boolean {
    const specialization = this.specialization(index);
    if(specialization){
      let x = 0;
    }
    if(specialization == undefined){
      let x = 0;
    }
    return specialization == null || specialization == undefined;
  }
  dieCount(index:number): number {
    return this.skills.controls[index].get('dieCount').value;
  }

  constructor(private matSnackBar: MatSnackBar,
    private changeDetectorRef:ChangeDetectorRef) {    
  }

  ngOnInit() {
    this.hidden = this.skills.controls.map(s=>false);
  }

  removeSkill(index:number): void {
    this.hidden[index] = true;
    let ref = this.matSnackBar.open("Skill removed",
      "Undo",
      {
        duration: 6000
      });
    ref
      .afterDismissed()
      .subscribe((dismiss: MatSnackBarDismiss) => {
        if (dismiss.dismissedByAction) {
          this.hidden[index] = false;
          this.changeDetectorRef.detectChanges();
        } else {
          this.skills.controls.splice(index,1);
          for (let hiddenIndex = index+1; hiddenIndex < this.skills.controls.length-1; hiddenIndex++) {
            const element = this.skills.controls[hiddenIndex];
            this.hidden[hiddenIndex] = this.hidden[hiddenIndex+1];
          }
          delete this.hidden[this.skills.controls.length-1];
        }
      }, error => {
        this.hidden[index] = false;
      });
  }

  specializationControl(index:number): FormControl {
    return <FormControl>this.skills.controls[index].get('specialization');
  }

  removeSpecialization(index:number): void {
    this.specializationControl(index).setValue(null);
  }

  addSpecialization(index:number): void {
    this.specializationControl(index).setValue('');
  }

}
