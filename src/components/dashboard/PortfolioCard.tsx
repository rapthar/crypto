import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PortfolioCardProps {
  balance: number;
  change24h: number;
}

export function PortfolioCard({ balance, change24h }: PortfolioCardProps) {
  const isPositive = change24h >= 0;

  return (
    <div className="p-6 rounded-xl bg-[#ffffff0a] backdrop-blur-lg
      border border-[#ffffff1a] transition-transform hover:scale-[1.02] duration-300">
      <h2 className="text-gray-400 mb-2">Total Portfolio Value</h2>
      <div className="flex items-end gap-4">
        <span className="text-3xl font-bold text-white">
          ${balance.toLocaleString()}
        </span>
        <span className={`flex items-center text-sm ${
          isPositive ? 'text-[#00FF94]' : 'text-red-500'
        }`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {Math.abs(change24h)}%
        </span>
      </div>
    </div>
  );
}