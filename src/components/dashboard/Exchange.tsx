import React from 'react';
import { ArrowDownUp, ArrowRight, ChevronDown, User2, Diamond, Atom, Building2, Clock, MoreHorizontal } from 'lucide-react';

export function Exchange() {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-4 h-full">
      <div className="flex items-center justify-end gap-4 mb-4">
        <button className="p-1.5 hover:bg-[#ffffff15] rounded-lg transition-colors">
          <Atom size={18} className="text-gray-400" />
        </button>
        <button className="p-1.5 hover:bg-[#ffffff15] rounded-lg transition-colors">
          <Building2 size={18} className="text-gray-400" />
        </button>
        <button className="p-1.5 hover:bg-[#ffffff15] rounded-lg transition-colors">
          <Clock size={18} className="text-gray-400" />
        </button>
        <button className="p-1.5 hover:bg-[#ffffff15] rounded-lg transition-colors">
          <MoreHorizontal size={18} className="text-gray-400" />
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Exchange</h2>
        <button className="p-2 hover:bg-[#ffffff15] rounded-lg">
          <Diamond size={18} className="text-gray-400" />
        </button>
      </div>

      <div className="bg-[#0f0f0f] rounded-lg p-1 flex gap-1 mb-6">
        <button className="flex-1 py-2 px-3 bg-[#1a1a1a] rounded-md text-sm font-medium text-[#7CFF6B]">
          <span className="flex items-center justify-center gap-1.5">
            <ArrowDownUp size={16} />
            Swap
          </span>
        </button>
        <button className="flex-1 py-2 px-3 rounded-md text-sm font-medium text-gray-400">
          <span className="flex items-center justify-center gap-1.5">
            <ArrowRight size={16} />
            Limit
          </span>
        </button>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-between p-3 bg-[#0f0f0f] rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#7CFF6B] flex items-center justify-center text-black text-xs font-bold">B</div>
            <span className="font-medium">BTC</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="text-right">
            <div className="font-medium">0.4248</div>
            <div className="text-sm text-red-500">-$3054.52</div>
            <div className="text-xs text-gray-500">Sell initiative</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-[#0f0f0f] rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">E</div>
            <span className="font-medium">ETH</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="text-right">
            <div className="font-medium">3.675</div>
            <div className="text-sm text-red-500">-$354.52</div>
            <div className="text-xs text-gray-500">Sell initiative</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 bg-[#0f0f0f] rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">T</div>
            <span className="font-medium">USDT</span>
            <ChevronDown size={16} className="text-gray-400" />
          </div>
          <div className="text-right">
            <div className="font-medium">2,450.00</div>
            <div className="text-sm text-red-500">-$2450.00</div>
            <div className="text-xs text-gray-500">Sell initiative</div>
          </div>
        </div>
      </div>

      <div className="p-2 bg-[#0f0f0f] rounded-lg mb-6">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] text-black font-bold">₿</span>
          1 BTC = 25.72 ETH = 99,438 USDT
        </div>
      </div>

      <button className="w-full py-3 bg-[#7CFF6B] text-black rounded-lg font-medium hover:bg-[#6be65c] transition-colors flex items-center justify-center gap-2">
        Swap <Diamond size={16} />
      </button>
    </div>
  );
}