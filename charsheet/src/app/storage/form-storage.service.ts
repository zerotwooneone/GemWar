import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { CompressionService } from '../compression/compression.service';
import { SheetIdService } from '../sheet-id/sheet-id.service';

@Injectable()
export class FormStorageService {

  constructor(private compressionService: CompressionService,
    private sheetIdService: SheetIdService) { }

  saveNewForm(form: FormGroup):string {
    let key = this.sheetIdService.createGuid();
    this.saveForm(key, form);
    return key;
  }

  saveForm(key: string, form: FormGroup): void {
    let json = JSON.stringify(form.value);
    let compressed = this.compressionService.compress(json);
    localStorage.setItem(key, compressed);
  }

  loadForm(key: string): {} {
    let data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    let json = this.compressionService.decompress(data);
    let obj = JSON.parse(json);
    return obj;
  }
}
