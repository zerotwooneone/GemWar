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
import { MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TraitComponent,
    WindBubbleComponent,
    WindSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [TraitGroupFactory, FormStorageService, TraitFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
