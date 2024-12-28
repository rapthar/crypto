import React from 'react';
import { Hourglass } from 'lucide-react';

export function Cryptic() {
  return (
    <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f1f15] rounded-xl overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      <div className="absolute top-0 right-0 p-2">
        <span className="px-2 py-1 bg-[#7CFF6B] text-black text-xs font-medium rounded">PRO</span>
      </div>
      <div className="relative z-10 flex-1 flex flex-col p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded bg-black/20 flex items-center justify-center">
            <Hourglass className="w-5 h-5 text-[#7CFF6B]" />
          </div>
          <span className="font-medium">Cryptic</span>
        </div>
        <h3 className="text-2xl font-semibold mb-4">CFO managed Portfolio</h3>
        <p className="text-sm text-gray-300 mb-auto">
          A professional solution for those looking to leave the research on crypto investments in professional expert hands.
        </p>
        <div className="space-y-2 mt-6">
          <button className="w-full py-2.5 bg-[#7CFF6B] text-black rounded-lg font-medium hover:bg-[#6be65c] flex items-center justify-center gap-2">
            Activate Program
            <Hourglass className="w-4 h-4" />
          </button>
          <button className="w-full py-2.5 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 flex items-center justify-center gap-2">
            Schedule Consultation
            <Hourglass className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}