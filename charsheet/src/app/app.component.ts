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
import { SideNavService } from './side-nav/side-nav.service';

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
    private sideNavService: SideNavService) { }

  ngOnInit(): void {
    this.observableMedia.subscribe(mediaChange => {
      const autoShowMenu = this.observableMedia.isActive('gt-sm');
      if (autoShowMenu) {
        this.sideNavService.show();
      } else {
        this.sideNavService.hide();
      }
      this.menuMode = autoShowMenu ? 'side' : 'push';
    });

    this.sideNavService.visibleObservable.subscribe(visible => {
      this.showMenu = visible;
    });
  }
}
