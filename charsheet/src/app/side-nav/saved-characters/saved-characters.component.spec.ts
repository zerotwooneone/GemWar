import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCharactersComponent } from './saved-characters.component';
import { MockSavedCharacterModelService } from '../../../testing/mock-services';
import { SavedCharacterModelService } from '../../file/saved-character-model.service';
import { SavedCharactersService } from '../../saved-characters/saved-characters.service';

describe('SavedCharactersComponent', () => {
  let component: SavedCharactersComponent;
  let fixture: ComponentFixture<SavedCharactersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedCharactersComponent],
      providers: [
        {
          provide: SavedCharacterModelService,
          useClass: MockSavedCharacterModelService
        },
        SavedCharactersService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
