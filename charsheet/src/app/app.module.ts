import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';
import { TraitComponent } from './trait/trait.component';
import { DefaultTraitFactory } from './trait/default-trait-factory';


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
    ReactiveFormsModule
  ],
  providers: [DefaultTraitFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
