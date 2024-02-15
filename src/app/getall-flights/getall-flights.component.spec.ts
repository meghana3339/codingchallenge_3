import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallFlightsComponent } from './getall-flights.component';

describe('GetallFlightsComponent', () => {
  let component: GetallFlightsComponent;
  let fixture: ComponentFixture<GetallFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallFlightsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
