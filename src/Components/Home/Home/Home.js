import React from "react";
import AboutMe from "../About/AboutMe";
import Blog from "../Blog/Blog";
import Chat from "../ChatSection/Chat";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Portfolio from "../Portfolio/Portfolio";

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Portfolio />
      <Blog />
      <Contact />
      <Chat />
      <Footer />
    </div>
  );
};

export default Home;
