import { Component, OnInit } from '@angular/core';
import { FormSaveService } from '../../form/form-save.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'zh-existing-sheet',
  templateUrl: './existing-sheet.component.html',
  styleUrls: ['./existing-sheet.component.scss']
})
export class ExistingSheetComponent implements OnInit {

  constructor(private formSaveService: FormSaveService) { }

  ngOnInit() {
  }

  async update(): Promise<void> {
    const saveResult = this.formSaveService.update();
    const sheetId = await saveResult.sheetId.pipe(first()).toPromise();
  }

}
