import React from "react";
import Navbar from "../components/navbar/navbar";

const PageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
