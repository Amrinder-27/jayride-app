import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravellerBookingComponent } from './traveller-booking/traveller-booking.component';
import { QuoteRequestComponent } from './quote-request/quote-request.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'booking', component: TravellerBookingComponent },
  { path: 'quote', component: QuoteRequestComponent },
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
