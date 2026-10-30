import type {
  SiteConfig,
  NavItem,
  Stat,
  SponsorTier,
  Sponsor,
  Ally,
  Edition,
  Speaker,
} from "../types";

export const siteConfig: SiteConfig = {
  name: "DevFest 2026",
  date: "7 de Noviembre 2026",
  location: {
    venue:
      "Universidad Andina del Cusco, Campus Alameda Pachakuteq, Bancopata – Santiago",
    city: "Cusco",
    country: "Perú",
    fullAddress:
      "Universidad Andina del Cusco, Campus Alameda Pachakuteq, Bancopata – Santiago. · Cusco",
  },
  description:
    "Un punto de encuentro para personas que aprenden, comparten y construyen tecnología desde Cusco para el mundo.",
  ticketUrl: "https://luma.com/msj5ywnj",
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
  { label: "Agenda", href: "#agenda" },
  { label: "Sponsors", href: "#become-sponsor" },
  { label: "Aliados", href: "#aliados" },
];

export const stats: Stat[] = [
  { value: "6", label: "horas de conferencias y experiencias" },
  { value: "10+", label: "speakers nacionales e internacionales" },
  { value: "300+", label: "participantes" },
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

export const speakers: Speaker[] = [
  {
    name: "Carlos Alarcón",
    role: "CTO & Co-founder",
    photo: "/images/speakers/alarcon.webp",
    linkedin: "https://www.linkedin.com/in/alarcon7a/",
  },
  {
    name: "Adrián Catalán",
    role: "AI & Cloud Strategy Consultant",
    photo: "/images/speakers/catalan.webp",
    linkedin: "https://www.linkedin.com/in/adriancatalan/",
  },
  {
    name: "Luis Pérez",
    role: "Senior Frontend Developer",
    photo: "/images/speakers/luis_eduardo.webp",
    linkedin: "https://www.linkedin.com/in/luiseduardoperezpacherrez/",
  },
  {
    name: "Vanessa Aristizábal",
    role: "Senior Software Engineer",
    photo: "/images/speakers/vanesa.webp",
    linkedin: "https://www.linkedin.com/in/vanessa-marely-aristizabal-angel/",
  },
  {
    name: "Bruno Aybar",
    role: "Software Engineer",
    photo: "/images/speakers/bruno_aybar_foto.webp",
    linkedin: "https://www.linkedin.com/in/bruno-aybar/",
  },
  {
    name: "Luis Ángel Quispe Navarro",
    role: "UX Conversational Designer",
    photo: "/images/speakers/luis_angel_foto.webp",
    linkedin: "https://www.linkedin.com/in/luis-angel-quispe/",
  },
  {
    name: "Andrés Chávez",
    role: "Mobile Architect",
    photo: "/images/speakers/andres_chavez_foto.webp",
    linkedin: "https://www.linkedin.com/in/goandreus/",
  },
  {
    name: "Jonathan Nolasco",
    role: "AI Engineer",
    photo: "/images/speakers/jonathan_profile_photo.webp",
    linkedin: "https://www.linkedin.com/in/jnolascob/",
  },
  {
    name: "Renzo Roca",
    role: "Data Steward",
    photo: "/images/speakers/renzo_roca_foto.webp",
    linkedin: "https://www.linkedin.com/in/rocarenzo/",
  },
  {
    name: "Noe Branagan",
    role: "3x CTO",
    photo: "/images/speakers/noe_branagan_foto.webp",
    linkedin: "https://www.linkedin.com/in/noebranagan/",
  },
  {
    name: "David Alonso Quispe",
    role: "Systems Engineer",
    photo: "/images/speakers/david_alonso_foto.webp",
    linkedin: "https://www.linkedin.com/in/davidquicast/",
  },
  {
    name: "Hansy Schmitt",
    role: "Fullstack Mobile Engineer",
    photo: "/images/speakers/hansy_schmitt_foto.webp",
    linkedin: "https://www.linkedin.com/in/hansy-schmitt-a152329/",
  },
  {
    name: "Ian Logan Will Quispe Ventura",
    role: "Data Engineer",
    photo: "/images/speakers/ian_quispe.webp",
    linkedin: "https://www.linkedin.com/in/ian-quispe-ventura-a0298a323/",
  },
  {
    name: "Luis Enrique Pinedo",
    role: "CEO",
    photo: "/images/speakers/luis_enrique_pinedo.webp",
    linkedin: "https://www.linkedin.com/in/enricoder/",
  },
];

export const footerEditions: Edition[] = [
  { label: "2026", href: "https://gdgcusco.com/devfest" },
];
