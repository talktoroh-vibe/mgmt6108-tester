import React from 'react';
import { Category } from '../types';

interface HeaderProps {
  currentCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenAuth: () => void;
  onOpenSubscribe: () => void;
  onOpenMarketWeather: (tab: 'market' | 'weather') => void;
  onOpenTodaysPaper: () => void;
  bookmarksCount: number;
  currentEdition: string;
  onSelectEdition: (edition: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  onOpenSearch,
  onOpenBookmarks,
  onOpenAuth,
  onOpenSubscribe,
  onOpenMarketWeather,
  onOpenTodaysPaper,
  bookmarksCount,
  currentEdition,
  onSelectEdition
}) => {
  const departments: Category[] = [
    'U.S.',
    'World',
    'Business',
    'Arts',
    'Lifestyle',
    'Opinion',
    'Video',
    'Shows',
    'Games',
    'Cooking',
    'Wirecutter',
    'The Athletic'
  ];

  return (
    <header className="w-full bg-[#FFFFFF] border-b border-[#E2E2E2]">
      {/* Utility Micro Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-2 pb-1.5 flex justify-between items-center text-[0.6875rem] font-sans text-[#5A5A5A] border-b border-[#E2E2E2]">
        <div className="flex items-center space-x-4">
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-1 cursor-pointer hover:text-black transition-colors focus:outline-none"
            aria-label="Search stories"
          >
            <span className="material-symbols-outlined text-sm">search</span>
            <span className="uppercase tracking-wider font-semibold">SEARCH</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2.5 border-l border-[#E2E2E2] pl-4">
            {['U.S.', 'International', 'Canada', 'Español', '中文'].map((edition) => (
              <button
                key={edition}
                onClick={() => onSelectEdition(edition)}
                className={`transition-colors cursor-pointer ${
                  currentEdition === edition
                    ? 'font-bold text-black border-b border-black pb-0.5'
                    : 'hover:text-black'
                }`}
              >
                {edition}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Stock & Weather Snippets */}
          <div className="hidden md:flex items-center space-x-3 border-r border-[#E2E2E2] pr-3">
            <button
              onClick={() => onOpenMarketWeather('market')}
              className="flex items-center space-x-1 hover:text-black transition-colors cursor-pointer"
            >
              <span className="font-bold text-black">S&P 500</span>
              <span className="text-[#2c638b] font-semibold">+0.42%</span>
            </button>
            <button
              onClick={() => onOpenMarketWeather('weather')}
              className="flex items-center space-x-1 hover:text-black transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">partly_cloudy_day</span>
              <span>68°F NYC</span>
            </button>
          </div>

          <button
            onClick={onOpenSubscribe}
            className="bg-[#2c638b] hover:bg-[#1f4a6b] text-white text-[0.6875rem] font-bold px-3 py-1.5 transition-colors cursor-pointer uppercase tracking-wider rounded-none"
          >
            SUBSCRIBE FOR $1/WEEK
          </button>
          <button
            onClick={onOpenAuth}
            className="border border-black text-black hover:bg-black hover:text-white text-[0.6875rem] font-bold px-3 py-1.5 transition-colors cursor-pointer uppercase tracking-wider rounded-none"
          >
            LOG IN
          </button>
        </div>
      </div>

      {/* Masthead Main Area */}
      <div className="w-full max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        <div className="hidden md:block w-1/4 text-[0.75rem] font-sans text-[#5A5A5A]">
          <p className="font-bold text-black text-sm">Monday, October 12, 2026</p>
          <button
            onClick={onOpenTodaysPaper}
            className="hover:underline cursor-pointer text-left block text-[#5A5A5A]"
          >
            Today’s Paper
          </button>
        </div>

        <div className="w-full md:w-2/4 text-center py-1">
          <button
            onClick={() => onSelectCategory('All')}
            className="inline-block cursor-pointer group text-left sm:text-center focus:outline-none"
          >
            <h1
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
              className="text-[2.75rem] sm:text-[3.75rem] md:text-[4.25rem] leading-none tracking-tight font-bold text-black select-none group-hover:opacity-95 transition-opacity"
            >
              The New York Times
            </h1>
          </button>
        </div>

        <div className="hidden md:flex w-1/4 justify-end items-center space-x-4 text-[#5A5A5A]">
          <button
            onClick={onOpenBookmarks}
            className="relative hover:text-black transition-colors cursor-pointer p-1"
            title="Saved Articles"
            aria-label="Bookmarks"
          >
            <span className="material-symbols-outlined text-lg">bookmark</span>
            {bookmarksCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#D0021B] text-white text-[0.5625rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {bookmarksCount}
              </span>
            )}
          </button>
          <div className="text-right text-[0.6875rem] font-sans">
            <span className="block font-semibold text-black">Digital Edition</span>
            <span className="text-[#5A5A5A]">Vol. CLXXVI No. 60,342</span>
          </div>
        </div>
      </div>

      {/* Double Rule Classic Line */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="classic-nyt-double-rule" />
      </div>

      {/* Primary Department Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between overflow-x-auto text-[0.75rem] font-sans font-semibold border-b border-[#E2E2E2] no-scrollbar">
        <div className="flex items-center space-x-6 whitespace-nowrap py-1">
          <button
            onClick={() => onSelectCategory('All')}
            className={`cursor-pointer transition-colors pb-0.5 ${
              currentCategory === 'All'
                ? 'text-black border-b-2 border-black font-bold'
                : 'text-[#5A5A5A] hover:text-black'
            }`}
          >
            Top Stories
          </button>

          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => onSelectCategory(dept)}
              className={`cursor-pointer transition-colors pb-0.5 ${
                currentCategory === dept
                  ? 'text-black border-b-2 border-black font-bold'
                  : 'text-[#5A5A5A] hover:text-black'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
