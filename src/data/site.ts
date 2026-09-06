import type {
  SiteConfig,
  NavItem,
  Stat,
  SponsorTier,
  Ally,
  Edition,
} from "../types";

export const siteConfig: SiteConfig = {
  name: "DevFest 2026",
  tagline: "Conferencia de Comunidades Tech",
  date: "7 de Noviembre 2026",
  location: {
    venue: "Paraninfo Universitario",
    city: "Cusco",
    country: "Perú",
    fullAddress: "Paraninfo Universitario · Cusco",
  },
  description:
    "Un punto de encuentro para personas que aprenden, comparten y construyen tecnología desde Cusco para el mundo.",
  social: {
    instagram: "https://www.instagram.com/caribedev/",
    twitch: "https://www.twitch.tv/caribedev",
    x: "https://x.com/caribedev",
    linkedin: "https://www.linkedin.com/company/caribe-dev/",
    github: "https://github.com/caribe-dev",
  },
  codeOfConduct:
    "https://github.com/Caribe-Dev/caribe-page/blob/main/CODE_OF_CONDUCT.md",
  organizer: "GDG Cusco",
};

export const navigation: NavItem[] = [
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Agenda", href: "#agenda" },
  { label: "Aliados", href: "#aliados" },
];

export const stats: Stat[] = [
  { value: "2", label: "días de conferencias y experiencias" },
  { value: "8+", label: "speakers nacionales e internacionales" },
  { value: "6+", label: "comunidades tech participantes" },
];

export const sponsorTiers: SponsorTier[] = [
  { id: "corindon", name: "Corindón" },
  { id: "esmeralda", name: "Esmeralda" },
  { id: "perla", name: "Perla" },
  { id: "cuarzo", name: "Cuarzo" },
];

export const sponsorBenefits: string[] = [
  "Acceso al talento: DevFest reúne a los mejores devs y líderes de comunidad de la región.",
  "Visibilidad de marca: asegúrate de ser reconocido como aliado en la industria tecnológica.",
  "Impacto regional: Somos un ecosistema tecnológico emergente con alto potencial.",
];

export const allyLogos: Ally[] = [
  {
    name: "Fomo",
    href: "https://holafomo.com/",
    src: "/images/allies/fomo-logo.webp",
  },
  {
    name: "Miguel Teheran",
    href: "https://mteheran.dev/",
    src: "/images/allies/miguel-teheran.svg",
  },
  {
    name: "JetBrains",
    href: "https://www.jetbrains.com/",
    src: "/images/allies/jetbrains-logo.webp",
  },
  {
    name: "4Geeks",
    href: "https://www.4geeks.com/",
    src: "/images/allies/4geeks.svg",
  },
  {
    name: "BaqJUG",
    href: "https://www.instagram.com/barranquillajug/",
    src: "/images/allies/baqjug.png",
  },
  {
    name: "Dappsco",
    href: "https://dappsco.io/",
    src: "/images/allies/dappsco.svg",
  },
  {
    name: "QuillaBlocks",
    href: "https://www.quillablocks.org/",
    src: "/images/allies/quilla-blocks.png",
  },
  {
    name: "RubyBaq",
    href: "https://www.instagram.com/rubybarranquilla",
    src: "/images/allies/rubybaq.svg",
  },
];

export const footerEditions: Edition[] = [
  { label: "2026", href: "https://gdgcusco.com/devfest" },
];
