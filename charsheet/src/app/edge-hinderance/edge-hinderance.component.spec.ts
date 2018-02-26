import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeHinderanceComponent } from './edge-hinderance.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatListModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EdgeHinderanceComponent', () => {
  let component: EdgeHinderanceComponent;
  let fixture: ComponentFixture<EdgeHinderanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EdgeHinderanceComponent],
      imports: [MatCardModule, MatExpansionModule, MatSlideToggleModule, ReactiveFormsModule, MatFormFieldModule, MatListModule, NoopAnimationsModule, MatInputModule]
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
