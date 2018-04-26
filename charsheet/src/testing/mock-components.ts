import { Component, forwardRef } from '@angular/core';
import { SheetComponent } from '../app/sheet/sheet.component';
import { TraitComponent } from '../app/trait/trait.component';
import { EdgeHinderanceComponent } from '../app/edge-hinderance/edge-hinderance.component';
import { WindSelectorComponent } from '../app/wind/wind-selector/wind-selector.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NavWrapperComponent } from '../app/side-nav/nav-wrapper/nav-wrapper.component';
import { SkillComponentComponent } from '../app/skill/skill-component/skill-component.component';

@Component({
    selector: 'zer-sheet',
    template: '<p>mock sheet</p>'
})
export class MockSheetComponent extends SheetComponent { }

@Component({
    selector: 'trait',
    template: '<p>mock trait</p>'
})
export class MockTraitComponent extends TraitComponent {
    constructor() {
        super(null, null, null);
    }
}

@Component({
    selector: 'zer-edge-hinderance',
    template: '<p>mock edge hinderance</p>'
})
export class MockEdgeHinderanceComponent extends EdgeHinderanceComponent { }

@Component({
    selector: 'zer-nav-wrapper',
    template: '<p>mock nav wrapper</p>'
})
export class MockNavWrapperComponent extends NavWrapperComponent {

    constructor() {
        super(null);
    }
}

@Component({
    selector: 'app-skill-component',
    template: '<p>mock skill component</p>'
  })
  export class MockSkillComponentComponent extends SkillComponentComponent {
      constructor() {
          super(null, null, null);
      }
  }
