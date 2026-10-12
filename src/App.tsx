import React, { useState } from 'react';
import { ARTICLES } from './data/articles';
import { Article, AudioTrack, Category } from './types';
import { Header } from './components/Header';
import { LiveBanner } from './components/LiveBanner';
import { MidtermTracker } from './components/MidtermTracker';
import { GamesWidget } from './components/GamesWidget';
import { AudioPodcastsWidget } from './components/AudioPodcastsWidget';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';
import { GamesModal } from './components/GamesModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { BookmarksModal } from './components/BookmarksModal';
import { SearchModal } from './components/SearchModal';
import { SubscribeModal } from './components/SubscribeModal';
import { AuthModal } from './components/AuthModal';
import { MarketWeatherModal } from './components/MarketWeatherModal';
import { TodaysPaperModal } from './components/TodaysPaperModal';

export default function App() {
  // Navigation & Filtering
  const [currentCategory, setCurrentCategory] = useState<Category | 'All'>('All');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentEdition, setCurrentEdition] = useState<string>('U.S.');

  // Modals & Drawers
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [activeGame, setActiveGame] = useState<'wordle' | 'connections' | 'spellingbee' | 'mini' | null>(null);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showSubscribe, setShowSubscribe] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [marketWeatherTab, setMarketWeatherTab] = useState<'market' | 'weather' | null>(null);
  const [showTodaysPaper, setShowTodaysPaper] = useState(false);

  // Bookmarks State
  const [bookmarks, setBookmarks] = useState<Article[]>([]);

  // Audio Player State
  const [currentAudio, setCurrentAudio] = useState<AudioTrack | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleBookmark = (article: Article) => {
    setBookmarks((prev) => {
      const exists = prev.some((b) => b.id === article.id);
      if (exists) {
        return prev.filter((b) => b.id !== article.id);
      } else {
        return [...prev, article];
      }
    });
  };

  const playPodcastTrack = (track: AudioTrack) => {
    if (currentAudio?.id === track.id) {
      setIsPlayingAudio(!isPlayingAudio);
    } else {
      setCurrentAudio(track);
      setIsPlayingAudio(true);
    }
  };

  const playArticleAudio = (article: Article) => {
    const track: AudioTrack = {
      id: `audio-${article.id}`,
      title: article.title,
      show: 'THE TIMES AUDIO',
      host: article.byline,
      duration: article.readTime,
      description: article.deck,
      date: article.publishDate,
      accentColor: '#121212'
    };
    setCurrentAudio(track);
    setIsPlayingAudio(true);
  };

  // Filter articles based on Department or Topic
  const isFiltering = currentCategory !== 'All' || selectedTopic !== null;

  const filteredArticles = ARTICLES.filter((art) => {
    if (currentCategory !== 'All' && art.category !== currentCategory) {
      return false;
    }
    if (selectedTopic) {
      const topicLower = selectedTopic.toLowerCase();
      const match =
        art.title.toLowerCase().includes(topicLower) ||
        art.deck.toLowerCase().includes(topicLower) ||
        (art.kicker && art.kicker.toLowerCase().includes(topicLower)) ||
        (art.subCategory && art.subCategory.toLowerCase().includes(topicLower));
      if (!match) return false;
    }
    return true;
  });

  // Story lookups from the dataset
  const leadStory = ARTICLES.find((a) => a.id === 'saudi-yemeni-airports-strikes')!;
  const saudiAnalysis = ARTICLES.find((a) => a.id === 'saudi-arabia-few-options')!;
  const israeliElection = ARTICLES.find((a) => a.id === 'israeli-election-like-no-other')!;
  const talibanStory = ARTICLES.find((a) => a.id === 'taliban-using-europe-fear-migrants')!;

  const greatRead = ARTICLES.find((a) => a.id === 'epic-wilderness-adventure-dogs')!;
  const arcticCulture = ARTICLES.find((a) => a.id === 'what-does-it-mean-to-be-inuit-now')!;
  const stormSurge = ARTICLES.find((a) => a.id === 'powerful-storm-surge-southern-california')!;
  const mamdaniStory = ARTICLES.find((a) => a.id === 'mamdani-skip-columbus-day-parade')!;

  const opinion1 = ARTICLES.find((a) => a.id === 'opinion-europe-rising-far-right')!;
  const opinion2 = ARTICLES.find((a) => a.id === 'opinion-why-grocery-bill-will-get-worse')!;
  const opinion3 = ARTICLES.find((a) => a.id === 'opinion-neuroscience-of-decluttering')!;

  const cookingStory = ARTICLES.find((a) => a.id === 'pumpkin-date-tiramisu')!;
  const wirecutterStory = ARTICLES.find((a) => a.id === 'best-air-purifier-wildfire-smoke')!;

  const athletic1 = ARTICLES.find((a) => a.id === 'athletic-nick-sirianni-running-out-of-time')!;
  const athletic2 = ARTICLES.find((a) => a.id === 'athletic-brewers-shut-down-dodgers-nlcs-game-1')!;
  const athletic3 = ARTICLES.find((a) => a.id === 'athletic-arteta-arsenal-premier-league-title')!;

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#121212] flex flex-col font-serif selection:bg-[#cce5ff] selection:text-black">
      {/* ==================== HEADER ==================== */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={(cat) => {
          setCurrentCategory(cat);
          setSelectedTopic(null);
        }}
        onOpenSearch={() => setShowSearch(true)}
        onOpenBookmarks={() => setShowBookmarks(true)}
        onOpenAuth={() => setShowAuth(true)}
        onOpenSubscribe={() => setShowSubscribe(true)}
        onOpenMarketWeather={(tab) => setMarketWeatherTab(tab)}
        onOpenTodaysPaper={() => setShowTodaysPaper(true)}
        bookmarksCount={bookmarks.length}
        currentEdition={currentEdition}
        onSelectEdition={(ed) => setCurrentEdition(ed)}
      />

      {/* ==================== LIVE BANNER ==================== */}
      <LiveBanner onOpenLiveStory={() => setReadingArticle(leadStory)} />

      {/* ==================== MAIN BROADSHEET CANVAS ==================== */}
      <main className="w-full max-w-7xl mx-auto px-4 py-6 flex-1">
        {/* Top Sub-Navigation Quick Topics */}
        <div className="flex items-center space-x-4 pb-3 mb-6 border-b border-[#E2E2E2] text-[0.6875rem] font-sans overflow-x-auto text-[#5A5A5A] no-scrollbar">
          <span className="font-bold text-black uppercase tracking-wider shrink-0">
            Top Stories
          </span>
          <span className="text-[#E2E2E2]">|</span>
          {[
            'Middle East Crisis',
            'Russia-Ukraine War',
            '2026 Midterms',
            'Latest Polls',
            'Hurricane Isaias Impact',
            'Hard Fork Tech'
          ].map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic)}
              className={`whitespace-nowrap transition-colors cursor-pointer ${
                selectedTopic === topic
                  ? 'text-black font-bold border-b border-black'
                  : 'hover:text-black'
              }`}
            >
              {topic}
            </button>
          ))}
          {selectedTopic && (
            <button
              onClick={() => setSelectedTopic(null)}
              className="text-[#D0021B] font-bold hover:underline ml-2 cursor-pointer shrink-0"
            >
              ✕ Clear Filter
            </button>
          )}
        </div>

        {/* ================= FILTERED VIEW (IF CATEGORY OR TOPIC SELECTED) ================= */}
        {isFiltering ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b-2 border-black pb-2">
              <h2 className="text-3xl font-bold font-serif text-black">
                {selectedTopic ? `Topic: ${selectedTopic}` : `${currentCategory} Coverage`}
              </h2>
              <button
                onClick={() => {
                  setCurrentCategory('All');
                  setSelectedTopic(null);
                }}
                className="text-xs font-sans text-[#2c638b] hover:underline font-bold cursor-pointer"
              >
                ← Return to Front Page
              </button>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="py-16 text-center text-[#666] font-sans">
                <p className="text-lg font-serif">No articles currently published in this section.</p>
                <button
                  onClick={() => {
                    setCurrentCategory('All');
                    setSelectedTopic(null);
                  }}
                  className="mt-3 bg-black text-white px-4 py-2 text-xs font-bold uppercase tracking-wider"
                >
                  View All Front Page Stories
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((art) => (
                  <article
                    key={art.id}
                    onClick={() => setReadingArticle(art)}
                    className="border border-[#E2E2E2] p-4 hover:shadow-sm transition-shadow cursor-pointer space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      {art.imageUrl && (
                        <img
                          src={art.imageUrl}
                          alt={art.title}
                          className="w-full h-44 object-cover border border-[#E2E2E2]"
                        />
                      )}
                      <div className="flex items-center justify-between text-[0.625rem] font-sans font-bold uppercase tracking-wider text-[#5A5A5A]">
                        <span className={art.kickerHighlight ? 'text-[#D0021B]' : 'text-black'}>
                          {art.kicker || art.category}
                        </span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-black hover:underline leading-snug">
                        {art.title}
                      </h3>
                      <p className="font-serif text-xs text-[#444] line-clamp-3 leading-relaxed">
                        {art.deck}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-[#E2E2E2] flex items-center justify-between text-[0.6875rem] font-sans text-[#5A5A5A]">
                      <span>{art.byline}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleBookmark(art);
                        }}
                        className="hover:text-black p-1 cursor-pointer"
                      >
                        <span className="material-symbols-outlined text-sm">
                          {bookmarks.some((b) => b.id === art.id) ? 'bookmark_added' : 'bookmark'}
                        </span>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ================= CLASSIC BROADSHEET 12-COL GRID ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-6">
            {/* ================= LEFT COLUMN: MAJOR BREAKING DISPATCH (Cols 1-3) ================= */}
            <section className="lg:col-span-3 rule-gutter-right pr-0 lg:pr-6 space-y-6">
              {/* Lead Unit 1: Top Story */}
              <article className="space-y-2 pb-6 border-b border-[#E2E2E2]">
                <div className="flex items-center justify-between text-[0.6875rem] font-sans uppercase text-[#5A5A5A]">
                  <span className="text-[#D0021B] font-bold">DEVELOPING</span>
                  <span>3 MIN READ</span>
                </div>
                <h2
                  onClick={() => setReadingArticle(leadStory)}
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-2xl font-bold leading-tight text-black hover:underline cursor-pointer"
                >
                  {leadStory.title}
                </h2>
                <p className="text-xs text-[#222] font-serif leading-relaxed">
                  {leadStory.deck}
                </p>
                <div className="pt-1 text-[0.6875rem] font-sans text-[#5A5A5A] flex items-center justify-between">
                  <span>By {leadStory.byline}</span>
                  <button
                    onClick={() => toggleBookmark(leadStory)}
                    className="hover:text-black cursor-pointer p-0.5"
                    title="Bookmark story"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {bookmarks.some((b) => b.id === leadStory.id) ? 'bookmark_added' : 'bookmark'}
                    </span>
                  </button>
                </div>
                <div className="mt-3 pt-3 border-t border-[#E2E2E2] space-y-2">
                  <button
                    onClick={() => setReadingArticle(leadStory)}
                    className="block font-sans text-xs text-[#2c638b] hover:underline font-semibold text-left cursor-pointer"
                  >
                    › Graphic Analysis: How drone salvos slipped through air defenses
                  </button>
                  <button
                    onClick={() => setReadingArticle(leadStory)}
                    className="block font-sans text-xs text-[#2c638b] hover:underline font-semibold text-left cursor-pointer"
                  >
                    › Flight disruptions mount across Persian Gulf transit hubs
                  </button>
                </div>
              </article>

              {/* Story Unit 2: Saudi Analysis */}
              <article className="space-y-2 pb-6 border-b border-[#E2E2E2]">
                <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] tracking-wider block">
                  ANALYSIS
                </span>
                <h3
                  onClick={() => setReadingArticle(saudiAnalysis)}
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-lg font-semibold text-black hover:underline cursor-pointer leading-tight"
                >
                  {saudiAnalysis.title}
                </h3>
                <p className="text-xs text-[#222] font-serif leading-relaxed">
                  {saudiAnalysis.deck}
                </p>
                <div className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                  <span>6 min read</span> • <span>David D. Kirkpatrick</span>
                </div>
              </article>

              {/* Story Unit 3: Israeli Election */}
              <article className="space-y-2 pb-6 border-b border-[#E2E2E2]">
                <div className="flex items-center justify-between text-[0.6875rem] font-sans uppercase text-[#5A5A5A]">
                  <span>THE WORLD</span>
                  <button
                    onClick={() => setReadingArticle(israeliElection)}
                    className="flex items-center space-x-1 hover:text-black cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-xs">chat_bubble</span>
                    <span>54</span>
                  </button>
                </div>
                <h3
                  onClick={() => setReadingArticle(israeliElection)}
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-lg font-semibold text-black hover:underline cursor-pointer leading-tight"
                >
                  {israeliElection.title}
                </h3>
                <p className="text-xs text-[#222] font-serif leading-relaxed">
                  {israeliElection.deck}
                </p>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                  Cynthia Silva and Zach Wasser
                </p>
              </article>

              {/* Story Unit 4: European Refugees & Taliban */}
              <article className="space-y-2 pb-4">
                <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] tracking-wider block">
                  IMMIGRATION
                </span>
                <h3
                  onClick={() => setReadingArticle(talibanStory)}
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-lg font-semibold text-black hover:underline cursor-pointer leading-tight"
                >
                  {talibanStory.title}
                </h3>
                <p className="text-xs text-[#222] font-serif leading-relaxed">
                  {talibanStory.deck}
                </p>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                  6 min read • Tomas Munita
                </p>
              </article>

              {/* Mini Midterm Election Module */}
              <MidtermTracker />
            </section>

            {/* ================= CENTER COLUMN: VISUAL JOURNALISM & FEATURE (Cols 4-8) ================= */}
            <section className="lg:col-span-5 rule-gutter-right pr-0 lg:pr-6 space-y-6">
              {/* Dominant Feature: The Great Read */}
              <article className="space-y-3 pb-6 border-b border-[#E2E2E2]">
                <div className="flex items-center justify-between border-b border-black pb-1">
                  <span className="text-[0.6875rem] font-sans uppercase font-extrabold text-black tracking-widest">
                    THE GREAT READ
                  </span>
                  <span className="text-[0.6875rem] font-sans text-[#5A5A5A] uppercase tracking-wider">
                    FEATURE DISPATCH
                  </span>
                </div>

                <div
                  onClick={() => setReadingArticle(greatRead)}
                  className="relative overflow-hidden bg-[#efeded] cursor-pointer group"
                >
                  <img
                    className="w-full h-80 object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    alt={greatRead.imageAlt}
                    src={greatRead.imageUrl}
                  />
                  <div className="p-1.5 text-right text-[0.6875rem] font-sans text-[#5A5A5A] bg-white border-b border-[#E2E2E2]">
                    {greatRead.imageCredit}
                  </div>
                </div>

                <h1
                  onClick={() => setReadingArticle(greatRead)}
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-2xl sm:text-3xl font-bold leading-tight text-black hover:underline cursor-pointer"
                >
                  {greatRead.title}
                </h1>
                <p className="text-base font-serif text-black leading-relaxed">
                  {greatRead.deck}
                </p>
                <div className="flex items-center justify-between text-[0.6875rem] font-sans text-[#5A5A5A] pt-1">
                  <span>By Dan Levin • 14 min read</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => playArticleAudio(greatRead)}
                      className="hover:text-black cursor-pointer p-0.5"
                      title="Listen to story"
                    >
                      <span className="material-symbols-outlined text-sm">headphones</span>
                    </button>
                    <button
                      onClick={() => toggleBookmark(greatRead)}
                      className="hover:text-black cursor-pointer p-0.5"
                      title="Bookmark story"
                    >
                      <span className="material-symbols-outlined text-sm">
                        {bookmarks.some((b) => b.id === greatRead.id) ? 'bookmark_added' : 'bookmark'}
                      </span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Dual Story Sub-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-[#E2E2E2]">
                {/* Story Left */}
                <article
                  onClick={() => setReadingArticle(arcticCulture)}
                  className="space-y-2 cursor-pointer group"
                >
                  <img
                    className="w-full h-44 object-cover"
                    alt={arcticCulture.imageAlt}
                    src={arcticCulture.imageUrl}
                  />
                  <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] block">
                    ARCTIC CULTURE
                  </span>
                  <h3
                    style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                    className="text-base font-bold text-black group-hover:underline leading-tight"
                  >
                    {arcticCulture.title}
                  </h3>
                  <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                    {arcticCulture.deck}
                  </p>
                  <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                    Renaud Philippe • 6 min read
                  </p>
                </article>

                {/* Story Right */}
                <article
                  onClick={() => setReadingArticle(stormSurge)}
                  className="space-y-2 cursor-pointer group"
                >
                  <img
                    className="w-full h-44 object-cover"
                    alt={stormSurge.imageAlt}
                    src={stormSurge.imageUrl}
                  />
                  <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] block">
                    CLIMATE & ENVIRONMENT
                  </span>
                  <h3
                    style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                    className="text-base font-bold text-black group-hover:underline leading-tight"
                  >
                    {stormSurge.title}
                  </h3>
                  <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                    {stormSurge.deck}
                  </p>
                  <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                    Zack Wittman • 2 min read
                  </p>
                </article>
              </div>

              {/* Municipal & Politics Story Feature */}
              <article
                onClick={() => setReadingArticle(mamdaniStory)}
                className="space-y-2 pt-2 cursor-pointer group"
              >
                <div className="flex items-center justify-between text-[0.6875rem] font-sans uppercase text-[#5A5A5A]">
                  <span>NEW YORK REGION</span>
                  <span>4 MIN READ</span>
                </div>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-xl font-bold text-black group-hover:underline leading-tight"
                >
                  {mamdaniStory.title}
                </h3>
                <p className="text-xs text-black font-serif leading-relaxed">
                  {mamdaniStory.deck}
                </p>
                <div className="text-[0.6875rem] font-sans text-[#5A5A5A] flex items-center space-x-2">
                  <span>By Dave Sanders</span>
                  <span>•</span>
                  <span className="group-hover:underline">49 Comments</span>
                </div>
              </article>
            </section>

            {/* ================= RIGHT COLUMN: OPINION, PODCASTS, GAMES & CULTURE (Cols 9-12) ================= */}
            <section className="lg:col-span-4 space-y-6">
              {/* SECTION 1: OPINION ESSAYS */}
              <div className="border-b-2 border-black pb-1 flex justify-between items-end">
                <h2
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-2xl font-bold text-black tracking-tight"
                >
                  Opinion
                </h2>
                <button
                  onClick={() => setCurrentCategory('Opinion')}
                  className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] hover:text-black cursor-pointer font-semibold"
                >
                  Guest Essays ›
                </button>
              </div>

              {/* Columnist 1 */}
              <article
                onClick={() => setReadingArticle(opinion1)}
                className="space-y-1.5 pb-4 border-b border-[#E2E2E2] cursor-pointer group"
              >
                <div className="flex items-center space-x-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover border border-[#E2E2E2]"
                    alt="David Broder & Caroline de Gruyter"
                    src={opinion1.authorAvatar}
                  />
                  <div>
                    <p className="text-xs font-sans font-bold text-black">{opinion1.byline}</p>
                    <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                      {opinion1.authorRole}
                    </p>
                  </div>
                </div>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-base font-semibold italic text-black group-hover:underline leading-snug pt-1"
                >
                  {opinion1.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                  {opinion1.deck}
                </p>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">{opinion1.readTime}</p>
              </article>

              {/* Columnist 2 */}
              <article
                onClick={() => setReadingArticle(opinion2)}
                className="space-y-1 pb-4 border-b border-[#E2E2E2] cursor-pointer group"
              >
                <p className="text-xs font-sans font-bold text-black">{opinion2.byline}</p>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-base font-semibold italic text-black group-hover:underline leading-snug"
                >
                  {opinion2.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                  {opinion2.deck}
                </p>
                <div className="flex items-center space-x-2 text-[0.6875rem] font-sans text-[#5A5A5A] pt-1">
                  <span>5 min read</span>
                  <span>•</span>
                  <span className="flex items-center space-x-0.5">
                    <span className="material-symbols-outlined text-xs">forum</span>
                    <span>201 comments</span>
                  </span>
                </div>
              </article>

              {/* Columnist 3: Short */}
              <article
                onClick={() => setReadingArticle(opinion3)}
                className="space-y-1 pb-4 border-b border-[#E2E2E2] cursor-pointer group"
              >
                <p className="text-xs font-sans font-bold text-black">{opinion3.byline}</p>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-base font-semibold italic text-black group-hover:underline leading-snug"
                >
                  {opinion3.title}
                </h3>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                  5 min read • Neurobiology of attention
                </p>
              </article>

              {/* SECTION 2: AUDIO / PODCASTS */}
              <AudioPodcastsWidget
                onPlayTrack={playPodcastTrack}
                onOpenAllPodcasts={() => setCurrentCategory('Shows')}
                currentTrackId={currentAudio?.id}
                isPlaying={isPlayingAudio}
              />

              {/* SECTION 3: NYT GAMES INTERACTIVE WIDGET */}
              <GamesWidget onPlayGame={(game) => setActiveGame(game)} />

              {/* SECTION 4: COOKING & WIRECUTTER HIGHLIGHTS */}
              <div className="space-y-4 pt-2">
                {/* Cooking */}
                <div
                  onClick={() => setReadingArticle(cookingStory)}
                  className="border-t border-[#E2E2E2] pt-3 space-y-2 cursor-pointer group"
                >
                  <span className="text-[0.6875rem] font-sans uppercase font-bold text-black tracking-wider block">
                    NYT COOKING
                  </span>
                  <div className="flex space-x-3">
                    <img
                      className="w-20 h-20 object-cover shrink-0 border border-[#E2E2E2]"
                      alt={cookingStory.imageAlt}
                      src={cookingStory.imageUrl}
                    />
                    <div className="space-y-1">
                      <h4
                        style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                        className="text-sm font-bold text-black group-hover:underline leading-snug"
                      >
                        {cookingStory.title}
                      </h4>
                      <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                        {cookingStory.deck}
                      </p>
                      <span className="inline-block text-[0.625rem] font-sans bg-[#efeded] px-1 text-black font-bold">
                        {cookingStory.rating} {cookingStory.ratingCount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Wirecutter */}
                <div
                  onClick={() => setReadingArticle(wirecutterStory)}
                  className="border-t border-[#E2E2E2] pt-3 space-y-2 cursor-pointer group"
                >
                  <span className="text-[0.6875rem] font-sans uppercase font-bold text-black tracking-wider block">
                    WIRECUTTER
                  </span>
                  <h4
                    style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                    className="text-sm font-semibold text-black group-hover:underline leading-snug"
                  >
                    {wirecutterStory.title}
                  </h4>
                  <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">
                    {wirecutterStory.deck}
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= HORIZONTAL FULL-WIDTH EDITORIAL SECTION: THE ATHLETIC ================= */}
        {!isFiltering && (
          <section className="mt-12 pt-6 border-t-2 border-black space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <h2
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-2xl font-bold text-black tracking-tight"
                >
                  The Athletic
                </h2>
                <span className="text-[0.6875rem] font-sans text-[#5A5A5A] hidden sm:inline">
                  In-depth sports reporting and commentary
                </span>
              </div>
              <button
                onClick={() => setCurrentCategory('The Athletic')}
                className="text-[0.6875rem] font-sans font-bold text-[#2c638b] hover:underline uppercase cursor-pointer"
              >
                View Full Sports Coverage ›
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Athletic Story 1 */}
              <article
                onClick={() => setReadingArticle(athletic1)}
                className="space-y-2 border-b md:border-b-0 md:rule-gutter-right pr-0 md:pr-4 pb-4 md:pb-0 cursor-pointer group"
              >
                <img
                  className="w-full h-44 object-cover border border-[#E2E2E2]"
                  alt={athletic1.imageAlt}
                  src={athletic1.imageUrl}
                />
                <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] block">
                  {athletic1.kicker}
                </span>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-base font-bold text-black group-hover:underline leading-snug"
                >
                  {athletic1.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                  {athletic1.deck}
                </p>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">{athletic1.byline}</p>
              </article>

              {/* Athletic Story 2 */}
              <article
                onClick={() => setReadingArticle(athletic2)}
                className="space-y-2 border-b md:border-b-0 md:rule-gutter-right pr-0 md:pr-4 pb-4 md:pb-0 cursor-pointer group"
              >
                <img
                  className="w-full h-44 object-cover border border-[#E2E2E2]"
                  alt={athletic2.imageAlt}
                  src={athletic2.imageUrl}
                />
                <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] block">
                  {athletic2.kicker}
                </span>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-base font-bold text-black group-hover:underline leading-snug"
                >
                  {athletic2.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                  {athletic2.deck}
                </p>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">{athletic2.byline}</p>
              </article>

              {/* Athletic Story 3 */}
              <article
                onClick={() => setReadingArticle(athletic3)}
                className="space-y-2 pb-4 md:pb-0 cursor-pointer group"
              >
                <img
                  className="w-full h-44 object-cover border border-[#E2E2E2]"
                  alt={athletic3.imageAlt}
                  src={athletic3.imageUrl}
                />
                <span className="text-[0.6875rem] font-sans uppercase text-[#5A5A5A] block">
                  {athletic3.kicker}
                </span>
                <h3
                  style={{ fontFamily: '"Newsreader", Georgia, serif' }}
                  className="text-base font-bold text-black group-hover:underline leading-snug"
                >
                  {athletic3.title}
                </h3>
                <p className="text-xs text-[#5A5A5A] font-serif leading-relaxed">
                  {athletic3.deck}
                </p>
                <p className="text-[0.6875rem] font-sans text-[#5A5A5A]">{athletic3.byline}</p>
              </article>
            </div>
          </section>
        )}
      </main>

      {/* ==================== FOOTER ==================== */}
      <Footer onSelectCategory={(cat) => setCurrentCategory(cat)} />

      {/* ==================== MODALS & DRAWERS ==================== */}
      {/* 1. Article Longform Reader Modal */}
      <ArticleModal
        article={readingArticle}
        onClose={() => setReadingArticle(null)}
        isBookmarked={readingArticle ? bookmarks.some((b) => b.id === readingArticle.id) : false}
        onToggleBookmark={(art) => toggleBookmark(art)}
        onPlayArticleAudio={(art) => playArticleAudio(art)}
      />

      {/* 2. Playable Games Modal */}
      {activeGame && (
        <GamesModal initialGame={activeGame} onClose={() => setActiveGame(null)} />
      )}

      {/* 3. Bookmarks Reading Queue Drawer */}
      {showBookmarks && (
        <BookmarksModal
          bookmarks={bookmarks}
          onClose={() => setShowBookmarks(false)}
          onSelectArticle={(art) => {
            setShowBookmarks(false);
            setReadingArticle(art);
          }}
          onRemoveBookmark={(id) => setBookmarks((prev) => prev.filter((b) => b.id !== id))}
          onClearAll={() => setBookmarks([])}
        />
      )}

      {/* 4. Instant Search Modal */}
      {showSearch && (
        <SearchModal
          articles={ARTICLES}
          onClose={() => setShowSearch(false)}
          onSelectArticle={(art) => {
            setShowSearch(false);
            setReadingArticle(art);
          }}
        />
      )}

      {/* 5. Subscription Modal */}
      {showSubscribe && <SubscribeModal onClose={() => setShowSubscribe(false)} />}

      {/* 6. Subscriber Login Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* 7. Markets & Weather Modal */}
      {marketWeatherTab && (
        <MarketWeatherModal
          initialTab={marketWeatherTab}
          onClose={() => setMarketWeatherTab(null)}
        />
      )}

      {/* 8. Today's Paper Archive Index */}
      {showTodaysPaper && (
        <TodaysPaperModal
          articles={ARTICLES}
          onClose={() => setShowTodaysPaper(false)}
          onSelectArticle={(art) => {
            setShowTodaysPaper(false);
            setReadingArticle(art);
          }}
        />
      )}

      {/* 9. Bottom Floating Audio Player Bar */}
      <AudioPlayerBar
        track={currentAudio}
        isPlaying={isPlayingAudio}
        onTogglePlay={() => setIsPlayingAudio(!isPlayingAudio)}
        onClose={() => {
          setIsPlayingAudio(false);
          setCurrentAudio(null);
        }}
      />
    </div>
  );
}
