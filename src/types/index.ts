export interface Asset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  chart: number[];
  rewardRate: number;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  asset: string;
  amount: number;
  price: number;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
}

export interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
}

export interface TradingPair {
  base: string;
  quote: string;
  lastPrice: number;
  change24h: number;
}

export interface UserProfile {
  name: string;
  avatar: string;
  balance: number;
  portfolioValue: number;
}