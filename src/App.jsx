import React from "react";
import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
