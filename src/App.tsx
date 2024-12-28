import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { TopGainers } from './components/dashboard/TopGainers';
import { AssetTable } from './components/dashboard/AssetTable';
import { Exchange } from './components/dashboard/Exchange';
import { Cryptic } from './components/dashboard/Cryptic';

const mockAssets = [
  {
    id: '1',
    name: 'Bitcoin (BTC)',
    symbol: 'BTC',
    price: 70000,
    change24h: 40,
    volume: 998973400000,
    marketCap: 850000000000,
    rewardRate: 45.34,
    chart: [35, 38, 42, 40, 45, 43, 48, 45, 50, 48],
  },
  {
    id: '2',
    name: 'Tether (USDT)',
    symbol: 'USDT',
    price: 1,
    change24h: -7,
    volume: 50973400000,
    marketCap: 95000000000,
    rewardRate: 17.63,
    chart: [50, 48, 45, 47, 44, 42, 40, 38, 35, 32],
  },
  {
    id: '3',
    name: 'Ethereum (ETH)',
    symbol: 'ETH',
    price: 3500,
    change24h: 24.83,
    volume: 8973900000,
    marketCap: 40000000000,
    rewardRate: 25.83,
    chart: [35, 38, 42, 40, 44, 42, 46, 44, 48, 46],
  },
  {
    id: '4',
    name: 'Blockport',
    symbol: 'BPT',
    price: 2790,
    change24h: 17,
    volume: 54973300000,
    marketCap: 35000000000,
    chart: [110, 115, 118, 120],
  },
  {
    id: '5',
    name: 'Anchored',
    symbol: 'AUR',
    price: 8920,
    change24h: 11,
    volume: 735600000,
    marketCap: 35000000000,
    chart: [110, 115, 118, 120],
  },
  {
    id: '6',
    name: 'Cobinhood',
    symbol: 'COB',
    price: 7350,
    change24h: 29,
    volume: 645200000,
    marketCap: 35000000000,
    chart: [110, 115, 118, 120],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Sidebar position="left">
        {/* Left sidebar content */}
      </Sidebar>

      <div className="ml-64">
        <TopBar />
        <main className="p-6">
          <div className="max-w-[1600px] mx-auto grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <div className="grid grid-rows-[auto_1fr] gap-4 h-full">
                <div className="h-[380px]">
                  <TopGainers assets={mockAssets} />
                </div>
                <div className="flex-1">
                  <AssetTable assets={mockAssets} />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-rows-[420px_1fr] gap-4">
                <Cryptic />
                <Exchange />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;