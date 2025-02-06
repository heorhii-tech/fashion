import React from "react";
import {FooterConfig} from "../common/types";
import Logo from "../../logo/Logo";

interface FooterProps {
    config:FooterConfig
}
const FooterBrands:React.FC<FooterProps> = ({config}) => {
    return <div className="footer__brand">
   <Logo typeWhite={true}  />
    <div className="footer__subtitle">
      <p>{config.subtitle}</p>
    </div>
    <div className="footer__social">
      <ul className="footer__social-list">
        {config.socialLinks.map((item: string, index: number) => (
          <li className="footer__social-item" key={index}>
            <a href={'/'}>
              <img src={item} alt={item} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>;
};
export default FooterBrands