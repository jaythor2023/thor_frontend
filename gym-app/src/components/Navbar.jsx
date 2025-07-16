import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../index.css";
// import { styleText } from "util";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-200 text-white font-sans tracking-wide px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Thor Fitness" className="h-10 w-auto" />
          <span className="text-xl font-bold text-blue-500">Thor Fitness</span>
        </div>

        {/* Mobile hamburger icon */}
        <button
          className="md:hidden bg-white text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/gallery"
            className="text-blue-500 font-semibold text-lg hover:text-blue-400 transition"
          >
            Gallery
          </Link>
          <button
            id="navbutton"
            onClick={scrollToContact}
            className="text-blue-500 font-semibold text-lg hover:text-blue-400 transition"
          >
            Contact Us
          </button>
          <Link
            to="/book"
            className="text-yellow-400 font-semibold hover:text-yellow-300"
          >
            Book
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link
            to="/gallery"
            onClick={() => setMenuOpen(false)}
            className="text-blue-500 font-semibold hover:text-blue-300"
          >
            Gallery
          </Link>
          <button
            onClick={() => {
              setMenuOpen(false);
              scrollToContact();
            }}
            className="text-blue-500 font-semibold hover:text-blue-300"
          >
            Contact Us
          </button>
          <Link
            to="/book"
            onClick={() => setMenuOpen(false)}
            className="text-yellow-400 font-semibold hover:text-yellow-300"
          >
            Book
          </Link>
        </div>
      )}
    </nav>
  );
}
