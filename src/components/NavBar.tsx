
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-6 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-medium tracking-tight animate-fade-in">
          Steeve Trincal
        </div>
        <nav className="hidden md:flex space-x-8 animate-fade-in">
          <a href="#video" className="nav-link">
            Vidéo
          </a>
          <a href="#tech" className="nav-link">
            Technologies
          </a>
          <a href="#about" className="nav-link">
            À Propos
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-fade-in"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
      
      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black shadow-md p-4 transition-all duration-300 ease-in-out animate-fade-down">
          <nav className="flex flex-col space-y-4">
            <a href="#video" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Vidéo</a>
            <a href="#tech" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Technologies</a>
            <a href="#about" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>À Propos</a>
            <a href="#contact" className="py-2 px-4 hover:bg-secondary rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
