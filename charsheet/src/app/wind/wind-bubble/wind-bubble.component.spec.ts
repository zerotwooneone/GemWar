import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindBubbleComponent } from './wind-bubble.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { click } from '../../../testing/index';

describe('WindBubbleComponent', () => {
  let component: WindBubbleComponent;
  let fixture: ComponentFixture<WindBubbleComponent>;
  let element: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WindBubbleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindBubbleComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.query(By.css('.clickable'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should checked visible',
    () => {
      component.checked = true;
      expect(component.checkedHidden).toBeFalsy();
    });
  it('should unchecked hidden',
    () => {
      component.checked = true;
      expect(component.uncheckedHidden).toBeTruthy();
    });
  it('should checked hidden',
    () => {
      component.checked = false;
      expect(component.checkedHidden).toBeTruthy();
    });
  it('should unchecked hidden',
    () => {
      component.checked = false;
      expect(component.uncheckedHidden).toBeFalsy();
    });
  it('should emit when clicked',
    () => {
      let clicked = false;
      component.onClicked.subscribe(() => {
        clicked = true;
      });
      click(element);
      expect(clicked).toBeTruthy();
    });
});
