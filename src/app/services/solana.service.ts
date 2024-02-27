import { Injectable } from '@angular/core';
import { Connection, PublicKey } from '@solana/web3.js';
import { Market, OpenOrders } from '@project-serum/serum';

@Injectable({
  providedIn: 'root',
})
export class SolanaService {
  private connection: Connection;

  constructor() {
    // Initialize connection to Solana devnet
    this.connection = new Connection('https://api.devnet.solana.com');
  }

  async fetchMarketData(): Promise<number | null> {
    try {
      const marketAddress = new PublicKey('Market Address Here');
      const market = await Market.load(this.connection, marketAddress);
      await market.init();
      const orderbook = await market.loadOrderBook(this.connection);
      const asks = orderbook.getL2(10).asks;
      if (asks.length > 0) {
        const bestAskPrice = asks[0][0];
        return bestAskPrice;
      } else {
        console.error('No ask prices found.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching market data:', error);
      return null;
    }
  }
}
