import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import Logo from "../../logo/Logo";
import { useHeader } from "../hooks/useHeader";
import BurgerButton from "@/shared/buttons/burger-menu/BurgerButton";
import { HeaderMenuItem } from "./types";

export interface HeaderProps {
  menuItems: HeaderMenuItem[];
  isTablet?: boolean;
  mediaQueries: { isMobile: boolean; isTablet: boolean };
}

const Header: React.FC<HeaderProps> = ({ menuItems, mediaQueries }) => {
  const { isMenuOpen, showBurgerMenu, } = useHeader();
  const { isTablet } = mediaQueries;

  return (
    <div className="container-header">
      <div
        className={`header`}
      >
        <div className="header__nav menu">
          <Link to="/" className="header__logo">
            <Logo typeWhite={false} />
          </Link>
          {!isTablet ? (
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
        <BurgerMenu
          menuItems={menuItems}
          onClose={showBurgerMenu}
          isOpen={isMenuOpen}
        />
      )}
    </div>
  );
};

export default Header;