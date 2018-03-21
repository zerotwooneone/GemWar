import { Component } from '@angular/core';
import { MatIcon } from '@angular/material';
import { SheetComponent } from '../app/sheet/sheet.component';

@Component({
    selector: 'mat-icon',
    template: '<p>mat-icon</p>'
})
export class MockMatIconComponent extends MatIcon { }

@Component({
    selector: 'zer-sheet',
    template: '<p>mock sheet</p>'
})
export class MockSheetComponent extends SheetComponent { }
