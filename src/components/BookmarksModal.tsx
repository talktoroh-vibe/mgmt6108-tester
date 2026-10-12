import React from 'react';
import { Article } from '../types';

interface BookmarksModalProps {
  bookmarks: Article[];
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (id: string) => void;
  onClearAll: () => void;
}

export const BookmarksModal: React.FC<BookmarksModalProps> = ({
  bookmarks,
  onClose,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border-2 border-black max-w-xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b border-black pb-3">
          <div>
            <span className="text-[0.6875rem] font-sans uppercase font-bold text-[#5A5A5A] tracking-wider block">
              Reading Queue
            </span>
            <h3 className="font-serif text-2xl font-bold text-black">
              Saved Articles ({bookmarks.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-black hover:text-[#5A5A5A] font-bold text-xl p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {bookmarks.length === 0 ? (
          <div className="py-12 text-center space-y-2 font-sans">
            <span className="material-symbols-outlined text-4xl text-[#bbb]">bookmark_border</span>
            <p className="text-sm font-serif text-[#555]">You have no saved articles yet.</p>
            <p className="text-xs text-[#888]">
              Click the bookmark icon on any story across the front page to save it for later reading.
            </p>
          </div>
        ) : (
          <div className="space-y-3 divide-y divide-[#E2E2E2]">
            {bookmarks.map((art) => (
              <div key={art.id} className="pt-3 flex items-start justify-between space-x-3">
                <div
                  onClick={() => onSelectArticle(art)}
                  className="space-y-1 cursor-pointer group flex-1"
                >
                  <span className="text-[0.625rem] font-sans font-bold uppercase tracking-wider text-[#5A5A5A]">
                    {art.category} • {art.readTime}
                  </span>
                  <h4 className="font-serif font-bold text-base text-black group-hover:underline leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#666] line-clamp-1 font-serif">{art.deck}</p>
                </div>
                {art.imageUrl && (
                  <img
                    src={art.imageUrl}
                    alt=""
                    className="w-16 h-16 object-cover border border-[#E2E2E2] shrink-0"
                  />
                )}
                <button
                  onClick={() => onRemoveBookmark(art.id)}
                  className="text-[#999] hover:text-[#D0021B] p-1 cursor-pointer transition-colors"
                  title="Remove from saved"
                >
                  <span className="material-symbols-outlined text-sm">delete</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {bookmarks.length > 0 && (
          <div className="pt-3 border-t border-[#E2E2E2] flex justify-between items-center text-xs font-sans">
            <button
              onClick={onClearAll}
              className="text-[#D0021B] hover:underline font-semibold cursor-pointer"
            >
              Clear All Saved
            </button>
            <button
              onClick={onClose}
              className="bg-black text-white px-4 py-1.5 font-bold uppercase tracking-wider hover:bg-neutral-800 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
