import React from 'react';

interface LiveBannerProps {
  onOpenLiveStory: () => void;
}

export const LiveBanner: React.FC<LiveBannerProps> = ({ onOpenLiveStory }) => {
  return (
    <div
      onClick={onOpenLiveStory}
      className="w-full max-w-7xl mx-auto px-4 py-2 border-b border-[#E2E2E2] flex items-center justify-between bg-[#F8F8F8] border-l-4 border-l-[#D0021B] cursor-pointer hover:bg-[#F2F2F2] transition-colors"
      role="alert"
    >
      <div className="flex items-center space-x-3 overflow-hidden">
        <span className="inline-flex items-center px-1.5 py-0.5 text-[0.625rem] font-black tracking-widest bg-[#D0021B] text-white uppercase shrink-0">
          LIVE
        </span>
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D0021B] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D0021B]" />
        </span>
        <span className="text-[0.6875rem] uppercase font-bold text-black tracking-wider hidden sm:inline shrink-0 font-sans">
          Middle East Crisis:
        </span>
        <p className="text-[0.75rem] truncate text-black font-medium hover:underline">
          Saudi and Yemeni airports hit in new wave of regional strikes; Riyadh calls emergency council
        </p>
      </div>
      <div className="flex items-center space-x-2 text-[0.6875rem] text-[#5A5A5A] shrink-0 pl-2 font-sans">
        <span className="hidden md:inline">Updated 4m ago</span>
        <span className="material-symbols-outlined text-sm">chevron_right</span>
      </div>
    </div>
  );
};
