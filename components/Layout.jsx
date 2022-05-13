import Head from "next/head";
import React, { Children } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subheader from "./Subheader";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Searchio</title>
      </Head>
      <header>
        <Navbar />
        <Subheader />
      </header>
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
