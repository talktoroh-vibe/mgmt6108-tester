import React from 'react';

interface GamesWidgetProps {
  onPlayGame: (game: 'wordle' | 'connections' | 'spellingbee' | 'mini') => void;
}

export const GamesWidget: React.FC<GamesWidgetProps> = ({ onPlayGame }) => {
  return (
    <div className="border border-[#E2E2E2] p-4 bg-white space-y-3">
      <div className="flex justify-between items-center border-b border-[#E2E2E2] pb-2">
        <div>
          <h3
            style={{ fontFamily: '"Newsreader", Georgia, serif' }}
            className="text-lg font-bold text-black"
          >
            Games
          </h3>
          <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">Daily puzzles & wordplay</p>
        </div>
        <button
          onClick={() => onPlayGame('wordle')}
          className="font-sans text-[0.6875rem] text-[#2c638b] font-bold hover:underline cursor-pointer"
        >
          Play All ›
        </button>
      </div>

      {/* Bento Game Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs font-sans">
        {/* Wordle */}
        <button
          onClick={() => onPlayGame('wordle')}
          className="border border-[#E2E2E2] p-2.5 hover:bg-[#f5f3f3] transition-colors block text-left group cursor-pointer w-full"
        >
          <div className="flex items-center space-x-1.5 mb-1">
            <div className="w-3 h-3 bg-[#2c638b]" />
            <div className="w-3 h-3 bg-[#9fd1ff]" />
            <div className="w-3 h-3 bg-[#E2E2E2]" />
          </div>
          <p className="font-bold text-black group-hover:underline">Wordle</p>
          <p className="text-[0.625rem] text-[#5A5A5A]">Guess the 5-letter word.</p>
        </button>

        {/* Connections */}
        <button
          onClick={() => onPlayGame('connections')}
          className="border border-[#E2E2E2] p-2.5 hover:bg-[#f5f3f3] transition-colors block text-left group cursor-pointer w-full"
        >
          <div className="grid grid-cols-2 gap-0.5 w-4 h-4 mb-1">
            <span className="bg-black block w-1.5 h-1.5" />
            <span className="bg-[#4A154B] block w-1.5 h-1.5" />
            <span className="bg-[#2c638b] block w-1.5 h-1.5" />
            <span className="bg-[#c4c7c7] block w-1.5 h-1.5" />
          </div>
          <p className="font-bold text-black group-hover:underline">Connections</p>
          <p className="text-[0.625rem] text-[#5A5A5A]">Find common threads.</p>
        </button>

        {/* Spelling Bee */}
        <button
          onClick={() => onPlayGame('spellingbee')}
          className="border border-[#E2E2E2] p-2.5 hover:bg-[#f5f3f3] transition-colors block text-left group cursor-pointer w-full"
        >
          <span className="material-symbols-outlined text-base text-yellow-600 block mb-0.5">
            hexagon
          </span>
          <p className="font-bold text-black group-hover:underline">Spelling Bee</p>
          <p className="text-[0.625rem] text-[#5A5A5A]">Make words with 7 letters.</p>
        </button>

        {/* The Mini Crossword */}
        <button
          onClick={() => onPlayGame('mini')}
          className="border border-[#E2E2E2] p-2.5 hover:bg-[#f5f3f3] transition-colors block text-left group cursor-pointer w-full"
        >
          <span className="material-symbols-outlined text-base text-black block mb-0.5">
            grid_4x4
          </span>
          <p className="font-bold text-black group-hover:underline">The Mini</p>
          <p className="text-[0.625rem] text-[#5A5A5A]">Solve in just minutes.</p>
        </button>
      </div>
    </div>
  );
};
