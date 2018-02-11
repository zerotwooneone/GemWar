import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SkillBlockComponent } from './src/app/skill-block/skill-block.component';
import { SkillFactory } from './src/app/skill/skill-factory';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SkillBlockComponent
      ],
      providers: [SkillFactory]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
