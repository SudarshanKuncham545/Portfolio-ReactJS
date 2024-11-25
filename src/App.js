import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-4">
        <p>© 2024 Sudarshan. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
