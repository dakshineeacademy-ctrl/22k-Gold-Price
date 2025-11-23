export interface StockData {
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface GoldRate {
  city: string;
  price22k: number;
  price24k: number;
  change: number;
}

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  summary: string;
  imageUrl: string;
  author: string;
  timeAgo: string;
}

export interface MutualFund {
  name: string;
  category: string;
  nav: number;
  returns1y: number;
  returns3y: number;
}

export enum CalculatorType {
  SIP = 'SIP',
  EMI = 'EMI',
  FD = 'FD',
  TAX = 'TAX'
}