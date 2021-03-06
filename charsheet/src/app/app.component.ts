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
import { SideNavService } from './side-nav/side-nav.service';

@Component({
  selector: 'zh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMenu: boolean;
  menuMode: 'side' | 'over';

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
      this.menuMode = autoShowMenu ? 'side' : 'over';
    });

    this.sideNavService.visibleObservable.subscribe(visible => {
      this.showMenu = visible;
    });
  }

  openMenu(): Promise<boolean> {
    return this.sideNavService.show();
  }
}
