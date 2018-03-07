import { Routes } from "@angular/router";
import { NewSheetComponent } from "./new-sheet/new-sheet.component";
import { ExistingSheetComponent } from "./existing-sheet/existing-sheet.component";

export const appRoutes: Routes = [
    {
        path: 'new',
        component: NewSheetComponent,
        children: [
            {
                path: 'char/:id',
                component: ExistingSheetComponent
            }
        ]
    },
    {
        path: 'char/:id',
        component: ExistingSheetComponent
    },
    {
        path: '',
        redirectTo: '/new',
        pathMatch: 'full'
    }
];