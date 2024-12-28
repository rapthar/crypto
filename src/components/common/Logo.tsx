import { Coins } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Coins size={24} className="text-[#7CFF6B]" />
      <span className="text-xl font-bold">Cryptic</span>
    </div>
  );
}