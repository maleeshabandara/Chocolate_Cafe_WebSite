import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // Import Home component
import Dishes from "./components/Dishes"; // Import Dishes component
import About from "./components/About"; // Import About component
import Menu from "./components/Menu"; // Import Menu component
import Reviews from "./components/Reviews"; // Corrected the import for Review component
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar /> {/* Navbar at the top */}
      <main className="space-y-16">
        {/* Sections */}
        <div id="home" className="pt-20">
          <Home /> {/* Render Home component */}
        </div>
        <div id="dishes" className="pt-20">
          <Dishes /> {/* Render Dishes component */}
        </div>
        <div id="about" className="pt-20">
          <About /> {/* Render About component */}
        </div>
        <div id="menu" className="pt-20">
          <Menu /> {/* Render Menu component */}
        </div>
        <div id="reviews" className="pt-20">
          <Reviews /> {/* Render Review component */}
        </div>
        <div id="footer" className="pt-20">
          <Footer /> {/* Render Footer component */}
        </div>
      </main>
    </div>
  );
};

export default App;
