import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindSelectorComponent } from './wind-selector.component';
import { SimpleChange } from '@angular/core';
import { WindBubbleComponent } from '../wind-bubble/wind-bubble.component';

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
      component.maxIndex = 1;
      component.ngOnChanges({ maxIndex: new SimpleChange(null, component.maxIndex, false) });
      expect(component.bubbles.length).toBe(2);
    });
  it('should create 35 wind bubbles',
    () => {
      component.maxIndex = 35;
      component.ngOnChanges({ maxIndex: new SimpleChange(null, component.maxIndex, false) });
      expect(component.bubbles.length).toBe(36);
    });
});
