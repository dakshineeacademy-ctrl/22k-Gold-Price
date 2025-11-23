import { StockData, GoldRate, NewsItem, MutualFund } from '../types';

export const indices: StockData[] = [
  { name: 'NIFTY 50', price: 24350.50, change: 125.40, changePercent: 0.52 },
  { name: 'SENSEX', price: 80100.20, change: 450.80, changePercent: 0.57 },
  { name: 'BANK NIFTY', price: 52400.15, change: -85.00, changePercent: -0.16 },
  { name: 'GOLD (MCX)', price: 72500.00, change: 210.00, changePercent: 0.29 },
  { name: 'USD/INR', price: 83.45, change: 0.05, changePercent: 0.06 },
];

export const goldRates: GoldRate[] = [
  { city: 'Chennai', price22k: 6750, price24k: 7364, change: 15 },
  { city: 'Mumbai', price22k: 6680, price24k: 7287, change: 10 },
  { city: 'Delhi', price22k: 6695, price24k: 7303, change: 12 },
  { city: 'Kolkata', price22k: 6680, price24k: 7287, change: 10 },
  { city: 'Bangalore', price22k: 6680, price24k: 7287, change: 10 },
  { city: 'Hyderabad', price22k: 6680, price24k: 7287, change: 10 },
  { city: 'Kerala', price22k: 6680, price24k: 7287, change: 10 },
  { city: 'Pune', price22k: 6680, price24k: 7287, change: 10 },
];

export const marketNews: NewsItem[] = [
  {
    id: 1,
    category: 'Business',
    title: 'Gold prices hit fresh record high amid global tensions',
    summary: 'Safe-haven demand continues to drive precious metals higher as central banks increase reserves.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    author: 'Rajesh Kumar',
    timeAgo: '2h ago'
  },
  {
    id: 2,
    category: 'Tech',
    title: 'AI chip boom sends semiconductor stocks rallying',
    summary: 'Major chipmakers see unprecedented growth as AI infrastructure spending accelerates globally.',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    author: 'Sarah Smith',
    timeAgo: '4h ago'
  },
  {
    id: 3,
    category: 'Personal Finance',
    title: 'New tax regime: How to optimize your savings in 2024',
    summary: 'A comprehensive guide to understanding the latest tax slabs and investment benefits.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    author: 'Amit Shah',
    timeAgo: '6h ago'
  },
  {
    id: 4,
    category: 'Crypto',
    title: 'Bitcoin approaches halving event: What investors should know',
    summary: 'Historical data suggests volatility ahead as the mining reward is set to decrease.',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    author: 'Crypto Desk',
    timeAgo: '12h ago'
  }
];

export const mutualFunds: MutualFund[] = [
  { name: 'Quant Small Cap Fund', category: 'Equity', nav: 245.3, returns1y: 45.2, returns3y: 32.1 },
  { name: 'HDFC Mid-Cap Opportunities', category: 'Equity', nav: 189.5, returns1y: 38.4, returns3y: 28.5 },
  { name: 'Parag Parikh Flexi Cap', category: 'Equity', nav: 78.4, returns1y: 22.1, returns3y: 19.8 },
  { name: 'SBI Liquid Fund', category: 'Debt', nav: 3456.2, returns1y: 7.2, returns3y: 6.8 },
  { name: 'ICICI Pru Balanced Advantage', category: 'Hybrid', nav: 67.8, returns1y: 15.6, returns3y: 12.4 },
];

export const chartData = [
  { time: '09:15', value: 24200 },
  { time: '10:00', value: 24250 },
  { time: '11:00', value: 24180 },
  { time: '12:00', value: 24300 },
  { time: '13:00', value: 24280 },
  { time: '14:00', value: 24320 },
  { time: '15:00', value: 24350 },
  { time: '15:30', value: 24350 },
];