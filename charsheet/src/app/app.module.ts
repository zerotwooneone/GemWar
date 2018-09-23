import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NavWrapperComponent } from './side-nav/nav-wrapper/nav-wrapper.component';
import { SideNavService } from './side-nav/side-nav.service';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { MostRecentService } from './most-recent/most-recent.service';
import { BrowserStorageService } from './storage/browser-storage.service';
import { NewSheetService } from './new-sheet/new-sheet.service';
import { NewSheetComponent } from './new-sheet/new-sheet.component';
import { NewSheetComponent as SideNavNewSheetComponent } from './side-nav/new-sheet/new-sheet.component';
import { FormSaveService } from './form/form-save.service';
import { FormStorageService } from './storage/form-storage.service';
import { SheetIdService } from './sheet-id/sheet-id.service';
import { SheetStorageService } from './storage/sheet-storage.service';
import { CompressionService } from './compression/compression.service';
import { JsonService } from './json/json.service';
import { TraitFactoryService } from './trait/trait-factory.service';
import { SheetComponent } from './sheet/sheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TraitComponent } from './trait/trait.component';
import { MacroService } from './macro/macro.service';
import { EdgeHinderanceComponent } from './edge-hinderance/edge-hinderance.component';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SkillComponent } from './skill/skill-component/skill-component.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { TraitGroupFactory } from './trait/trait-group-factory';
import { SavedCharactersComponent } from './saved-characters/saved-characters.component';
import { SavedCharactersService } from './saved-characters/saved-characters.service';
import { JsonLinkService } from './json/json-link.service';
import { SavedCharactersComponent as SideNavSavedCharactersComponent } from './side-nav/saved-characters/saved-characters.component';
import { SavedCharacterModelService } from './file/saved-character-model.service';
import { FileReaderService } from './file/file-reader.service';
import { ExistingSheetComponent } from './existing-sheet/existing-sheet.component';
import { ExistingSheetComponent as SideNavExistingSheetComponent } from './side-nav/existing-sheet/existing-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavWrapperComponent,
    MostRecentComponent,
    NewSheetComponent,
    SideNavNewSheetComponent,
    SheetComponent,
    TraitComponent,
    EdgeHinderanceComponent,
    WindSelectorComponent,
    SkillComponent,
    WindBubbleComponent,
    SavedCharactersComponent,
    SideNavSavedCharactersComponent,
    ExistingSheetComponent,
    SideNavExistingSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClipboardModule
  ],
  providers: [SideNavService,
    MostRecentService,
    BrowserStorageService,
    NewSheetService,
    FormSaveService,
    FormStorageService,
    SheetIdService,
    SheetStorageService,
    CompressionService,
    JsonService,
    TraitFactoryService,
    MacroService,
    TraitGroupFactory,
    SavedCharactersService,
    JsonLinkService,
    SavedCharacterModelService,
    FileReaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
