import { NgModule } from '@angular/core';
import { RouterOutletStubComponent, RouterLinkStubDirective } from './router-stubs';
import * as x from './mock-components';

@NgModule({
    declarations: [
        RouterOutletStubComponent,
        RouterLinkStubDirective,
        x.MockSheetComponent,
        x.MockTraitComponent,
        x.MockEdgeHinderanceComponent,
        x.MockNavWrapperComponent,
        x.MockSkillComponentComponent

    ]
})
export class TestModule {}
