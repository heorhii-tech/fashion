import faceBookICon from "../../../../assests/icons/facebook-icon.png";
import instagramIcon from "../../../../assests/icons/instagram-icon.png";
import twitterIcon from "../../../../assests/icons/twitter-icon.png";
import linkedInIcon from "../../../../assests/icons/linkedin-icon.png";
import Logo from "../../../../assests/icons/logo.svg";
import { FooterConfig, FooterNavLinks } from "./types";

const FOOTER_SOCIAL_LINKS = [
  faceBookICon,
  instagramIcon,
  twitterIcon,
  linkedInIcon,
];

export const FOOTER_NAV_LINKS: FooterNavLinks[] = [
  { title: "Company", 
    links: ["About", "Contact us", "Support", "Careers"] },
  {
    title: "Quick Links",
    links: ["Share Location", "Orders Tracking", "Size Guide", "FAQs"],
  },
  { title: "Legal", links: ["Terms & conditions", "Privacy Policy"] },
];

export const FOORTER_CONFIG: FooterConfig = {
  subtitle: "Complete your style with awesome clothes from us.",
  navItems: FOOTER_NAV_LINKS,
  socialLinks: FOOTER_SOCIAL_LINKS,
  logo: Logo,
};
