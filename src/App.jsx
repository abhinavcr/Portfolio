import React from "react";
import styles from "./App.module.css";
import Hero from "./pages/Hero/Hero";
import Navbar from "./pages/Navbar/Navbar";
import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Project/Project";
import Contactus from "./pages/Contactus/Contactus";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contactus />
    </div>
  );
}

export default App;
