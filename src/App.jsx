import { useState } from "react";
import Menu from "./Menu";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive(!menuActive);
  }

  return (
    <div className="App min-h-screen bg-neutral relative">
      <Menu menuActive={menuActive} toggleMenu={toggleMenu} />
      <Hero menuActive={menuActive} toggleMenu={toggleMenu} />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
