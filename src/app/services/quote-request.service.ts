import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  private quoteUrl = 'https://jayridechallengeapi.azurewebsites.net/api/QuoteRequest';
  constructor(private httpClient: HttpClient) { }

  getQuote(){
    return this.httpClient.get(this.quoteUrl);
  }


}
