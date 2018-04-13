import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormStorageService } from '../storage/form-storage.service';
import { ISheetStorageModel } from '../sheet/isheet-storage.model';
import { SavedCharacterModel } from './saved-character-model';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';

@Component({
  selector: 'zer-saved-characters',
  templateUrl: './saved-characters.component.html',
  styleUrls: ['./saved-characters.component.scss']
})
export class SavedCharactersComponent implements OnInit {

  chars: SavedCharacterModel[];
  constructor(private formStorageService: FormStorageService,
    private matSnackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    const sheetsObj = this.formStorageService.getSheets();
    this.chars = Object.keys(sheetsObj).map(key => {
      const sheet = sheetsObj[key];
      return { key: key, name: sheet.name, form: sheet.value };
    });
  }

  delete(index: number): void {
    const removed = this.chars[index];
    this.chars.splice(index, 1);
    const undoDelete = (): void => {
      this.chars.splice(index, 0, removed);
    };
    const ref = this.matSnackBar
      .open('Character Deleted',
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

}
