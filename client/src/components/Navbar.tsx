import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import logoImage from '@/assets/indosup-logo-new.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBusinessDropdown = () => {
    setIsBusinessDropdownOpen(!isBusinessDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBusinessDropdownOpen(false);
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
  };

  // Helper function to check if a link is active
  const isActivePath = (path) => {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src={logoImage} 
                alt="IndoSup - Digital Key to Procurement" 
                className="h-12 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 ml-16">
            <Link 
              to="/about" 
              className={`transition-colors duration-200 relative group font-medium ${
                isActivePath('/about') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              About Us
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/about') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/new-initiatives" 
              className={`transition-colors duration-200 relative group font-medium ${
                isActivePath('/new-initiatives') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              New Initiatives
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/new-initiatives') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/streamlined-procurement" 
              className={`transition-colors duration-200 relative group font-medium ${
                isActivePath('/streamlined-procurement') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              Streamlined Procurement
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/streamlined-procurement') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>

            
            {/* Our Business Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                onClick={toggleBusinessDropdown}
                className={`flex items-center transition-colors duration-200 relative group font-medium ${
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
                  <Link 
                    to="/products/steel" 
                    className="block px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2"
                    onClick={handleLinkClick}
                  >
                    Steel Products
                  </Link>
                  <div className="border-t border-primary/20 my-2 mx-4"></div>
                  <Link 
                    to="/products/non-steel" 
                    className="block px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2"
                    onClick={handleLinkClick}
                  >
                    Non-Steel Products
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/media" 
              className={`transition-colors duration-200 relative group font-medium ${
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
              className={`transition-colors duration-200 relative group font-medium ${
                isActivePath('/careers') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              Careers
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/careers') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            <Link 
              to="/catalogues" 
              className={`transition-colors duration-200 relative group font-medium ${
                isActivePath('/catalogues') ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={handleLinkClick}
            >
              Catalogues
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                isActivePath('/catalogues') ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Link to="/contact">
              <Button className="bg-primary text-accent font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 border-2 border-primary">
                <span>Contact Us</span>
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
              <Link 
                to="/new-initiatives" 
                className={`block px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                  isActivePath('/new-initiatives') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                }`}
                onClick={handleLinkClick}
              >
                New Initiatives
              </Link>
              <Link 
                to="/streamlined-procurement" 
                className={`block px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                  isActivePath('/streamlined-procurement') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                }`}
                onClick={handleLinkClick}
              >
                Streamlined Procurement
              </Link>

              
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
              <Link 
                to="/catalogues" 
                className={`block px-3 py-3 rounded-md transition-all duration-200 font-medium ${
                  isActivePath('/catalogues') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-transparent'
                }`}
                onClick={handleLinkClick}
              >
                Catalogues
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