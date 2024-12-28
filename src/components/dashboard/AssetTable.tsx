import React from 'react';
import { Heart, Image, RefreshCw, ChevronDown } from 'lucide-react';
import type { Asset } from '../../types';
import { MiniChart } from '../charts/MiniChart';

interface AssetTableProps {
  assets: Asset[];
}

export function AssetTable({ assets }: AssetTableProps) {
  return (
    <div className="rounded-xl bg-[#0f0f0f] overflow-hidden h-full">
      <div className="p-4 border-b border-[#ffffff1a]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Your Assets</h2>
            <span className="px-2 py-0.5 bg-[#1a1a1a] rounded-full text-xs">65 Assets</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-1 hover:bg-[#ffffff0a] rounded-lg">
              <Heart size={18} className="text-gray-400" />
            </button>
            <button className="p-1 hover:bg-[#ffffff0a] rounded-lg">
              <Image size={18} className="text-gray-400" />
            </button>
            <button className="p-1 hover:bg-[#ffffff0a] rounded-lg">
              <RefreshCw size={18} className="text-gray-400" />
            </button>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="px-3 py-1.5 bg-[#1a1a1a] rounded-lg text-sm flex items-center gap-1 hover:bg-[#ffffff15]">
            Gainers
            <span className="text-xs ml-1">×</span>
          </button>
          <button className="px-3 py-1.5 bg-[#1a1a1a] rounded-lg text-sm flex items-center gap-1 hover:bg-[#ffffff15]">
            Vol 500-10,000 M
            <span className="text-xs ml-1">×</span>
          </button>
          <button className="px-3 py-1.5 bg-[#1a1a1a] rounded-lg text-sm text-gray-400 flex items-center gap-1 hover:bg-[#ffffff15]">
            More filters
            <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-400">
              <th className="px-4 py-3 font-medium">
                <button className="flex items-center gap-1 hover:text-gray-300">
                Coin <ChevronDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 font-medium">
                <button className="flex items-center gap-1 hover:text-gray-300">
                Last price <ChevronDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 font-medium">
                <button className="flex items-center gap-1 hover:text-gray-300">
                Trend <ChevronDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 font-medium">
                <button className="flex items-center gap-1 hover:text-gray-300">
                Volume <ChevronDown size={14} />
                </button>
              </th>
              <th className="px-4 py-3 font-medium">Chart</th>
              <th className="px-4 py-3 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="border-t border-[#ffffff0a] hover:bg-[#ffffff0a]">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${
                      asset.symbol === 'BTC' ? 'bg-[#7CFF6B]' :
                      asset.symbol === 'AUTO' ? 'bg-orange-400' :
                      asset.symbol === 'INB' ? 'bg-gray-200' :
                      asset.symbol === 'BPT' ? 'bg-blue-400' :
                      asset.symbol === 'AUR' ? 'bg-purple-400' :
                      'bg-emerald-400'
                    } flex items-center justify-center text-black font-medium`}>
                      {asset.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{asset.name}</div>
                      <div className="text-xs text-gray-400">{asset.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">${asset.price.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center text-[#7CFF6B]">
                    ↑ {asset.change24h}%
                  </span>
                </td>
                <td className="px-4 py-3">{(asset.volume / 1000000).toFixed(1)} M</td>
                <td className="px-4 py-3">
                  <div className="w-24 h-8">
                    <MiniChart
                      data={asset.chart}
                      color="#7CFF6B"
                      height={32}
                      showDot={true}
                    />
                  </div>
                </td>
                <td className="px-4 py-3">
                  <button className="px-4 py-1.5 bg-[#1a1a1a] rounded-lg text-xs font-medium hover:bg-[#ffffff15]">
                    TRADE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}