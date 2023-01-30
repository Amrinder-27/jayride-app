import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-traveller-booking',
  templateUrl: './traveller-booking.component.html',
  styleUrls: ['./traveller-booking.component.scss'],
})
export class TravellerBookingComponent implements OnInit {
  bookingForm!: FormGroup;
  submitted = false;
  channel: any = ['Partner', 'Agent', 'Direct Customer'];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const dateTime = new Date();
    this.bookingForm = this.formBuilder.group({
      travellerName: ['', Validators.required],
      channel: ['', Validators.required],
      travelDate: ['', Validators.required],
      dateTime: new FormControl(dateTime.toISOString().substring(0, 16)),
      bookingPrice: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*$/),
        ],
      ],
      travellerEmail: ['', [Validators.required, Validators.email]],
      meetGreet: [false, Validators.requiredTrue],
    });
  }

  get f() {
    return this.bookingForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.bookingForm.invalid) {
      return;
    }

    // display form values on success in console
    console.log(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.bookingForm.value, null, 4)
    );
  }

  //reset method
  onReset() {
    this.submitted = false;
    this.bookingForm.reset();
  }
}
