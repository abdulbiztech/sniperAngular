import { Component, OnInit } from '@angular/core';
import { MarketData } from 'src/app/services/position.model';

@Component({
  selector: 'app-market-data',
  templateUrl: './market-data.component.html',
  styleUrls: ['./market-data.component.css'],
})
export class MarketDataComponent implements OnInit {
  marketData: MarketData[] = [
    { timestamp: new Date('2024-02-27T10:00:00'), price: 10000, volume: 500 },
    { timestamp: new Date('2024-02-27T10:05:00'), price: 10100, volume: 600 },
    { timestamp: new Date('2024-02-27T10:10:00'), price: 10200, volume: 550 },
    { timestamp: new Date('2024-02-27T10:15:00'), price: 10300, volume: 700 },
    { timestamp: new Date('2024-02-27T10:20:00'), price: 10400, volume: 800 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
