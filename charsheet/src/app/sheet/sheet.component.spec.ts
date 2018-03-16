import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetComponent } from './sheet.component';

describe('SheetComponent', () => {
  let component: SheetComponent;
  let fixture: ComponentFixture<SheetComponent>;

  const spiritDieType = 1;
  const vigorDieType = 2;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheetComponent);
    component = fixture.componentInstance;

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
