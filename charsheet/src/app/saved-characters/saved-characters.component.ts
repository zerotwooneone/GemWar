import { Component, OnInit } from '@angular/core';
import { FormStorageService } from '../storage/form-storage.service';
import { ISheetStorageModel } from '../sheet/isheet-storage.model';
import { SavedCharacterModel } from './saved-character-model';

@Component({
  selector: 'zer-saved-characters',
  templateUrl: './saved-characters.component.html',
  styleUrls: ['./saved-characters.component.scss']
})
export class SavedCharactersComponent implements OnInit {

  chars: SavedCharacterModel[];
  constructor(private formStorageService: FormStorageService) { }

  ngOnInit() {
    const sheetsObj = this.formStorageService.getSheets();
    this.chars = Object.keys(sheetsObj).map(key => {
      const sheet = sheetsObj[key];
      return { key: key, name: sheet.name, form: sheet.value };
    });
  }

}
