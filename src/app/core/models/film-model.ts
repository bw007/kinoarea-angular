type LocalizedString = {
  en: string;
  ru: string;
  ja: string;
  tr: string;
};

type LocalizedStringArray = {
  en: string[];
  ru: string[];
  ja: string[];
  tr: string[];
};

export interface FilmT {
  id: string;
  thumbnail: string;
  title: string;
  rating: number;
  anticipation_score?: number;
  year: number;
  genre: LocalizedStringArray;
}

export interface FilmDataT extends FilmT {
  description: LocalizedString;
  country: LocalizedStringArray;
  slogan?: Partial<LocalizedString>;
  
  socials: { logo: string; link: string }[];
  banner?: string;
  rating_imdb: number;
  premiere_world: Date;
  premiere_us?: Date;
  duration: number;
  sound?: string[];
  editing?: string[];
  camera?: string[];
  art?: string[];
  studios?: string[];
  director: string[];
  screenwriter?: string[];
  producer?: string[];
  operator?: string[];
  composer?: string[];
  budget?: string;
  age_rating?: string;
}