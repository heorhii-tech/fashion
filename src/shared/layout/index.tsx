import { FC } from 'react';
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import { HeaderMenu,LogoImg } from './config/navigation';
import { useLayout } from './hooks/useLayout';
import { FOORTER_CONFIG } from './common/index';

export const Layout: FC = () => {
  const { MEDIA_QUERIES,hasShadow } = useLayout();
 
  return (
    <div className="layout-container ">
      <header className={`layout-header ${hasShadow ? 'shadow' : ''}`}>
       <Header menuItems={HeaderMenu} mediaQueries={MEDIA_QUERIES} />
      </header>
      <div className="layout-content">
       
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
      <div className="layout-footer">
        <Footer config={FOORTER_CONFIG} mediaQueries={MEDIA_QUERIES} />
      </div>
    </div>
  );
};