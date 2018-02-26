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


@NgModule({
  declarations: [
    AppComponent,
    TraitComponent,
    WindBubbleComponent,
    WindSelectorComponent,
    SkillComponentComponent,
    EdgeHinderanceComponent
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
    MatSlideToggleModule
  ],
  providers: [TraitGroupFactory, FormStorageService, TraitFactoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
