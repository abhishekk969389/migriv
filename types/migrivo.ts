export interface LogoConfig {
  src: string;
  alt: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface ContactItem {
  id: string;
  icon: string;
  lines: string[];
  href?: string;
}

