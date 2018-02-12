import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TraitComponent } from './src/app/trait/trait.component';
import { TraitSkillFactory } from './src/app/trait/trait-skill-factory';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TraitComponent
      ],
      imports: [FormsModule],
      providers: [TraitSkillFactory]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
