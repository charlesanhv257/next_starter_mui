export interface Language {
  name: string;
  native: string;
}

export interface Continent {
  name: string;
}

export interface Country {
  code: string;
  name: string;
  emoji: string;
  capital?: string;
  currency?: string;
  phone: string;
  continent: Continent;
  languages: Language[];
}

export interface CountriesData {
  countries: Country[];
}
