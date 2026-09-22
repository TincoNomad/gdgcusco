import type {
  SiteConfig,
  NavItem,
  Stat,
  SponsorTier,
  Sponsor,
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
  ticketUrl:
    "https://gdg.community.dev/events/details/google-gdg-cusco-presents-devfest-cusco-2026-kickoff/",
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

export const sponsors: Sponsor[] = [
  {
    name: "Platzi",
    href: "https://platzi.com",
    src: "/images/sponsors/platzi.webp",
  },
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
    name: "Universidad Andina del Cusco",
    href: "https://www.uandina.edu.pe/",
    src: "/images/allies/andina.webp",
  },
  {
    name: "CITE textil camélidos Cusco",
    href: "https://www.itp.gob.pe/",
    src: "/images/allies/cite.webp",
  },
  {
    name: "ITP red CITE",
    href: "https://www.itp.gob.pe/",
    src: "/images/allies/itp.webp",
  },
  {
    name: "Ministerio de la Producción",
    href: "https://www.gob.pe/produce",
    src: "/images/allies/min.webp",
  },
];

export const footerEditions: Edition[] = [
  { label: "2026", href: "https://gdgcusco.com/devfest" },
];
