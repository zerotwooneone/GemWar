import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SkillBlockComponent } from './src/app/skill-block/skill-block.component';
import { SkillFactory } from './src/app/skill/skill-factory';


@NgModule({
  declarations: [
    AppComponent,
    SkillBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SkillFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }
