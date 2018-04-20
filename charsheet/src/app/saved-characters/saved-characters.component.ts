import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormStorageService } from '../storage/form-storage.service';
import { ISheetStorageModel } from '../sheet/isheet-storage.model';
import { SavedCharacterModel } from './saved-character-model';
import { MatSnackBar, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { ISheetsStorageModel } from '../sheet/isheets-storage.model';
import { SheetStorageService } from '../storage/sheet-storage.service';
import { SafeResourceUrl } from '@angular/platform-browser';
import { JsonLinkService } from '../json/json-link.service';
import { SavedCharacterModelService } from '../file/saved-character-model.service';
import { SavedCharactersService } from './saved-characters.service';

@Component({
  selector: 'zer-saved-characters',
  templateUrl: './saved-characters.component.html',
  styleUrls: ['./saved-characters.component.scss']
})
export class SavedCharactersComponent implements OnInit {
  chars: SavedCharacterModel[];
  constructor(
    private formStorageService: FormStorageService,
    private matSnackBar: MatSnackBar,
    private changeDetectorRef: ChangeDetectorRef,
    private sheetStorageService: SheetStorageService,
    private jsonLinkService: JsonLinkService,
    private saveCharacterService: SavedCharactersService
  ) {}

  ngOnInit() {
    this.reload();
    this.saveCharacterService.reloadObservable.subscribe(v => {
      this.reload();
    });
  }

  reload(): void {
    const sheetsObj = this.sheetStorageService.get();
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

    const ref = this.matSnackBar.open('Character Deleted', 'Undo', {
      duration: 6000
    });
    ref
      .afterDismissed()
      .first()
      .finally(() => this.changeDetectorRef.detectChanges())
      .subscribe(
        (dismiss: MatSnackBarDismiss) => {
          if (dismiss.dismissedByAction) {
            undoDelete();
          } else {
            this.formStorageService.deleteForm(removed.key);
          }
        },
        error => {
          undoDelete();
        }
      );
  }

  getUrl(char: SavedCharacterModel): SafeResourceUrl {
    const result = this.jsonLinkService.getObjectUrl(char);
    return result;
  }

  getFileName(char: SavedCharacterModel): SafeResourceUrl {
    const exportFileDefaultName = encodeURIComponent(`${char.name}.json`);
    return exportFileDefaultName;
  }

  trackCharBy(index: number, item: SavedCharacterModel): any {
    return item.key;
  }
}
