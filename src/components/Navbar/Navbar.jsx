import { useState } from "react";
import AmazonLogo from "../../assets/Logos/amazon-logo.png";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About-Us", href: "/about" },
  { label: "Contact-Us", href: "/contact" },
  { label: "Register Now", href: "/register" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={AmazonLogo} alt="Amazon Logo" className="w-32" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`hover:text-blue-600 ${
                  item.label === "Register Now"
                    ? "bg-amber-600 text-white px-3 py-1 rounded"
                    : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 px-6 py-4 bg-white shadow-md">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`hover:text-blue-600 ${
                  item.label === "Register Now"
                    ? "bg-amber-600 text-white px-3 py-1 rounded"
                    : ""
                }`}
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
