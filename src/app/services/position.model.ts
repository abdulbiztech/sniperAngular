export interface Position {
  asset: string;
  entryPrice: number;
  currentPrice: number;
  profitLoss: string;
}

// Interface to represent market data
export interface MarketData {
  timestamp: Date;
  price: number;
  volume: number;
}
