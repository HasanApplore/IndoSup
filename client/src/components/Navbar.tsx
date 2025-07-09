import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import logoImage from '@/assets/indosup-logo-new.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

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
              className="text-white hover:text-primary transition-colors duration-200 relative group font-medium"
              onClick={handleLinkClick}
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/solutions" 
              className="text-white hover:text-primary transition-colors duration-200 relative group font-medium"
              onClick={handleLinkClick}
            >
              New Initiatives
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/products" 
              className="text-white hover:text-primary transition-colors duration-200 relative group font-medium"
              onClick={handleLinkClick}
            >
              Streamlined Procurement
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            {/* Our Business Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                onClick={toggleBusinessDropdown}
                className="flex items-center text-white hover:text-primary transition-colors duration-200 relative group"
              >
                Our Businesses
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isBusinessDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-auto min-w-max bg-accent/50 backdrop-blur-sm rounded-lg shadow-2xl py-3 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={() => setIsBusinessDropdownOpen(true)}
                  onMouseLeave={() => setIsBusinessDropdownOpen(false)}
                >
                  <Link 
                    to="/products/steel" 
                    className="flex items-center px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium group rounded-md mx-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    Steel Products
                  </Link>
                  <div className="border-t border-primary/20 my-2 mx-4"></div>
                  <Link 
                    to="/products/non-steel" 
                    className="flex items-center px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium group rounded-md mx-2"
                    onClick={handleLinkClick}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    Non-Steel Products
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/media" 
              className="text-white hover:text-primary transition-colors duration-200 relative group font-medium"
              onClick={handleLinkClick}
            >
              Media
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/careers" 
              className="text-white hover:text-primary transition-colors duration-200 relative group font-medium"
              onClick={handleLinkClick}
            >
              Career
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/catalogues" 
              className="text-white hover:text-primary transition-colors duration-200 relative group font-medium"
              onClick={handleLinkClick}
            >
              Catalogues
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
                className="block px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                About Us
              </Link>
              <Link 
                to="/solutions" 
                className="block px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                New Initiatives
              </Link>
              <Link 
                to="/products" 
                className="block px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Streamlined Procurement
              </Link>
              
              {/* Mobile Our Business Section */}
              <div>
                <button
                  onClick={toggleBusinessDropdown}
                  className="flex items-center justify-between w-full px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
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
                className="block px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Media
              </Link>
              <Link 
                to="/careers" 
                className="block px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Career
              </Link>
              <Link 
                to="/catalogues" 
                className="block px-3 py-3 text-white hover:text-primary hover:bg-transparent rounded-md transition-all duration-200 font-medium"
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