import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostRecentComponent } from './most-recent/most-recent.component';
import { NewSheetComponent } from './new-sheet/new-sheet.component';
import { NewSheetComponent as SideNavNewSheetComponent } from './side-nav/new-sheet/new-sheet.component';
import { SavedCharactersComponent } from './saved-characters/saved-characters.component';
import { SavedCharactersComponent as SideNavSavedCharactersComponent } from './side-nav/saved-characters/saved-characters.component';
import { ExistingSheetComponent } from './existing-sheet/existing-sheet.component';
import { ExistingSheetComponent as SideNavExistingSheetComponent } from './side-nav/existing-sheet/existing-sheet.component';

const routes: Routes = [
    {
      path: 'new',
      children: [
          {
              path: '',
              component: NewSheetComponent
          },
          {
              path: '',
              component: SideNavNewSheetComponent,
              outlet: 'side-nav'
          }
      ]
  },
{
    path: 'char/:id',
    children: [
        {
            path: '',
            component: ExistingSheetComponent
        },
        {
            path: '',
            component: SideNavExistingSheetComponent,
            outlet: 'side-nav'
        }
    ]
},
{
    path: 'saved',
    children: [
        {
            path: '',
            component: SavedCharactersComponent
        },
        {
            path: '',
            component: SideNavSavedCharactersComponent,
            outlet: 'side-nav'
        }
    ]
},
  {
      path: '',
      component: MostRecentComponent,
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
