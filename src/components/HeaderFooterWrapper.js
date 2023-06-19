import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./header/Header";
import Footer from "./footer/Footer";

const HeaderFooterWrapper = () => {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default HeaderFooterWrapper;
