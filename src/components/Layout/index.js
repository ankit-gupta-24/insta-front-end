import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./style.css";

function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="whiteSpace"></div>
      <>{props.children}</>
      <div className="whiteSpace"></div>
      <Footer />
    </>
  );
}

export default Layout;
