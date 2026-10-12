import React from 'react';
import { Article } from '../types';

interface TodaysPaperModalProps {
  articles: Article[];
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const TodaysPaperModal: React.FC<TodaysPaperModalProps> = ({
  articles,
  onClose,
  onSelectArticle
}) => {
  const sections = [
    { name: 'Section A: Front Page & World Dispatch', filter: (a: Article) => a.category === 'World' || a.category === 'U.S.' },
    { name: 'Section B: Opinion & Editorial Analysis', filter: (a: Article) => a.category === 'Opinion' },
    { name: 'Section C: Sports & The Athletic', filter: (a: Article) => a.category === 'The Athletic' },
    { name: 'Section D: Arts, Culture & Living', filter: (a: Article) => a.category === 'Arts' || a.category === 'Lifestyle' || a.category === 'Cooking' }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-3xl w-full p-6 space-y-6 max-h-[88vh] overflow-y-auto shadow-2xl">
        <div className="flex justify-between items-start border-b-2 border-black pb-4">
          <div>
            <span className="text-[0.6875rem] font-sans uppercase font-bold text-[#D0021B] tracking-widest block">
              Digital Print Replica Index
            </span>
            <h3
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
              className="text-3xl font-bold text-black"
            >
              Today’s Paper — Monday, October 12, 2026
            </h3>
            <p className="text-xs font-sans text-[#5A5A5A]">
              Vol. CLXXVI No. 60,342 • Late Edition (New York)
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-black hover:text-[#5A5A5A] text-xl font-bold p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          {sections.map((sec) => {
            const secArticles = articles.filter(sec.filter);
            return (
              <div key={sec.name} className="space-y-2">
                <div className="border-b border-black pb-1">
                  <h4 className="font-serif font-bold text-lg text-black">{sec.name}</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {secArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => onSelectArticle(art)}
                      className="p-2 border border-[#E2E2E2] hover:bg-[#f8f8f8] cursor-pointer space-y-1 transition-colors"
                    >
                      <span className="text-[0.625rem] font-sans font-bold uppercase tracking-wider text-[#5A5A5A] block">
                        {art.kicker || art.category} • {art.readTime}
                      </span>
                      <h5 className="font-serif font-bold text-sm text-black line-clamp-2">
                        {art.title}
                      </h5>
                      <span className="text-[0.6875rem] font-sans text-[#777] block">
                        {art.byline}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border-t border-[#E2E2E2] pt-3 flex justify-between items-center text-xs font-sans text-[#5A5A5A]">
          <span>Complete archives dating from 1851 are accessible to subscribers.</span>
          <button
            onClick={onClose}
            className="bg-black text-white px-4 py-1.5 font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
          >
            Close Index
          </button>
        </div>
      </div>
    </div>
  );
};
