import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import logoImage from '@/assets/indosup-logo-new.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState(false);
  const [isSteelDropdownOpen, setIsSteelDropdownOpen] = useState(false);
  const [isNonSteelDropdownOpen, setIsNonSteelDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const initiativesDropdownRef = useRef(null);
  const steelDropdownRef = useRef(null);
  const nonSteelDropdownRef = useRef(null);
  const [location] = useLocation();

  // Steel subcategories
  const steelSubcategories = [
    { name: "Structural Steel", path: "/products/steel", section: "structural-steel" },
    { name: "Pipes & Fittings", path: "/products/steel", section: "pipes-fittings" },
    { name: "Roofing Materials", path: "/products/steel", section: "roofing-materials" },
    { name: "Doors & Windows", path: "/products/steel", section: "doors-windows" },
    { name: "Reinforcement Products", path: "/products/steel", section: "tmt-bars" },
    { name: "Hardware & Tools", path: "/products/steel", section: "hardware-tools" }
  ];

  // Non-Steel subcategories
  const nonSteelSubcategories = [
    { name: "Plumbing", path: "/products/non-steel", section: "plumbing" },
    { name: "Electrical", path: "/products/non-steel", section: "electrical-components" },
    { name: "Fire Fighting", path: "/products/non-steel", section: "fire-fighting-systems" },
    { name: "Warehouse Infra", path: "/products/non-steel", section: "warehouse-infra" },
    { name: "Site Utilities", path: "/products/non-steel", section: "site-utilities" },
    { name: "Safety Equipment", path: "/products/non-steel", section: "safety-equipment" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBusinessDropdown = () => {
    setIsBusinessDropdownOpen(!isBusinessDropdownOpen);
  };

  const toggleInitiativesDropdown = () => {
    setIsInitiativesDropdownOpen(!isInitiativesDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBusinessDropdownOpen(false);
      }
      if (initiativesDropdownRef.current && !initiativesDropdownRef.current.contains(event.target as Node)) {
        setIsInitiativesDropdownOpen(false);
      }
      if (steelDropdownRef.current && !steelDropdownRef.current.contains(event.target as Node)) {
        setIsSteelDropdownOpen(false);
      }
      if (nonSteelDropdownRef.current && !nonSteelDropdownRef.current.contains(event.target as Node)) {
        setIsNonSteelDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsBusinessDropdownOpen(false);
    setIsInitiativesDropdownOpen(false);
    setIsSteelDropdownOpen(false);
    setIsNonSteelDropdownOpen(false);
  };

  // Navigate to specific sections on New Initiatives page
  const navigateToInitiativeSection = (sectionId: string) => {
    if (location === '/new-initiatives') {
      // If already on the page, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Navigate to page then scroll to section
      window.location.href = `/new-initiatives#${sectionId}`;
    }
    handleLinkClick();
  };

  // Navigate to specific product sections
  const navigateToProductSection = (path: string, sectionId: string) => {
    if (location === path) {
      // If already on the page, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Navigate to page then scroll to section
      window.location.href = `${path}#${sectionId}`;
    }
    handleLinkClick();
  };

  // Helper function to check if a link is active
  const isActivePath = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  // Helper function to check if Our Business dropdown should be highlighted
  const isBusinessActive = () => {
    return location.startsWith('/products/steel') || location.startsWith('/products/non-steel');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent/50 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 mr-8 lg:mr-12">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="IndoSup - Digital Key to Procurement" 
                className="h-12 sm:h-14 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
            <Link 
              to="/about" 
              className={`transition-colors duration-200 relative group font-medium text-base ${
                isActivePath('/about') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            {/* Our Initiatives Dropdown */}
            <div 
              className="relative" 
              ref={initiativesDropdownRef}
              onMouseEnter={() => setIsInitiativesDropdownOpen(true)}
              onMouseLeave={() => setIsInitiativesDropdownOpen(false)}
            >
              <Link
                to="/new-initiatives"
                onClick={handleLinkClick}
                className={`flex items-center transition-colors duration-200 relative group font-medium text-base ${
                  isActivePath('/new-initiatives') ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Our Initiatives
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isInitiativesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActivePath('/new-initiatives') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              {isInitiativesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-auto min-w-max bg-accent/50 backdrop-blur-sm rounded-lg shadow-2xl py-3 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                >
                  <button 
                    onClick={() => navigateToInitiativeSection('global-assist-section')}
                    className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2"
                  >
                    Indosup Assist Pvt Ltd
                  </button>
                  <div className="border-t border-primary/20 my-2 mx-4"></div>
                  <button 
                    onClick={() => navigateToInitiativeSection('global-private-section')}
                    className="block w-full text-left px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2"
                  >
                    Indosup Global Pvt Ltd
                  </button>
                </div>
              )}
            </div>
            
            {/* Our Business Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                onClick={toggleBusinessDropdown}
                className={`flex items-center transition-colors duration-200 relative group font-medium text-base ${
                  isBusinessActive() ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Our Businesses
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isBusinessActive() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
              
              {isBusinessDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-auto min-w-max bg-accent/50 backdrop-blur-sm rounded-lg shadow-2xl py-3 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                  onMouseLeave={() => setIsBusinessDropdownOpen(false)}
                >
                  {/* Steel Products with Nested Dropdown */}
                  <div 
                    className="relative"
                    ref={steelDropdownRef}
                    onMouseEnter={() => setIsSteelDropdownOpen(true)}
                    onMouseLeave={() => setIsSteelDropdownOpen(false)}
                  >
                    <Link 
                      to="/products/steel" 
                      className="block px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2 flex items-center justify-between"
                      onClick={handleLinkClick}
                    >
                      Steel Products
                      <ChevronDown className="ml-2 h-3 w-3 rotate-[-90deg]" />
                    </Link>
                    
                    {isSteelDropdownOpen && (
                      <div className="absolute top-0 left-full ml-1 w-48 bg-accent/50 backdrop-blur-sm rounded-lg shadow-2xl py-2 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200">
                        {steelSubcategories.map((subcategory, index) => (
                          <button
                            key={index}
                            onClick={() => navigateToProductSection(subcategory.path, subcategory.section)}
                            className="block w-full text-left px-4 py-2 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm"
                          >
                            {subcategory.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-primary/20 my-2 mx-4"></div>
                  
                  {/* Non-Steel Products with Nested Dropdown */}
                  <div 
                    className="relative"
                    ref={nonSteelDropdownRef}
                    onMouseEnter={() => setIsNonSteelDropdownOpen(true)}
                    onMouseLeave={() => setIsNonSteelDropdownOpen(false)}
                  >
                    <Link 
                      to="/products/non-steel" 
                      className="block px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2 flex items-center justify-between"
                      onClick={handleLinkClick}
                    >
                      Non-Steel Products
                      <ChevronDown className="ml-2 h-3 w-3 rotate-[-90deg]" />
                    </Link>
                    
                    {isNonSteelDropdownOpen && (
                      <div className="absolute top-0 left-full ml-1 w-48 bg-accent/50 backdrop-blur-sm rounded-lg shadow-2xl py-2 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200">
                        {nonSteelSubcategories.map((subcategory, index) => (
                          <button
                            key={index}
                            onClick={() => navigateToProductSection(subcategory.path, subcategory.section)}
                            className="block w-full text-left px-4 py-2 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 text-sm"
                          >
                            {subcategory.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-primary/20 my-2 mx-4"></div>
                  <Link 
                    to="/products/solar" 
                    className="block px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2"
                    onClick={handleLinkClick}
                  >
                    Solar Products
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/media" 
              className={`transition-colors duration-200 relative group font-medium text-base ${
                isActivePath('/media') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              Media
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/media') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/careers" 
              className={`transition-colors duration-200 relative group font-medium text-base ${
                isActivePath('/careers') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              Careers
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/careers') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/contact">
              <Button className="bg-primary text-accent font-semibold px-6 xl:px-8 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-primary whitespace-nowrap text-base">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-accent border-t border-primary/20">
              <Link 
                to="/about" 
                className={`block px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                  isActivePath('/about') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                }`}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              {/* Mobile Our Initiatives Section */}
              <div>
                <div className="flex items-center">
                  <Link
                    to="/new-initiatives"
                    onClick={handleLinkClick}
                    className={`flex-1 px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                      isActivePath('/new-initiatives') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                    }`}
                  >
                    Our Initiatives
                  </Link>
                  <button
                    onClick={toggleInitiativesDropdown}
                    className="px-2 py-3 text-white hover:text-primary transition-colors duration-200"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isInitiativesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isInitiativesDropdownOpen && (
                  <div className="pl-3 mt-1 space-y-1">
                    <button 
                      onClick={() => navigateToInitiativeSection('global-private-section')}
                      className="block w-full text-left px-4 py-2 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 ml-3"
                    >
                      Global Private Limited
                    </button>
                    <button 
                      onClick={() => navigateToInitiativeSection('global-assist-section')}
                      className="block w-full text-left px-4 py-2 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 ml-3"
                    >
                      Global Assist Limited
                    </button>
                  </div>
                )}
              </div>
              
              {/* Mobile Our Business Section */}
              <div>
                <button
                  onClick={toggleBusinessDropdown}
                  className={`flex items-center justify-between w-full px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                    isBusinessActive() ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                  }`}
                >
                  Our Businesses
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isBusinessDropdownOpen && (
                  <div className="pl-3 mt-1 space-y-1">
                    <Link 
                      to="/products/steel" 
                      className="block px-4 py-2 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 ml-3"
                      onClick={handleLinkClick}
                    >
                      Steel
                    </Link>
                    <Link 
                      to="/products/non-steel" 
                      className="block px-4 py-2 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 ml-3"
                      onClick={handleLinkClick}
                    >
                      Non-Steel
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/media" 
                className={`block px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                  isActivePath('/media') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                }`}
                onClick={handleLinkClick}
              >
                Media
              </Link>
              <Link 
                to="/careers" 
                className={`block px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                  isActivePath('/careers') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                }`}
                onClick={handleLinkClick}
              >
                Careers
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="px-3 py-3 border-t border-primary/20 mt-2">
                <Link to="/contact">
                  <Button className="w-full bg-primary text-accent font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-primary">
                    <span>Contact Us</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}