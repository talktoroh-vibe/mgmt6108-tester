import React, { useState } from 'react';
import { Article, Comment } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
  onPlayArticleAudio?: (article: Article) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onPlayArticleAudio
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 'c-1',
      author: 'E. Montgomery',
      location: 'Boston, MA',
      date: '2 hours ago',
      content: 'Remarkable reporting. The historical details and depth of field work really elevate this beyond typical breaking coverage.',
      likes: 42
    },
    {
      id: 'c-2',
      author: 'Dr. Aaron Vance',
      location: 'Oxford, UK',
      date: '3 hours ago',
      content: 'A nuanced analysis that captures the systemic complexities without descending into partisan platitudes.',
      likes: 29
    }
  ]);
  const [newCommentText, setNewCommentText] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [showShareToast, setShowShareToast] = useState(false);

  if (!article) return null;

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: Comment = {
      id: `c-${Date.now()}`,
      author: commentAuthor.trim() || 'Verified Subscriber',
      location: 'New York, NY',
      date: 'Just now',
      content: newCommentText.trim(),
      likes: 1
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowShareToast(true);
      setTimeout(() => setShowShareToast(false), 2000);
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'large':
        return 'text-lg leading-relaxed';
      case 'xlarge':
        return 'text-xl leading-loose';
      default:
        return 'text-base leading-relaxed';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white max-w-4xl w-full border-2 border-black max-h-[92vh] overflow-y-auto relative my-auto shadow-2xl">
        {/* Sticky Utility Reading Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#E2E2E2] px-4 sm:px-6 py-2.5 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
              className="font-bold text-black text-sm hidden sm:inline"
            >
              The New York Times
            </span>
            <span className="text-xs font-sans text-[#5A5A5A] uppercase tracking-wider">
              {article.category} {article.subCategory ? `› ${article.subCategory}` : ''}
            </span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-sans">
            {/* Font Size Adjuster */}
            <div className="flex items-center border border-[#d3d6da] px-1.5 py-0.5 space-x-1">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-1 font-bold ${fontSize === 'normal' ? 'text-black' : 'text-[#888]'}`}
                title="Standard font size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-1 font-bold text-sm ${fontSize === 'large' ? 'text-black' : 'text-[#888]'}`}
                title="Larger font size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-1 font-bold text-base ${fontSize === 'xlarge' ? 'text-black' : 'text-[#888]'}`}
                title="Extra large font size"
              >
                A++
              </button>
            </div>

            {/* Listen button */}
            {onPlayArticleAudio && (
              <button
                onClick={() => onPlayArticleAudio(article)}
                className="flex items-center space-x-1 px-2.5 py-1 border border-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                title="Listen to story"
              >
                <span className="material-symbols-outlined text-sm">volume_up</span>
                <span className="hidden md:inline font-bold uppercase tracking-wider text-[0.625rem]">
                  Listen
                </span>
              </button>
            )}

            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(article)}
              className={`p-1.5 border transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-black text-white border-black'
                  : 'border-[#d3d6da] text-black hover:bg-[#f0f0f0]'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Save article'}
            >
              <span className="material-symbols-outlined text-sm">
                {isBookmarked ? 'bookmark_added' : 'bookmark'}
              </span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 border border-[#d3d6da] hover:bg-[#f0f0f0] transition-colors cursor-pointer"
              title="Share article link"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="text-black hover:text-[#5A5A5A] p-1 font-bold text-xl cursor-pointer"
              aria-label="Close article"
            >
              ✕
            </button>
          </div>
        </div>

        {showShareToast && (
          <div className="bg-black text-white text-xs px-4 py-2 text-center font-sans">
            Link copied to clipboard
          </div>
        )}

        {/* Article Body */}
        <article className="p-6 sm:p-10 max-w-2xl mx-auto space-y-6">
          {/* Header Metadata */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-sans uppercase tracking-widest text-[#5A5A5A]">
              <span className={`font-bold ${article.kickerHighlight ? 'text-[#D0021B]' : 'text-black'}`}>
                {article.kicker || article.category}
              </span>
              <span>{article.readTime}</span>
            </div>

            <h1
              style={{ fontFamily: '"Newsreader", Georgia, serif' }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black"
            >
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl font-serif text-[#444] leading-relaxed">
              {article.deck}
            </p>

            <div className="pt-2 pb-4 border-b border-[#E2E2E2] flex items-center justify-between text-xs font-sans text-[#5A5A5A]">
              <div>
                <span className="block font-bold text-black">{article.byline}</span>
                {article.authorRole && <span className="block text-[#777]">{article.authorRole}</span>}
              </div>
              <time className="text-[#777]">{article.publishDate}</time>
            </div>
          </div>

          {/* Featured Image */}
          {article.imageUrl && (
            <figure className="space-y-1.5">
              <img
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                className="w-full object-cover max-h-[460px] border border-[#E2E2E2]"
              />
              <figcaption className="text-xs font-sans text-[#5A5A5A] flex justify-between">
                <span>{article.imageCredit || 'The New York Times'}</span>
              </figcaption>
            </figure>
          )}

          {/* Longform Text Content */}
          <div className={`space-y-5 font-serif text-black ${getFontSizeClass()}`}>
            {article.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 leading-relaxed'
                    : 'leading-relaxed'
                }
              >
                {p}
              </p>
            ))}

            {/* Pull Quote */}
            {article.pullQuote && (
              <blockquote className="my-8 py-6 border-t-2 border-b-2 border-black space-y-2 text-center sm:text-left">
                <p className="font-serif italic text-xl sm:text-2xl text-black leading-snug">
                  “{article.pullQuote}”
                </p>
                {article.pullQuoteAuthor && (
                  <cite className="block text-xs font-sans uppercase font-bold tracking-widest text-[#5A5A5A] not-italic">
                    — {article.pullQuoteAuthor}
                  </cite>
                )}
              </blockquote>
            )}

            {/* Related Dispatch Links */}
            {article.relatedLinks && article.relatedLinks.length > 0 && (
              <div className="bg-[#f8f8f8] p-4 border border-[#E2E2E2] space-y-2 font-sans text-xs">
                <span className="font-bold text-black uppercase tracking-wider block">
                  Related Reporting
                </span>
                <ul className="space-y-1.5">
                  {article.relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <span className="text-[#2c638b] hover:underline font-semibold cursor-pointer block">
                        › {link.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Interactive Subscriber Comments */}
          <section className="pt-8 border-t-2 border-black space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-2xl font-bold text-black">
                Comments ({comments.length + (article.commentsCount || 0)})
              </h3>
              <span className="text-xs font-sans text-[#5A5A5A]">Subscribers Only</span>
            </div>

            {/* Add Comment Form */}
            <form onSubmit={handleAddComment} className="space-y-2 bg-[#f9f9f9] p-4 border border-[#E2E2E2] font-sans">
              <input
                type="text"
                placeholder="Your Name (e.g. Jane Doe, New York, NY)"
                value={commentAuthor}
                onChange={(e) => setCommentAuthor(e.target.value)}
                className="w-full border border-[#d3d6da] bg-white px-3 py-1.5 text-xs text-black"
              />
              <textarea
                rows={3}
                placeholder="Join the discussion with thoughtful analysis..."
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="w-full border border-[#d3d6da] bg-white p-2.5 text-xs text-black resize-none"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!newCommentText.trim()}
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer ${
                    newCommentText.trim()
                      ? 'bg-black text-white hover:bg-neutral-800'
                      : 'bg-[#d3d6da] text-[#777] cursor-not-allowed'
                  }`}
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-3 font-sans divide-y divide-[#E2E2E2]">
              {comments.map((c) => (
                <div key={c.id} className="pt-3 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-black">
                      {c.author} <span className="text-[#777] font-normal">({c.location})</span>
                    </span>
                    <span className="text-[#888]">{c.date}</span>
                  </div>
                  <p className="text-xs text-[#333] leading-relaxed">{c.content}</p>
                  <div className="flex items-center space-x-1 text-[0.625rem] text-[#777] pt-0.5">
                    <span className="material-symbols-outlined text-xs">thumb_up</span>
                    <span>{c.likes} recommend</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};
