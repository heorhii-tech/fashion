import { FC } from 'react';
import React from "react";
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import { HeaderMenu,LogoImg } from './config/navigation';
import { useLayout } from './hooks/index';



export const Layout: FC = () => {
 
  return (
    <div className="layout-container">
      <header className="layout-header">
       <Header menuItems={HeaderMenu} />
      </header>
      <div className="layout-content">
       
        <main className="layout-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};