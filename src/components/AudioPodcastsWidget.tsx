import React from 'react';
import { AudioTrack } from '../types';

interface AudioPodcastsWidgetProps {
  onPlayTrack: (track: AudioTrack) => void;
  onOpenAllPodcasts: () => void;
  currentTrackId?: string;
  isPlaying?: boolean;
}

export const AudioPodcastsWidget: React.FC<AudioPodcastsWidgetProps> = ({
  onPlayTrack,
  onOpenAllPodcasts,
  currentTrackId,
  isPlaying
}) => {
  const hardForkTrack: AudioTrack = {
    id: 'hard-fork-anthropic',
    title: 'Anthropic’s Quest to Give A.I. Morals',
    show: 'HARD FORK',
    host: 'Kevin Roose and Casey Newton',
    duration: '48 MIN',
    description: 'Our tech reporters explore the theological, mathematical belief systems guiding the next generation of LLMs.',
    date: 'October 12, 2026',
    accentColor: '#4A154B'
  };

  const dailyTrack: AudioTrack = {
    id: 'the-daily-gaza',
    title: 'Wringing Hope From the Rubble of Gaza',
    show: 'THE DAILY',
    host: 'Michael Barbaro',
    duration: '26 MIN',
    description: 'Behind the diplomatic negotiations and regional military strikes lies the devastating reality of displaced families.',
    date: 'October 12, 2026',
    accentColor: '#D0021B'
  };

  return (
    <div className="bg-[#f5f3f3] p-4 border border-[#E2E2E2] space-y-3">
      <div className="flex justify-between items-center border-b border-[#E2E2E2] pb-2">
        <span className="text-[0.6875rem] font-sans uppercase font-bold text-black tracking-wider flex items-center space-x-1.5">
          <span className="material-symbols-outlined text-sm">headphones</span>
          <span>AUDIO JOURNALISM</span>
        </span>
        <button
          onClick={onOpenAllPodcasts}
          className="text-[0.6875rem] font-sans text-[#2c638b] font-bold hover:underline cursor-pointer"
        >
          All Podcasts
        </button>
      </div>

      {/* Hard Fork Snippet */}
      <div className="space-y-1.5">
        <span className="text-[0.6875rem] font-sans font-bold text-[#4A154B] uppercase tracking-wider">
          HARD FORK
        </span>
        <h4
          onClick={() => onPlayTrack(hardForkTrack)}
          style={{ fontFamily: '"Newsreader", Georgia, serif' }}
          className="text-base font-bold text-black hover:underline cursor-pointer leading-tight"
        >
          {hardForkTrack.title}
        </h4>
        <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
          {hardForkTrack.description}
        </p>
        <div className="flex items-center space-x-3 pt-1">
          <button
            onClick={() => onPlayTrack(hardForkTrack)}
            className="bg-black hover:bg-neutral-800 text-white text-[0.6875rem] font-sans font-bold px-2.5 py-1 flex items-center space-x-1 transition-colors cursor-pointer rounded-none uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-xs">
              {currentTrackId === hardForkTrack.id && isPlaying ? 'pause' : 'play_arrow'}
            </span>
            <span>
              {currentTrackId === hardForkTrack.id && isPlaying ? 'PAUSE' : 'LISTEN • 48 MIN'}
            </span>
          </button>
        </div>
      </div>

      {/* The Daily Snippet */}
      <div className="pt-3 border-t border-[#E2E2E2] space-y-1">
        <div className="flex justify-between items-center">
          <span className="text-[0.6875rem] font-sans font-bold text-[#D0021B] uppercase tracking-wider">
            THE DAILY
          </span>
          <button
            onClick={() => onPlayTrack(dailyTrack)}
            className="text-[0.6875rem] font-sans text-[#2c638b] hover:underline font-bold flex items-center space-x-0.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-xs">
              {currentTrackId === dailyTrack.id && isPlaying ? 'pause' : 'play_arrow'}
            </span>
            <span>{currentTrackId === dailyTrack.id && isPlaying ? 'Pause' : 'Play'}</span>
          </button>
        </div>
        <p
          onClick={() => onPlayTrack(dailyTrack)}
          style={{ fontFamily: '"Newsreader", Georgia, serif' }}
          className="text-base font-bold text-black hover:underline cursor-pointer leading-tight"
        >
          {dailyTrack.title}
        </p>
        <span className="text-[0.6875rem] font-sans text-[#5A5A5A] block">
          Hosted by Michael Barbaro • 26 min
        </span>
      </div>
    </div>
  );
};
