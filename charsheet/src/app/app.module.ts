import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TraitComponent } from './src/app/trait/trait.component';
import { SkillFactory } from './src/app/skill/skill-factory';


@NgModule({
  declarations: [
    AppComponent,
    TraitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule             
  ],
  providers: [SkillFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
