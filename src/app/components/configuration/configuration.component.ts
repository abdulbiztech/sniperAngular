import { Component, OnInit } from '@angular/core';
import { SolanaService } from 'src/app/services/solana.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
})
export class ConfigurationComponent implements OnInit {
  strategy: string | undefined;
  stopLoss: number | undefined;
  takeProfit: number | undefined;
  solanaWalletAddress: string | undefined;
  tokenSelection: string | undefined;
  transactionSettings: string | undefined;

  constructor(private solanaService: SolanaService) {}

  ngOnInit(): void {
    // Initialize default values
    this.fetchMarketData();
    this.strategy = '';
    this.stopLoss = 0;
    this.takeProfit = 0;
    this.solanaWalletAddress = '';
    this.tokenSelection = '';
    this.transactionSettings = '';
  }
  async fetchMarketData(): Promise<void> {
    try {
      const tradingPair = 'SOL/USDC'; // Example trading pair
      const bestAskPrice = await this.solanaService.fetchMarketData(
        tradingPair
      );
      console.log('Best Ask Price:', bestAskPrice);
    } catch (error) {
      // Handle error
    }
  }

  submitForm(): void {
    // Perform form submission logic here (e.g., save configuration settings)
    console.log('Form submitted');
    console.log('Strategy:', this.strategy);
    console.log('Solana Wallet Address:', this.solanaWalletAddress);
    console.log('Token Selection:', this.tokenSelection);
    console.log('Transaction Settings:', this.transactionSettings);
    console.log('Stop Loss:', this.stopLoss);
    console.log('Take Profit:', this.takeProfit);
  }
}
