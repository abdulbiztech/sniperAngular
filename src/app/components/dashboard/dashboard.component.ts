import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { HttpClient } from '@angular/common/http';
import { MarketDataService } from 'src/app/services/market-data.service';
import { Position } from 'src/app/services/position.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;

  botStatus: string = 'Running';
  openPositions: Position[] = [];
  marketData: number[] = [];
  chart!: Chart;

  constructor(
    private http: HttpClient,
    private marketDataService: MarketDataService
  ) {}

  ngOnInit(): void {
    this.fetchBotStatus();
    this.subscribeToMarketData();
    this.initializeChart();
    this.updateMarketDataChart();
  }

  fetchBotStatus(): void {
    // Fetch bot status from backend
  }

  subscribeToMarketData(): void {
    // Subscribe to real-time market data updates
  }

  initializeChart(): void {
    const chartCtx = this.chartCanvas.nativeElement.getContext('2d');
    this.chart = new Chart(chartCtx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Market Data',
            data: [],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
      },
    });
  }

  updateMarketDataChart(): void {
    this.chart.data.labels = Array.from(
      Array(this.marketData.length).keys()
    ).map((_, i) => `Data Point ${i}`);
    this.chart.data.datasets[0].data = this.marketData;
    this.chart.update();
  }
}
