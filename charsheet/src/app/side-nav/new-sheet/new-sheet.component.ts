import { Component, OnInit } from '@angular/core';
import { FormSaveService } from '../../form/form-save.service';
import { Router } from '@angular/router';
import { NewSheetService } from '../../new-sheet/new-sheet.service';

@Component({
  selector: 'zer-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.scss']
})
export class NewSheetComponent implements OnInit {

  constructor(private formSaveService: FormSaveService,
    private router: Router,
    private newSheetService: NewSheetService) { }

  ngOnInit() {
  }

  async save(): Promise<void> {
    const saveResult = this.formSaveService.save();
    const sheetId = await saveResult.sheetId.first().toPromise();
    this.router.navigate(['/char', sheetId]);
  }

  startOver(): void {
    this.newSheetService.startOver();
  }

}
