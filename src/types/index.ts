export type Language = 'en' | 'no' | 'fr' | 'ar' | 'ru';

export type Tool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  languages: Language[];
};

export type ProjectType = 'website' | 'marketing' | 'design' | 'video' | 'sales' | 'health';

export type Project = {
  id: string;
  type: ProjectType;
  name: string;
  description: string;
  createdAt: Date;
  language: Language;
};

export type WebsiteProject = Project & {
  type: 'website';
  domain?: string;
  pages: string[];
  exportPlatform?: 'wordpress' | 'webflow' | 'custom';
};

export type MarketingProject = Project & {
  type: 'marketing';
  platform: 'seo' | 'ads' | 'social';
  content: string[];
  socialPlatforms?: ('youtube' | 'instagram' | 'tiktok' | 'snapchat' | 'facebook')[];
};

export type DesignProject = Project & {
  type: 'design';
  category: 'logo' | 'banner' | 'social';
  assets: string[];
};

export type VideoProject = Project & {
  type: 'video';
  format: 'short' | 'long';
  platform: 'youtube' | 'instagram' | 'tiktok';
  assets: string[];
};

export type SalesProject = Project & {
  type: 'sales';
  category: 'strategy' | 'funnel' | 'tech';
  deliverables: string[];
};

export type HerbalProject = Project & {
  type: 'health';
  category: 'consultation' | 'treatment' | 'research';
  symptoms?: string[];
  recommendations?: {
    herbs: string[];
    supplements: string[];
    warnings: string[];
  };
};