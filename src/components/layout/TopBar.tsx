import React from 'react';
import { Bell, Search, Settings, Upload } from 'lucide-react';

export function TopBar() {
  return (
    <div className="h-16 border-b border-[#ffffff0f] flex items-center px-4 pt-[20px]">
      <div className="flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=40&h=40&q=80"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-medium">Rene Wells</span>
            <span className="px-1.5 py-0.5 text-xs bg-gray-800 text-gray-300 rounded">PRO</span>
          </div>
          <span className="text-sm text-gray-500">@leftist_crypto_ow</span>
        </div>
      </div>

      <button className="flex items-center gap-2 px-4 py-2 bg-[#7CFF6B] text-black rounded-lg
        hover:bg-[#6be65c] transition-colors duration-200 font-medium ml-6">
        <Upload className="w-4 h-4" />
        Deposit
      </button>
      
      <div className="flex items-center gap-3 ml-auto">
        <div className="relative">
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#7CFF6B] rounded-full text-[10px] 
            flex items-center justify-center text-black font-medium">
            8
          </div>
          <button className="p-2 hover:bg-[#ffffff0a] rounded-lg transition-colors duration-200">
            <Bell className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        <div className="relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-64 h-9 bg-[#ffffff0a] rounded-lg pl-4 pr-9 text-sm text-gray-300 placeholder-gray-500
              focus:outline-none focus:ring-1 focus:ring-[#00FF94]"
          />
        </div>
        
        <button className="p-2 hover:bg-[#ffffff0a] rounded-lg transition-colors duration-200">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}