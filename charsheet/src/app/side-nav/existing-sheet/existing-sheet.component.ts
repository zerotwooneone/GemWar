import { Component, OnInit } from '@angular/core';
import { FormSaveService } from '../../form/form-save.service';
import { Router } from '@angular/router';

@Component({
  selector: 'zer-existing-sheet',
  templateUrl: './existing-sheet.component.html',
  styleUrls: ['./existing-sheet.component.scss']
})
export class ExistingSheetComponent implements OnInit {

  constructor(private formSaveService: FormSaveService) { }

  ngOnInit() {
  }

  async update(): Promise<void> {
    const saveResult = this.formSaveService.update();
    const sheetId = await saveResult.sheetId.first().toPromise();
  }

}
