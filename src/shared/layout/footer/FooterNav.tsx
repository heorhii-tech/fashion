import React from "react";
import { FooterConfig } from "../common/types";
import { Link } from "react-router-dom";
import Accordion from "../footer/Accordion";

interface FooterNavProps {
  config: FooterConfig;
  mediaQueries:{
    isMobile: boolean;
    isTablet: boolean;
  };
}

const FooterNav: React.FC<FooterNavProps> = ({ config,mediaQueries }) => {
  console.log(config.navItems);
  const { navItems } = config;
  const { isMobile, isTablet } = mediaQueries;

 if(isMobile) return (
    <div className="footer__nav">
      {navItems.map((item, index) => (
       <Accordion key={index} navItem={item} />
      ))}
    </div>
  )
  return (
    <div className="footer__nav">
      {navItems.map((item, index) => (
       <ul key={index} className="footer__nav-list">
         <h3 className="footer__nav-title">{item.title}</h3>
         {item.links.map((link, index) => (
           <li key={index} className="footer__nav-item">
             <Link to={'/'} className="footer__nav-link">
               {link}
             </Link>
           </li>
         ))}
       </ul>
      ))}
    </div>
  )
  
};

export default FooterNav;
