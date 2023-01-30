import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravellerBookingComponent } from './traveller-booking.component';

describe('TravellerBookingComponent', () => {
  let component: TravellerBookingComponent;
  let fixture: ComponentFixture<TravellerBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravellerBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravellerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
