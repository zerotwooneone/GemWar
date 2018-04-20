import { Component, OnInit } from '@angular/core';
import { SavedCharacterModelService } from '../../file/saved-character-model.service';
import { SavedCharactersService } from '../../saved-characters/saved-characters.service';

@Component({
  selector: 'zer-saved-characters',
  templateUrl: './saved-characters.component.html',
  styleUrls: ['./saved-characters.component.scss']
})
export class SavedCharactersComponent implements OnInit {
  constructor(
    private savedCharacterModelService: SavedCharacterModelService,
    private saveCharacterService: SavedCharactersService
  ) {}

  ngOnInit() {}

  async onFileChange($event: FileChangeEvent): Promise<void> {
    const fileList = $event.target.files;

    const models = this.savedCharacterModelService.getFromFiles(fileList);
    await this.savedCharacterModelService.saveNewCharacters(models);
    $event.target.value = '';
    this.saveCharacterService.Reload();
  }
}

export class FileChangeEvent {
  target: HTMLInputElement;
}
