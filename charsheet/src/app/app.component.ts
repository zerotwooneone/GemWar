import { Component, OnInit, TemplateRef } from '@angular/core';
import { Trait } from './trait/trait';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { TraitFactoryService } from './trait/trait-factory.service';
import { EdgeModel } from './edge-hinderance/edge-model';
import { ObservableMedia } from '@angular/flex-layout';
import { FormSaveService } from './form/form-save.service';
import { Router } from '@angular/router';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showMenu: boolean;
  menuMode: 'push' | 'side';

  constructor(private observableMedia: ObservableMedia,
    private formSaveService: FormSaveService,
    private router: Router) {
    observableMedia.subscribe(mediaChange => {
      const autoShowMenu = this.observableMedia.isActive('gt-sm');
      this.showMenu = autoShowMenu;
      this.menuMode = autoShowMenu ? 'side' : 'push';
    });
  }

  ngOnInit(): void {

  }

  async save(): Promise<void> {
    const saveResult = this.formSaveService.save();
    const sheetId = await saveResult.sheetId.first().toPromise();
    this.router.navigate(['/char', sheetId]);
  }

  update(): void {
    this.formSaveService.update();
  }

  get showSave(): boolean {
    return this.router.url === '/new';
  }

}
