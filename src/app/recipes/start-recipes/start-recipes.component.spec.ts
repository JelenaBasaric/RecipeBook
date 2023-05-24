import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRecipesComponent } from './start-recipes.component';

describe('StartRecipesComponent', () => {
  let component: StartRecipesComponent;
  let fixture: ComponentFixture<StartRecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartRecipesComponent]
    });
    fixture = TestBed.createComponent(StartRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
