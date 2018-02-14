import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSelectorComponent } from './wind-selector.component';
import { SimpleChange } from '@angular/core';
import { WindBubbleComponent } from '../wind-bubble/wind-bubble.component';
import { BubbleModel } from './bubble-model';

describe('WindSelectorComponent', () => {
  let component: WindSelectorComponent;
  let fixture: ComponentFixture<WindSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WindSelectorComponent, WindBubbleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create two wind bubbles',
    () => {
      component.count = 1;
      component.ngOnChanges({ count: new SimpleChange(null, component.count, false) });
      expect(component.bubbles.length).toBe(1);
    });
  it('should create 35 wind bubbles',
    () => {
      component.count = 35;
      component.ngOnChanges({ count: new SimpleChange(null, component.count, false) });
      expect(component.bubbles.length).toBe(35);
    });
  it('should pulse when wind total > 50%',
    () => {
      component.count = 5;
      component.ngOnChanges({ count: new SimpleChange(null, component.count, false) });
      let bubbleModel: BubbleModel = component.bubbles[3];
      bubbleModel.onClick();

      expect(component.pulse).toBeTruthy();
    });
  it('should not pulse when wind total < 50%',
    () => {
      component.count = 5;
      component.ngOnChanges({ count: new SimpleChange(null, component.count, false) });
      let bubbleModel: BubbleModel = component.bubbles[1];
      bubbleModel.onClick();

      expect(component.pulse).toBeFalsy();
    });
});
