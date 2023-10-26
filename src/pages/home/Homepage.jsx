import React from "react";
import "./homepages.css";
import Header from "../../components/home-components/header/Header";
import Content from "../../components/home-components/content/Content";
import Footer from "../../components/home-components/footer/Footer";
import Sidebar from "../../components/home-components/side-bar/Sidebar";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
      <Sidebar />
    </div>
  );
};

export default Homepage;
