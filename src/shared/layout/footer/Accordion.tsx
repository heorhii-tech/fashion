import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FooterNavLinks } from "../common/types";
import accordionArrow from "../../../../assests/icons/accordion-arrow.svg";

interface AccordionFooterProps {
  navItem: FooterNavLinks;
}

const AccordionFooter: React.FC<AccordionFooterProps> = ({ navItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { title, links } = navItem;

  return (
    <div className="accordion-footer">
      <div className="accordion-footer__header" onClick={toggleOpen}>
        <h3 className="accordion-footer__title">{title}</h3>
        <hr className="accordion-footer__line" />
        <span className={`accordion-footer__icon ${isOpen ? "rotate" : ""}`}>
          <img className="accordion-footer__arrow" src={accordionArrow} alt="" />
        </span>
      </div>
      {isOpen && (
      <div className={`accordion-footer__content ${isOpen ? "open" : ""}`}>
      {links.map((link, index) => (
        <Link key={index} to={"/"} className="accordion-footer__link">
          {link}
        </Link>
      ))}
    </div>
      )}
    </div>
  );
};

export default AccordionFooter;