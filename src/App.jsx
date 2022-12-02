import React from "react";
import Header from "./components/Header";
import { About, Contact, Experience, Footer, Nav } from "./components/index";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
