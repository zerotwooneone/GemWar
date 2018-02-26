import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeHinderanceComponent } from './edge-hinderance.component';

describe('EdgeHinderanceComponent', () => {
  let component: EdgeHinderanceComponent;
  let fixture: ComponentFixture<EdgeHinderanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeHinderanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeHinderanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
