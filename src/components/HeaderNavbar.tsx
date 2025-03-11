import React, { useState, useEffect } from 'react';

export const HeaderNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");
  const navSections = ["Home", "About", "Experience","Projects", "Contact"];
  const activeClass = "text-white font-medium";
  const inactiveClass = "text-gray-300 hover:text-white transition-colors";

  // Add scroll event listener to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle navigation
  const handleNavigation = (section) => {
    const sectionId = section.toLowerCase();
    const element = document.getElementById(sectionId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Adjust offset as needed
        behavior: 'smooth'
      });
      setCurrentSection(sectionId);
    } else {
      console.warn(`Section with ID "${sectionId}" not found in the document.`);
    }
    
    setIsMenuOpen(false);
  };

  // NavItem component
  const NavItem = ({ section, current, activeClass, inactiveClass }) => {
    const sectionId = section.toLowerCase();
    return (
      <a 
        href={`#${sectionId}`}
        className={current ? activeClass : inactiveClass}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation(section);
        }}
      >
        {section}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="text-xl font-bold text-white">
          <a href="#home" onClick={(e) => {e.preventDefault(); handleNavigation("Home")}}>
          </a>
        </div>

        {/* Desktop Navigation - Now Centered */}
        <nav className="hidden md:flex justify-center gap-x-8 flex-grow">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section.toLowerCase() === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              section={section}
            />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {navSections.map(section => (
              <NavItem
                activeClass={activeClass}
                current={section.toLowerCase() === currentSection}
                inactiveClass={inactiveClass}
                key={section}
                section={section}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNavbar;