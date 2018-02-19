import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Injectable()
export class FormStorageService {

  constructor() { }
  createGuid(): string {
    function s4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (s4() + s4() + "-" + s4() + "-4" + s4().substr(0, 3) + "-" + s4() + "-" + s4() + s4() + s4()).toLowerCase();
  }

  saveForm(key: string, form: FormGroup): void {
    let value = JSON.stringify(form.value);
    localStorage.setItem(key, value);
  }

  loadForm(key: string): {} {
    let data = localStorage.getItem(key);
    if (!data) {
      return null;
    }
    let result = JSON.parse(data);
    return result;
  }
}
