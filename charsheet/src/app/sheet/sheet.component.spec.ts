import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetComponent } from './sheet.component';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MockTraitComponent, MockEdgeHinderanceComponent } from '../../testing/mock-components';
import { WindSelectorComponent } from '../wind/wind-selector/wind-selector.component';
import { WindBubbleComponent } from '../wind/wind-bubble/wind-bubble.component';

describe('SheetComponent', () => {
  let component: SheetComponent;
  let fixture: ComponentFixture<SheetComponent>;

  const spiritDieType = 1;
  const vigorDieType = 2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SheetComponent, MockTraitComponent, MockEdgeHinderanceComponent,
        WindSelectorComponent, WindBubbleComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetComponent);
    component = fixture.componentInstance;

    const formBuilder = TestBed.get(FormBuilder);
    component.form = formBuilder.group({
      currentWind: 0,
      currentStrain: 0,
      mentalTraits: formBuilder.array([formBuilder.group({
        'traitName': formBuilder.control('Spirit'),
        'dieType': formBuilder.control(spiritDieType),
        'dieCount': formBuilder.control(0),
        'rollModifier': formBuilder.control(null),
        'skills': formBuilder.array([])
      })]),
      corporealTraits: formBuilder.array([formBuilder.group({
        'traitName': formBuilder.control('Vigor'),
        'dieType': formBuilder.control(vigorDieType),
        'dieCount': formBuilder.control(0),
        'rollModifier': formBuilder.control(null),
        'skills': formBuilder.array([])
      })]),
      edges: formBuilder.array([])
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load mental traits',
    () => {
      expect(component.mentalTraits).toBeTruthy();
    });
  it('should load corporeal traits',
    () => {
      expect(component.corporealTraits).toBeTruthy();
    });
  it('should provide wind total',
    () => {
      const expected = spiritDieType + vigorDieType;
      expect(component.windTotal).toBe(expected);
    });
  it('should provide strain maximum',
    () => {
      const expected = vigorDieType;
      expect(component.strainMax).toBe(expected);
    });
});
