import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/ontrac-logo.png";
import { useLanguage } from "../LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
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

  const navItems = {
    English: [
      { name: "HOME", path: "/" },
      { name: "ABOUT US", path: "/about-us" },
      { name: "OUR SERVICES", path: "/our-services" },
      { name: "BLOGS", path: "/blogs" },
      { name: "CONTACT", path: "/contact" },
    ],
    Arabic: [
      { name: "الصفحة الرئيسية", path: "/" },
      { name: "عن المنتجات", path: "/about-us" },
      { name: "خدماتنا", path: "/our-services" },
      { name: "المدونات", path: "/blogs" },
      { name: "اتصل بنا", path: "/contact" },
    ],
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-20 md:h-24 flex items-center justify-center z-50 transition-all duration-300
        ${isScrolled && !isOpen ? "bg-gradient-to-br from-[#2EC4D2] to-blue-500 backdrop-blur-sm shadow-lg" : ""}`}
    >
      <nav className="w-full max-w-7xl mx-auto bg-transparent text-white flex justify-between items-center px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center gap-4 z-50">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-36 md:44 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 text-base font-medium">
          {navItems[selectedLanguage].map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-black/50 transition-colors duration-300 relative py-2 group font-bold
                  ${location.pathname === item.path ? "text-black/50" : ""}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Language Selector */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative group hover:text-black/60">
            <button className="hover:cursor-pointer flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-300">
              <Globe size={20} />
              <span className="hidden lg:inline">{selectedLanguage}</span>
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gradient-to-r from-[#2EC4D2] to-blue-500 hover:text-white transition-colors duration-300
                    ${lang === selectedLanguage ? "text-[#2EC4D2] font-medium" : "text-black/60"}`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Get Started Button */}
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4D2] to-blue-500 text-white font-semibold 
            hover:shadow-lg hover:scale-105 transition-all duration-300 hidden lg:flex items-center gap-2">
            {selectedLanguage === "English" ? "Get Started" : "ابدأ الآن"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:text-blue-500 transition-colors duration-300 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 w-full md:w-[400px] h-full bg-gradient-to-b from-[#2EC4D2] to-[#004488] overflow-y-auto
            flex flex-col justify-start pt-24 transform transition-transform duration-500 ease-in-out lg:hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Mobile Language Selector */}
          <div className="px-6 mb-8">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white/10 rounded-lg text-white"
            >
              <div className="flex items-center gap-2">
                <Globe size={20} />
                <span>{selectedLanguage}</span>
              </div>
              <ChevronDown
                size={16}
                className={`transform transition-transform duration-300 ${isLangMenuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isLangMenuOpen && (
              <div className="mt-2 bg-white/5 rounded-lg overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`w-full text-left px-4 py-3 text-white hover:bg-white/10 transition-colors duration-300
                      ${lang === selectedLanguage ? "bg-white/20" : ""}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Items */}
          <ul className="text-lg md:text-xl font-medium space-y-6 text-center w-full px-6">
            {navItems[selectedLanguage].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`block py-2 hover:text-white/70 transition-colors duration-300 relative group
                    ${location.pathname === item.path ? "text-white/70" : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/70 transition-all duration-300 group-hover:w-16"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Get Started Button */}
          <button className="mx-6 mt-8 px-8 py-3 rounded-full bg-white text-[#2EC4D2] 
            font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            {selectedLanguage === "English" ? "Get Started" : "ابدأ الآن"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;