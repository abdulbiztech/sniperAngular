import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarketDataService {
  private marketDataSubject = new Subject<any>();

  constructor() {}

  getMarketData() {
    return this.marketDataSubject.asObservable();
  }

  updateMarketData(marketData: any) {
    this.marketDataSubject.next(marketData);
  }
}
