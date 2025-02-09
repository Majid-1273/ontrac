import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-24 flex items-center justify-center bg-gradient-to-r from-[#003366] to-[#004488] px-4 z-50">
      <nav className="w-full max-w-7xl mx-auto bg-transparent text-white flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
          <span className="text-xl font-semibold tracking-wider hidden md:block bg-gradient-to-r from-white to-[#ABACB0] bg-clip-text text-transparent">
            ONTRAC BUSINESS SOLUTIONS
          </span>
          <span className="text-lg font-semibold tracking-wider md:hidden bg-gradient-to-r from-white to-[#ABACB0] bg-clip-text text-transparent">
            ONTRAC
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          {['HOME', 'ABOUT US', 'OUR SERVICES', 'BLOGS', 'CONTACT'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="hover:text-[#ABACB0] transition-colors duration-300 relative py-2 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ABACB0] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons with increased padding */}
        <div className="hidden md:flex items-center gap-6">
          <button className="px-12 py-4 text-lg rounded-lg border-2 border-[#ABACB0] text-[#ABACB0] hover:bg-[#ABACB0] hover:text-[#003366] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[160px]">
            Help
          </button>
          <button className="px-12 py-4 text-lg rounded-lg bg-[#ABACB0] text-[#003366] hover:bg-white hover:text-[#003366] transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[160px]">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:text-[#ABACB0] transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-[#003366] to-[#004488] flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#ABACB0] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(false)}
          >
            <X size={36} />
          </button>
          <ul className="text-2xl font-semibold space-y-10 text-center">
            {['HOME', 'ABOUT US', 'OUR SERVICES', 'BLOGS', 'CONTACT'].map((item) => (
              <li key={item} className="px-8">
                <Link
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-[#ABACB0] transition-colors duration-300 relative group py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ABACB0] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;