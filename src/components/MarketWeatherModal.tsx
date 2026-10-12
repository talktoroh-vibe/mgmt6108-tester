import React, { useState } from 'react';

interface MarketWeatherModalProps {
  initialTab?: 'market' | 'weather';
  onClose: () => void;
}

export const MarketWeatherModal: React.FC<MarketWeatherModalProps> = ({
  initialTab = 'market',
  onClose
}) => {
  const [tab, setTab] = useState<'market' | 'weather'>(initialTab);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
        <div className="flex justify-between items-center border-b border-black pb-2">
          <div className="flex space-x-3 text-xs font-sans font-bold">
            <button
              onClick={() => setTab('market')}
              className={`px-3 py-1 cursor-pointer uppercase tracking-wider ${
                tab === 'market' ? 'bg-black text-white' : 'text-black hover:bg-[#f0f0f0]'
              }`}
            >
              Markets & Indices
            </button>
            <button
              onClick={() => setTab('weather')}
              className={`px-3 py-1 cursor-pointer uppercase tracking-wider ${
                tab === 'weather' ? 'bg-black text-white' : 'text-black hover:bg-[#f0f0f0]'
              }`}
            >
              Weather Outlook
            </button>
          </div>
          <button
            onClick={onClose}
            className="text-black hover:text-[#5A5A5A] text-xl font-bold p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {tab === 'market' ? (
          <div className="space-y-4 font-sans text-xs">
            <div className="flex justify-between items-center text-[#5A5A5A]">
              <span>Major U.S. and Global Benchmarks</span>
              <span>Updated 4:00 PM EDT</span>
            </div>

            <div className="divide-y divide-[#E2E2E2] border border-[#E2E2E2]">
              {[
                { name: 'S&P 500', value: '5,864.67', change: '+24.52', pct: '+0.42%', up: true },
                { name: 'Dow Jones Industrial Average', value: '42,863.86', change: '+125.10', pct: '+0.29%', up: true },
                { name: 'Nasdaq Composite', value: '18,342.94', change: '+60.89', pct: '+0.33%', up: true },
                { name: 'Russell 2000', value: '2,192.15', change: '-4.30', pct: '-0.20%', up: false },
                { name: 'Crude Oil (WTI)', value: '$75.56', change: '+1.18', pct: '+1.59%', up: true },
                { name: '10-Yr U.S. Treasury Yield', value: '4.08%', change: '+0.03', pct: '+0.74%', up: true }
              ].map((item) => (
                <div key={item.name} className="p-2.5 flex items-center justify-between hover:bg-[#fafafa]">
                  <div>
                    <span className="font-bold text-black block">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-black block">{item.value}</span>
                    <span
                      className={`font-mono text-[0.6875rem] font-semibold ${
                        item.up ? 'text-[#2c638b]' : 'text-[#D0021B]'
                      }`}
                    >
                      {item.change} ({item.pct})
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[0.625rem] text-[#888] leading-tight">
              Data delayed by 15 minutes. Financial market reporting provided for informational purposes via standard exchange feeds.
            </p>
          </div>
        ) : (
          <div className="space-y-4 font-sans text-xs">
            <div className="bg-[#f5f3f3] p-4 border border-[#E2E2E2] flex items-center justify-between">
              <div>
                <span className="text-[0.6875rem] uppercase font-bold text-[#5A5A5A] block">
                  Current Conditions • New York City
                </span>
                <div className="text-3xl font-serif font-bold text-black mt-1">68°F</div>
                <p className="text-xs text-[#555]">Partly cloudy • Humidity: 46% • Wind: 7 mph WNW</p>
              </div>
              <span className="material-symbols-outlined text-5xl text-[#2c638b]">partly_cloudy_day</span>
            </div>

            <div>
              <span className="font-bold text-black uppercase tracking-wider text-[0.6875rem] block mb-2">
                Regional Forecasts
              </span>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { city: 'London', temp: '57°F', cond: 'Showers', icon: 'rainy' },
                  { city: 'Tokyo', temp: '72°F', cond: 'Sunny', icon: 'sunny' },
                  { city: 'Los Angeles', temp: '75°F', cond: 'Clear', icon: 'wb_sunny' }
                ].map((c) => (
                  <div key={c.city} className="border border-[#E2E2E2] p-2 bg-white">
                    <span className="block font-bold text-black">{c.city}</span>
                    <span className="material-symbols-outlined text-lg my-1 text-[#2c638b]">{c.icon}</span>
                    <span className="block font-bold text-sm text-black">{c.temp}</span>
                    <span className="text-[0.625rem] text-[#666]">{c.cond}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
