import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeHinderanceComponent } from './edge-hinderance.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatFormFieldModule, MatListModule, MatInputModule, MatIconModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EdgeModel } from './edge-model';

describe('EdgeHinderanceComponent', () => {
  let component: EdgeHinderanceComponent;
  let fixture: ComponentFixture<EdgeHinderanceComponent>;
  const firstExpectedEdgeHinderance: EdgeModel = { name: 'name', isEdge: true, value: 2 };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EdgeHinderanceComponent],
      imports: [MatCardModule, MatExpansionModule, MatSlideToggleModule, ReactiveFormsModule,
        MatFormFieldModule, NoopAnimationsModule, MatInputModule, MatIconModule],
      providers: [FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeHinderanceComponent);
    component = fixture.componentInstance;

    const formBuilder = TestBed.get(FormBuilder);

    component.edges = formBuilder.array([formBuilder.group(firstExpectedEdgeHinderance)]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add new', () => {
    const initial = component.edges.length;
    const expected = initial + 1;

    component.add();
    const actual = component.edges.length;

    expect(actual).toBe(expected);
  });
});
