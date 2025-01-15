import React from "react";
import { HeaderProps } from "./types";
import { Link } from "react-router-dom";
import { useLayout } from "../hooks/index";
import BurgerMenu from "./BurgerMenu";
import Logo from "../../logo/Logo";
import { useHeader } from "../hooks/useHeader";
import BurgerButton from "@/shared/buttons/burger-menu/BurgerButton";
import clsx from "clsx";

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const { isMobile } = useLayout();
  const { isMenuOpen, showBurgerMenu } = useHeader();

  return (
    <>
      <div className={`header ${isMenuOpen ? "absolute-header" : ""}`}>
        <div className="header__nav">
          <Link to="/" className="header__logo">
            <Logo />
          </Link>
          {!isMobile ? (
            <div className="header__menu">
              <ul className="header__menu-list">
                {menuItems.map((item) => (
                  <li key={item.id} className="header__menu-item">
                    <Link to={item.path} className="header__menu-link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <BurgerButton open={isMenuOpen} onClick={showBurgerMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <BurgerMenu menuItems={menuItems} onClose={showBurgerMenu} isOpen={isMenuOpen} />
      )}
    </>
  );
};

export default Header;
