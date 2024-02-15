import { ComponentFixture, TestBed } from '@angular/core/testing';

import { createflightComponent } from './create-flight.component';

describe('CreateFlightComponent', () => {
  let component: createflightComponent;
  let fixture: ComponentFixture<createflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [createflightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(createflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
