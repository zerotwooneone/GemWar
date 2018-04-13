import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWrapperComponent } from './nav-wrapper.component';
import { MatIconModule } from '@angular/material';
import { SideNavService } from '../side-nav.service';

describe('NavWrapperComponent', () => {
  let component: NavWrapperComponent;
  let fixture: ComponentFixture<NavWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavWrapperComponent ],
      imports: [MatIconModule],
      providers: [SideNavService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
