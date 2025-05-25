export type Language = 'en' | 'no' | 'fr' | 'ar' | 'ru';

export type Tool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  languages: Language[];
};

export type ProjectType = 'website' | 'marketing' | 'design' | 'video' | 'sales' | 'health';

export type SocialPlatform = 'instagram' | 'tiktok' | 'facebook' | 'youtube';

export type HerbalForm = 'tea' | 'capsule' | 'tincture' | 'powder';

export type HerbalRemedy = {
  herb: string;
  form: HerbalForm;
  dosage: string;
  warnings: string[];
};

export type MarketingContent = {
  platform: SocialPlatform;
  content: string;
  hashtags: string[];
};