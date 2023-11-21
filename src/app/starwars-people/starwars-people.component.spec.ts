import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsPeopleComponent } from './starwars-people.component';

describe('StarwarsPeopleComponent', () => {
  let component: StarwarsPeopleComponent;
  let fixture: ComponentFixture<StarwarsPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarwarsPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarwarsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
