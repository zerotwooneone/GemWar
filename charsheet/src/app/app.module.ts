import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { TraitComponent } from './trait/trait.component';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { FormStorageService } from './storage/form-storage.service';
import { TraitFactoryService } from './trait/trait-factory.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SkillComponentComponent } from './skill/skill-component/skill-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { EdgeHinderanceComponent } from './edge-hinderance/edge-hinderance.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CompressionService } from './compression/compression.service';
import { SheetIdService } from './sheet-id/sheet-id.service';
import { SheetComponent } from './sheet/sheet.component';
import { NewSheetComponent } from './new-sheet/new-sheet.component';
import { ExistingSheetComponent } from './existing-sheet/existing-sheet.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { FormSaveService } from './form/form-save.service';
import { MatIconModule } from '@angular/material/icon';
import { BrowserStorageService } from './storage/browser-storage.service';
import { NewSheetComponent as SideNavNewSheetComponent } from './side-nav/new-sheet/new-sheet.component';
import { ExistingSheetComponent as SideNavExistingSheetComponent } from './side-nav/existing-sheet/existing-sheet.component';
import { NavWrapperComponent } from './side-nav/nav-wrapper/nav-wrapper.component';
import { SideNavService } from './side-nav/side-nav.service';
import { SavedCharactersComponent } from './saved-characters/saved-characters.component';
import { NewSheetService } from './new-sheet/new-sheet.service';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { MostRecentService } from './most-recent/most-recent.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JsonService } from './json/json.service';
import { SheetStorageService } from './storage/sheet-storage.service';
import { JsonLinkService } from './json/json-link.service';
import { SavedCharacterModelService } from './file/saved-character-model.service';
import { FileReaderService } from './file/file-reader.service';
import { SavedCharactersComponent as SideNavSavedCharactersComponent } from './side-nav/saved-characters/saved-characters.component';
import { SavedCharactersService } from './saved-characters/saved-characters.service';

@NgModule({
  declarations: [
    AppComponent,
    TraitComponent,
    WindBubbleComponent,
    WindSelectorComponent,
    SkillComponentComponent,
    EdgeHinderanceComponent,
    SheetComponent,
    NewSheetComponent,
    ExistingSheetComponent,
    SideNavNewSheetComponent,
    SideNavExistingSheetComponent,
    NavWrapperComponent,
    SavedCharactersComponent,
    MostRecentComponent,
    SideNavSavedCharactersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    TraitGroupFactory,
    FormStorageService,
    TraitFactoryService,
    CompressionService,
    SheetIdService,
    FormSaveService,
    BrowserStorageService,
    SideNavService,
    NewSheetService,
    MostRecentService,
    JsonService,
    SheetStorageService,
    JsonLinkService,
    SavedCharacterModelService,
    FileReaderService,
    SavedCharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
