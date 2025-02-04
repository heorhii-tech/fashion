import React from "react";
import { FooterConfig } from "../common/types";
import FooterBrands from "./FooterBrands";
import FooterNav from "./FooterNav";
interface FooterProps {
  config: FooterConfig;
  mediaQueries:{isMobile:boolean,isTablet:boolean};
}
export const Footer: React.FC<FooterProps> = ({ config, mediaQueries }) => {
  return (
    <section className="section-footer">
   <div className="container">
   <div className="footer__wrapper">
      <FooterBrands config={config} />
      <FooterNav config={config} mediaQueries={mediaQueries} />
    </div> 
   </div>
  </section>
  );
};
export default Footer;
