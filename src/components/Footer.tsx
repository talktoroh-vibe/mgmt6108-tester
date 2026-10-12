import React from 'react';
import { Category } from '../types';

interface FooterProps {
  onSelectCategory: (cat: Category | 'All') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory }) => {
  return (
    <footer className="w-full bg-[#FFFFFF] border-t-2 border-black pt-6 pb-12 mt-12">
      <div className="w-full max-w-7xl mx-auto px-4 space-y-6">
        {/* Footer Brand Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-[#E2E2E2] pb-4">
          <button
            onClick={() => onSelectCategory('All')}
            style={{ fontFamily: '"Newsreader", Georgia, serif' }}
            className="text-2xl sm:text-3xl tracking-tight font-bold text-black select-none cursor-pointer"
          >
            The New York Times
          </button>
          <div className="flex items-center space-x-4 text-xs font-sans text-[#5A5A5A] mt-2 md:mt-0 font-semibold">
            <button onClick={() => onSelectCategory('U.S.')} className="hover:underline hover:text-black cursor-pointer">
              NEWS
            </button>
            <button onClick={() => onSelectCategory('Opinion')} className="hover:underline hover:text-black cursor-pointer">
              OPINION
            </button>
            <button onClick={() => onSelectCategory('Arts')} className="hover:underline hover:text-black cursor-pointer">
              ARTS
            </button>
            <button onClick={() => onSelectCategory('Lifestyle')} className="hover:underline hover:text-black cursor-pointer">
              LIFESTYLE
            </button>
            <button onClick={() => onSelectCategory('All')} className="hover:underline hover:text-black cursor-pointer">
              MORE
            </button>
          </div>
        </div>

        {/* Links Grid from Shared Components */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-sans text-[#5A5A5A] justify-center md:justify-start">
          {[
            'NYTCo',
            'Contact Us',
            'Accessibility',
            'Work with us',
            'Advertise',
            'T Brand Studio',
            'Your Ad Choices',
            'Privacy Policy',
            'Terms of Service',
            'Site Map',
            'Help',
            'Subscriptions'
          ].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline hover:text-black">
              {item}
            </a>
          ))}
        </div>

        {/* Copyright Statement */}
        <div className="text-center md:text-left text-xs font-sans text-[#5A5A5A] pt-2 border-t border-[#E2E2E2] flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 The New York Times Company</p>
          <p className="mt-1 md:mt-0 text-[0.625rem]">Broadsheet Editorial Edition • Classical Typography Model</p>
        </div>
      </div>
    </footer>
  );
};
