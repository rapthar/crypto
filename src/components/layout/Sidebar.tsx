import React from 'react';
import { Home, LayoutGrid, Activity, Eye, LineChart, Wallet, FileText, Wrench } from 'lucide-react';
import { Logo } from '../common/Logo';

interface SidebarProps {
  position: 'left' | 'right';
  children: React.ReactNode;
}

const mainNavItems = [
  { icon: Home, label: 'Home' },
  { icon: LayoutGrid, label: 'Portfolio', active: true, subItems: [
    { label: 'Assets', active: true },
    { label: 'Health Check' },
    { label: 'Insights' },
    { label: 'Support' },
    { label: 'Trades' }
  ]},
  { icon: Eye, label: 'Watchlist' },
  { icon: LineChart, label: 'Markets' },
  { icon: Wallet, label: 'Funds' },
  { icon: FileText, label: 'Research' },
  { icon: Wrench, label: 'Tools' },
];

export function Sidebar({ position, children }: SidebarProps) {
  return (
    <aside className={`
      fixed top-0 left-0 w-64 h-screen
      bg-[#0A0A0A] border-r border-[#ffffff0f]
    `}>
      {position === 'left' && (
        <div className="p-6 border-b border-[#ffffff0f]">
          <Logo />
        </div>
      )}
      
      {position === 'left' && (
        <nav className="h-[calc(100vh-88px)] overflow-y-auto px-4 py-4">
          <ul className="space-y-1">
            {mainNavItems.map(({ icon: Icon, label, active, subItems }) => (
              <li key={label}>
                <div>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2
                      text-gray-400 hover:text-[#00FF94]
                      ${active ? 'text-[#00FF94]' : ''}
                      transition-colors duration-200"
                    `}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{label}</span>
                  </a>
                  {subItems && (
                    <ul className="ml-7 mt-1 space-y-1 border-l border-gray-800">
                      {subItems.map(({ label: subLabel, active: subActive }) => (
                        <li key={subLabel}>
                          <a
                            href="#"
                            className={`block py-1.5 pl-4 text-sm text-gray-400
                              hover:text-[#00FF94] transition-colors duration-200
                              ${subActive ? 'text-[#00FF94]' : ''}`}
                          >
                            {subLabel}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-6">
            <div className="p-4 rounded-xl bg-[#1A1F1B] relative">
              <h3 className="text-white font-medium mb-1">Crypto Masterclass</h3>
              <p className="text-sm text-gray-400 mb-3">Check out our new expert guided program to manage your assets</p>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&h=200&q=80"
                alt="Masterclass"
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-1.5 text-sm text-gray-400">
                  Dismiss
                </button>
                <button className="flex-1 px-3 py-1.5 text-sm text-[#7CFF6B]">
                  Explore
                </button>
              </div>
              <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-300">
                ×
              </button>
            </div>
          </div>
        </nav>
      )}

      {children}
    </aside>
  );
}