import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer/>

    </div>
  );
};

export default PageLayout;
