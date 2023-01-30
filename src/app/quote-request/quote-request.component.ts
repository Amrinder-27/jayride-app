import { Component, OnInit } from '@angular/core';
import { QuoteRequestService } from '../services/quote-request.service';

@Component({
  selector: 'app-quote-request',
  templateUrl: './quote-request.component.html',
  styleUrls: ['./quote-request.component.scss'],
})
export class QuoteRequestComponent implements OnInit {
  sortedList: any;
  maximumPrice: any;
  minimumPrice: any;
  passPriceArray: any = [];
  sumPriceArray: any;
  avgPrice: any;
  fixedAvgPrice: any;
  constructor(private QuoteRequestService: QuoteRequestService) {}
  quoteList: any;
  totalRecords: any;
  maxPassengersList: any;
  ngOnInit(): void {
    //requesting data from service
    this.QuoteRequestService.getQuote().subscribe((response: any) => {
      this.quoteList = response.listings.sort((low: any, high: any) => {
        return low.pricePerPassenger - high.pricePerPassenger;
      });
      this.maxPassengersList = this.quoteList.filter((qList: any) => {
        return qList.vehicleType.maxPassengers == 3;
      });
      //calculating number of records
      this.totalRecords = this.maxPassengersList.length;
      // calculating min and max price
      this.maxPassengersList.map((passPrice: any) => {
        this.passPriceArray.push(passPrice.pricePerPassenger);
        this.minimumPrice = Math.min.apply(0, this.passPriceArray);
        this.maximumPrice = Math.max.apply(0, this.passPriceArray);
      });

      // calculating total sum
      this.sumPriceArray = this.passPriceArray.reduce((a: any, b: any) => {
        return a + b;
      });
      // calculating average price
      this.avgPrice = this.sumPriceArray.toFixed(2) / this.totalRecords;
      this.fixedAvgPrice = this.avgPrice.toFixed(2);
    });
  }
}
