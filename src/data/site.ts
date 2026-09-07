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
  { label: "Inicio", href: "#" },
  { label: "Speakers", href: "#speakers" },
  { label: "Sponsors", href: "#become-sponsor" },
  { label: "Agenda", href: "#agenda" },
  { label: "Aliados", href: "#aliados" },
];

export const stats: Stat[] = [
  { value: "2", label: "días de conferencias y experiencias" },
  { value: "8+", label: "speakers nacionales e internacionales" },
  { value: "6+", label: "comunidades tech participantes" },
];

export const sponsorTiers: SponsorTier[] = [
  { id: "plata", name: "Plata", icon: "/images/rojo.webp" },
  { id: "oro", name: "Oro", featured: true, icon: "/images/amarillo.webp" },
  { id: "diamante", name: "Diamante", icon: "/images/verde.webp" },
];

export const sponsorBenefits: string[] = [
  "Presencia destacada en piezas gráficas físicas y digitales.",
  "Mención especial al inicio y cierre del evento.",
  "Inclusión en publicaciones en redes sociales.",
  "Logo en flyers y fotos oficiales.",
  "Y mas",
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
