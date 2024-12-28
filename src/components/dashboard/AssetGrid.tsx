import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Asset } from '../../types';

interface AssetGridProps {
  assets: Asset[];
}

export function AssetGrid({ assets }: AssetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="p-4 rounded-xl bg-[#ffffff0a] backdrop-blur-lg
            border border-[#ffffff1a] transition-all duration-300
            hover:border-[#00FF94] cursor-pointer"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-medium">{asset.symbol}</span>
            <span className={`flex items-center text-sm ${
              asset.change24h >= 0 ? 'text-[#00FF94]' : 'text-red-500'
            }`}>
              {asset.change24h >= 0 ? (
                <ArrowUpRight size={16} />
              ) : (
                <ArrowDownRight size={16} />
              )}
              {Math.abs(asset.change24h)}%
            </span>
          </div>
          <div className="text-2xl font-bold text-white mb-2">
            ${asset.price.toLocaleString()}
          </div>
          <div className="text-sm text-gray-400">
            Vol: ${(asset.volume / 1000000).toFixed(2)}M
          </div>
        </div>
      ))}
    </div>
  );
}