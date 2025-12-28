import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/?scrollTo=${id}`);
    }
    window.history.replaceState({}, document.title, "/");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" className="h-13 w-auto" alt="Logo"/>
            <span className="text-xl font-semibold text-gray-800 font-['https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&display=swap']">
              Community Tax and Management Services
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-0 text-gray-700 font-medium">
            <Link to="/">
              <button className="hover:text-white transition hover:bg-lime-950 p-7 hover:cursor-pointer">
                Home
              </button>
            </Link>
            <button className="hover:text-white transition hover:bg-lime-950 p-7 hover:cursor-pointer" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className="hover:text-white transition hover:bg-lime-950 p-7 hover:cursor-pointer" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <Link to="/contact">
              <button className="hover:text-white transition hover:bg-lime-950 p-7 hover:cursor-pointer">
                Contact Us
              </button>
            </Link>
          </ul>



          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col p-6 text-gray-700 text-lg">
            <button className="py-2">
              <Link to="/">Home</Link>
            </button>
            <button className="py-2" onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className="py-2" onClick={() => scrollToSection("services")}>
              Services
            </button>
            <button className="py-2">
              <Link to="/contact">Contact Us</Link>
            </button>

          </ul>
        </div>
      )}
    </nav>
  );
}
