import React, { useState } from 'react';
import { Article } from '../types';

interface SearchModalProps {
  articles: Article[];
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  articles,
  onClose,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.deck.toLowerCase().includes(query.toLowerCase()) ||
          a.byline.toLowerCase().includes(query.toLowerCase()) ||
          a.category.toLowerCase().includes(query.toLowerCase()) ||
          (a.kicker && a.kicker.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center p-4 pt-12 sm:pt-20">
      <div className="bg-white border-2 border-black max-w-2xl w-full p-6 space-y-4 max-h-[80vh] overflow-y-auto">
        <div className="flex items-center space-x-2 border-b-2 border-black pb-2">
          <span className="material-symbols-outlined text-2xl text-black">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news, topics, authors, kickers..."
            className="w-full text-lg font-serif text-black placeholder:text-[#999] outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#999] hover:text-black text-sm cursor-pointer p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="text-black hover:text-[#5A5A5A] text-xl font-bold p-1 cursor-pointer ml-2"
          >
            ✕
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="space-y-2 pt-2 font-sans text-xs">
            <span className="text-[#5A5A5A] font-bold uppercase tracking-wider block">
              Trending Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                'Middle East Crisis',
                'Wilderness Adventure',
                '2026 Midterms',
                'Anthropic A.I.',
                'Pumpkin Tiramisu',
                'Arsenal Mikel Arteta',
                'Mamdani'
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-[#f0eded] hover:bg-[#e2e0df] text-black px-2.5 py-1 text-xs transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="space-y-3 font-sans">
            <div className="text-xs text-[#5A5A5A] font-semibold">
              {filtered.length} {filtered.length === 1 ? 'result' : 'results'} for “{query}”
            </div>
            {filtered.length === 0 ? (
              <p className="text-sm font-serif text-[#666] py-6 text-center">
                No matching articles found. Try searching for terms like “Saudi”, “Dogs”, “Election”, or “Arteta”.
              </p>
            ) : (
              <div className="divide-y divide-[#E2E2E2]">
                {filtered.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => onSelectArticle(art)}
                    className="py-3 cursor-pointer group space-y-1 hover:bg-[#fafafa] p-2 transition-colors"
                  >
                    <div className="flex items-center space-x-2 text-[0.625rem] font-bold uppercase tracking-wider text-[#5A5A5A]">
                      <span>{art.category}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-black group-hover:underline">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#555] line-clamp-2 font-serif">{art.deck}</p>
                    <span className="text-[0.6875rem] text-[#777] block">{art.byline}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
