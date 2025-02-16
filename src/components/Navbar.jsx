import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import logo from "../assets/ontrac-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const languages = ["English", "Arabic"];
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = ["HOME", "ABOUT US", "OUR SERVICES", "BLOGS", "CONTACT"];

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 md:h-24 flex items-center justify-center z-50 transition-all duration-300
        ${isScrolled ? "bg-gradient-to-br from-[#2EC4D2] to-blue-500 backdrop-blur-sm shadow-lg" : ""}`}
    >
      <nav className="w-full max-w-7xl mx-auto bg-transparent text-white flex justify-between items-center px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-4 z-50">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-36 xl:h-44 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 text-base font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item.trim() === 'HOME' ? `/` : `/${item.trim().toLowerCase().replace(" ", "-")}`}
                className={`hover:text-black/50 transition-colors duration-300 relative py-2 group font-bold
                  ${location.pathname === `/${item.toLowerCase().replace(" ", "-")}` ? "text-black/50" : ""}`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop/Tablet Language and Get Started */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative group hover:text-black/60">
            <button className="hover:cursor-pointer flex items-center gap-2 px-3 py-2 text-sm font-medium  transition-colors duration-300">
              <Globe size={20} />
              <span className="hidden lg:inline">{selectedLanguage}</span>
              <ChevronDown
                size={16}
                className="group-hover:rotate-180 transition-transform duration-300"
              />
            </button>
            <div className=" absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gradient-to-r from-[#2EC4D2] to-blue-500 hover:text-white hover:rounded-lg hover:cursor-pointer transition-colors duration-300
                    ${lang === selectedLanguage ? "text-[#2EC4D2] font-medium" : "text-black/60" }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4D2] to-blue-500 text-white font-semibold 
            hover:shadow-lg hover:scale-105 transition-all duration-300 hidden lg:flex items-center gap-2 hover:cursor-pointer
            hover:from-blue-500 hover:to-[#2EC4D2]">
            Get Started
          </button>
        </div>

        {/* Tablet/Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:text-blue-500 transition-colors duration-300 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile/Tablet Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile/Tablet Menu Panel */}
        <div
          className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-gradient-to-b from-[#2EC4D2] to-[#004488] 
            flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out xl:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Navigation Items */}
          <ul className="text-lg md:text-xl font-medium space-y-6 text-center w-full px-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className={`block py-2 hover:text-blue-500 transition-colors duration-300 relative group
                    ${location.pathname === `/${item.toLowerCase().replace(" ", "-")}` ? "text-[#ABACB0]" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#ABACB0] transition-all duration-300 group-hover:w-16"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Selector */}
          <div className="mt-8 space-y-2 text-center">
            <p className="text-sm text-gray-300">Select Language</p>
            <div className="flex justify-center gap-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105
                    ${lang === selectedLanguage
                      ? "bg-white text-[#2EC4D2] font-medium shadow-lg"
                      : "text-white border border-white/30 hover:bg-blue-500"
                    }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-white to-white/90 text-[#2EC4D2] 
            font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;