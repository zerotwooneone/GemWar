import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TraitComponent } from './src/app/trait/trait.component';
import { TraitSkillFactory } from './src/app/trait/trait-skill-factory';
import { DefaultTraitFactory } from './src/app/trait/default-trait-factory';
import { WindBubbleComponent } from './wind/wind-bubble/wind-bubble.component';
import { WindSelectorComponent } from './wind/wind-selector/wind-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    TraitComponent,
    WindBubbleComponent,
    WindSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule             
  ],
  providers: [TraitSkillFactory,
    DefaultTraitFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
