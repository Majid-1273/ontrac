import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./LanguageContext"; 
import Services from "./pages/Services";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-services" element={<Services/>} />
          <Route path="/about-us" element={<About/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </LanguageProvider>
    </div>
  );
}

export default App;
