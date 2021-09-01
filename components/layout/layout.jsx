import React from "react";

//components
import Header from "../header/header";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import MobileMenu from "../mobile-menu/mobile-menu";

const Layout = ({ children, isNormal }) => {
  return (
    <div>
      <Header></Header>
      <Menu isNormal={isNormal}></Menu>
      <MobileMenu></MobileMenu>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
