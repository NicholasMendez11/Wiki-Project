import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type props = {
  children: ReactNode;
};
function Layout({ children }: props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
