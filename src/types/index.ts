export interface SiteConfig {
  name: string;
  tagline: string;
  date: string;
  location: {
    venue: string;
    city: string;
    country: string;
    fullAddress: string;
  };
  description: string;
  social: {
    instagram: string;
    twitch: string;
    x: string;
    linkedin: string;
    github: string;
  };
  codeOfConduct: string;
  organizer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SponsorTier {
  id: string;
  name: string;
}

export interface Ally {
  name: string;
  href: string;
  src: string;
}

export interface Edition {
  label: string;
  href: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  type: 'session' | 'talk' | 'break' | 'workshop';
}

export interface Speaker {
  name: string;
  role: string;
  photo: string;
  country?: string;
}
