export type Category =
  | 'U.S.'
  | 'World'
  | 'Business'
  | 'Arts'
  | 'Lifestyle'
  | 'Opinion'
  | 'Video'
  | 'Shows'
  | 'Games'
  | 'Cooking'
  | 'Wirecutter'
  | 'The Athletic';

export interface Comment {
  id: string;
  author: string;
  location: string;
  date: string;
  content: string;
  likes: number;
}

export interface Article {
  id: string;
  title: string;
  deck: string;
  kicker?: string;
  kickerHighlight?: boolean;
  readTime: string;
  byline: string;
  authorRole?: string;
  authorAvatar?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCredit?: string;
  category: Category;
  subCategory?: string;
  commentsCount?: number;
  comments?: Comment[];
  publishDate: string;
  paragraphs: string[];
  pullQuote?: string;
  pullQuoteAuthor?: string;
  relatedLinks?: { title: string; url?: string }[];
  isLive?: boolean;
  audioDuration?: string;
  rating?: string;
  ratingCount?: string;
}

export interface AudioTrack {
  id: string;
  title: string;
  show: string;
  host: string;
  duration: string;
  description: string;
  date: string;
  accentColor: string;
}
