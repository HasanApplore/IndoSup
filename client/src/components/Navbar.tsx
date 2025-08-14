import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useRouter } from 'wouter';
import logoImage from '@/assets/indosup-logo-new.png';
import logoImage1 from '@/assets/logoImage1.svg';
import logoImage2 from '@/assets/logoImage2.svg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessDropdownOpen, setIsBusinessDropdownOpen] = useState(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] = useState(false);
  const [isSteelDropdownOpen, setIsSteelDropdownOpen] = useState(false);
  const [isNonSteelDropdownOpen, setIsNonSteelDropdownOpen] = useState(false);
  const [isSolarDropdownOpen, setIsSolarDropdownOpen] = useState(false);
  
  // Timeout refs for delayed dropdown closing
  const businessTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const initiativesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const steelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nonSteelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solarTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const initiativesDropdownRef = useRef<HTMLDivElement>(null);
  const steelDropdownRef = useRef<HTMLDivElement>(null);
  const nonSteelDropdownRef = useRef<HTMLDivElement>(null);
  const solarDropdownRef = useRef<HTMLDivElement>(null);
  const [location, navigate] = useLocation();

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
    { name: "Water Systems", path: "/products/non-steel", section: "pumping-water-system" }
  ];

  // Solar subcategories
  const solarSubcategories = [
    { name: "Solar Panels", path: "/products/solar", section: "solar-panels" },
    { name: "Inverters", path: "/products/solar", section: "inverters" },
    { name: "Mounting & Racking Systems", path: "/products/solar", section: "mounting-racking" },
    { name: "Energy Storage", path: "/products/solar", section: "energy-storage" },
    { name: "Miscellaneous & Accessories", path: "/products/solar", section: "miscellaneous-accessories" }
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

  // Delayed dropdown handlers
  const handleBusinessMouseEnter = () => {
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current);
    }
    setIsBusinessDropdownOpen(true);
  };

  const handleBusinessMouseLeave = () => {
    businessTimeoutRef.current = setTimeout(() => {
      setIsBusinessDropdownOpen(false);
      setIsSteelDropdownOpen(false);
      setIsNonSteelDropdownOpen(false);
      setIsSolarDropdownOpen(false);
    }, 300);
  };

  const handleSteelMouseEnter = () => {
    if (steelTimeoutRef.current) {
      clearTimeout(steelTimeoutRef.current);
    }
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current);
    }
    setIsSteelDropdownOpen(true);
    setIsNonSteelDropdownOpen(false);
  };

  const handleSteelMouseLeave = () => {
    steelTimeoutRef.current = setTimeout(() => {
      setIsSteelDropdownOpen(false);
    }, 200);
  };

  const handleNonSteelMouseEnter = () => {
    if (nonSteelTimeoutRef.current) {
      clearTimeout(nonSteelTimeoutRef.current);
    }
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current);
    }
    setIsNonSteelDropdownOpen(true);
    setIsSteelDropdownOpen(false);
  };

  const handleNonSteelMouseLeave = () => {
    nonSteelTimeoutRef.current = setTimeout(() => {
      setIsNonSteelDropdownOpen(false);
    }, 200);
  };

  const handleSolarMouseEnter = () => {
    if (solarTimeoutRef.current) {
      clearTimeout(solarTimeoutRef.current);
    }
    if (businessTimeoutRef.current) {
      clearTimeout(businessTimeoutRef.current);
    }
    setIsSolarDropdownOpen(true);
    setIsSteelDropdownOpen(false);
    setIsNonSteelDropdownOpen(false);
  };

  const handleSolarMouseLeave = () => {
    solarTimeoutRef.current = setTimeout(() => {
      setIsSolarDropdownOpen(false);
    }, 200);
  };

  // Delayed dropdown handlers for initiatives
  const handleInitiativesMouseEnter = () => {
    if (initiativesTimeoutRef.current) {
      clearTimeout(initiativesTimeoutRef.current);
    }
    setIsInitiativesDropdownOpen(true);
  };

  const handleInitiativesMouseLeave = () => {
    initiativesTimeoutRef.current = setTimeout(() => {
      setIsInitiativesDropdownOpen(false);
    }, 300);
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
      if (solarDropdownRef.current && !solarDropdownRef.current.contains(event.target as Node)) {
        setIsSolarDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clear all timeouts on cleanup
      if (businessTimeoutRef.current) clearTimeout(businessTimeoutRef.current);
      if (initiativesTimeoutRef.current) clearTimeout(initiativesTimeoutRef.current);
      if (steelTimeoutRef.current) clearTimeout(steelTimeoutRef.current);
      if (nonSteelTimeoutRef.current) clearTimeout(nonSteelTimeoutRef.current);
      if (solarTimeoutRef.current) clearTimeout(solarTimeoutRef.current);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsBusinessDropdownOpen(false);
    setIsInitiativesDropdownOpen(false);
    setIsSteelDropdownOpen(false);
    setIsNonSteelDropdownOpen(false);
    setIsSolarDropdownOpen(false);
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

  // Navigate to specific business sections (mobile)
  const navigateToBusinessSection = (sectionId: string) => {
    if (sectionId === 'solar-section') {
      // For solar, navigate to solar products page
      navigate('/products/solar');
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
    }
    setIsMenuOpen(false);
    setIsBusinessDropdownOpen(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-accent/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 mr-3 sm:mr-6 lg:mr-8">
            <Link to="/" className="flex items-center">
              <img 
                src={logoImage2} 
                alt="IndoSup - Digital Key to Procurement" 
                className="h-8 xs:h-9 sm:h-10 md:h-12 lg:h-14 w-auto cursor-pointer transition-transform duration-200 hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 flex-1 justify-center">
            <Link 
              to="/about" 
              className={`transition-colors duration-200 relative group font-medium text-base py-2 ${
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
              onMouseEnter={handleInitiativesMouseEnter}
              onMouseLeave={handleInitiativesMouseLeave}
            >
              <Link
                to="/new-initiatives"
                onClick={handleLinkClick}
                className={`flex items-center transition-colors duration-200 relative group font-medium text-base py-2 ${
                  isActivePath('/new-initiatives') ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Our Initiatives
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isInitiativesDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActivePath('/new-initiatives') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              {isInitiativesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-auto min-w-max bg-accent/80 backdrop-blur-md rounded-lg shadow-2xl py-3 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                  onMouseEnter={handleInitiativesMouseEnter}
                  onMouseLeave={handleInitiativesMouseLeave}
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
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleBusinessMouseEnter}
              onMouseLeave={handleBusinessMouseLeave}
            >
              <Link
                to="/products/steel"
                onClick={handleLinkClick}
                className={`flex items-center transition-colors duration-200 relative group font-medium text-base py-2 ${
                  isBusinessActive() ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                Our Businesses
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isBusinessActive() ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              {isBusinessDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-auto min-w-max bg-accent/80 backdrop-blur-md rounded-lg shadow-2xl py-3 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                >
                  {/* Steel Products with Nested Dropdown */}
                  <div 
                    className="relative"
                    ref={steelDropdownRef}
                    onMouseEnter={handleSteelMouseEnter}
                    onMouseLeave={handleSteelMouseLeave}
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
                      <div 
                        className="absolute top-0 left-full ml-1 w-48 bg-accent/80 backdrop-blur-md rounded-lg shadow-2xl py-2 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                        onMouseEnter={handleSteelMouseEnter}
                        onMouseLeave={handleSteelMouseLeave}
                      >
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
                    onMouseEnter={handleNonSteelMouseEnter}
                    onMouseLeave={handleNonSteelMouseLeave}
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
                      <div 
                        className="absolute top-0 left-full ml-1 w-48 bg-accent/80 backdrop-blur-md rounded-lg shadow-2xl py-2 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                        onMouseEnter={handleNonSteelMouseEnter}
                        onMouseLeave={handleNonSteelMouseLeave}
                      >
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
                  <div 
                    className="relative"
                    ref={solarDropdownRef}
                    onMouseEnter={handleSolarMouseEnter}
                    onMouseLeave={handleSolarMouseLeave}
                  >
                    <Link 
                      to="/products/solar" 
                      className="block px-4 py-3 text-white hover:text-primary hover:bg-primary/10 transition-all duration-200 font-medium rounded-md mx-2 flex items-center justify-between"
                      onClick={handleLinkClick}
                    >
                      Solar Products
                      <ChevronDown className="ml-2 h-3 w-3 rotate-[-90deg]" />
                    </Link>
                    
                    {isSolarDropdownOpen && (
                      <div 
                        className="absolute top-0 left-full ml-1 w-48 bg-accent/80 backdrop-blur-md rounded-lg shadow-2xl py-2 z-50 border border-primary/20 animate-in fade-in-0 zoom-in-95 duration-200"
                        onMouseEnter={handleSolarMouseEnter}
                        onMouseLeave={handleSolarMouseLeave}
                      >
                        {solarSubcategories.map((subcategory, index) => (
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
                </div>
              )}
            </div>

            <Link 
              to="/media" 
              className={`transition-colors duration-200 relative group font-medium text-base py-2 ${
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
              className={`transition-colors duration-200 relative group font-medium text-base py-2 ${
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
          <div className="hidden lg:flex items-center flex-shrink-0 ml-6 lg:ml-8">
            <Link to="/contact">
              <Button className="bg-primary text-accent font-semibold px-6 xl:px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-primary whitespace-nowrap text-base font-medium">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center ml-2 sm:ml-4">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-primary transition-colors duration-200 p-1.5 sm:p-2 rounded-md hover:bg-primary/10 active:bg-primary/20"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-3 sm:pb-4 space-y-1.5 sm:space-y-2 bg-accent/80 border-t border-primary/20">
              <Link 
                to="/about" 
                className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                  isActivePath('/about') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-primary/5'
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
                    className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                      isActivePath('/new-initiatives') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    Our Initiatives
                  </Link>
                  <button
                    onClick={toggleInitiativesDropdown}
                    className="px-2 sm:px-3 py-2.5 sm:py-3 text-white hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
                  >
                    <ChevronDown className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 ${isInitiativesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isInitiativesDropdownOpen && (
                  <div className="pl-2 sm:pl-3 mt-1 space-y-1">
                    <button 
                      onClick={() => navigateToInitiativeSection('global-private-section')}
                      className="block w-full text-left px-3 sm:px-4 py-2 text-white hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 ml-2 sm:ml-3 text-sm sm:text-base"
                    >
                     IndoSup Global
                    </button>
                    <button 
                      onClick={() => navigateToInitiativeSection('global-assist-section')}
                      className="block w-full text-left px-3 sm:px-4 py-2 text-white hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 ml-2 sm:ml-3 text-sm sm:text-base"
                    >
                      IndoSup Assist
                    </button>
                  </div>
                )}
              </div>
              
              {/* Mobile Our Business Section */}
              <div>
                <div className="flex items-center">
                  <Link
                    to="/products/steel"
                    onClick={handleLinkClick}
                    className={`flex-1 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                      isBusinessActive() ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    Our Businesses
                  </Link>
                  <button
                    onClick={toggleBusinessDropdown}
                    className="px-2 sm:px-3 py-2.5 sm:py-3 text-white hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5"
                  >
                    <ChevronDown className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-200 ${isBusinessDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isBusinessDropdownOpen && (
                  <div className="pl-2 sm:pl-3 mt-1 space-y-1">
                    <Link 
                      to="/products/steel" 
                      className="block px-3 sm:px-4 py-2 text-white hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 ml-2 sm:ml-3 text-sm sm:text-base"
                      onClick={handleLinkClick}
                    >
                      Steel Products
                    </Link>
                    <Link 
                      to="/products/non-steel" 
                      className="block px-3 sm:px-4 py-2 text-white hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 ml-2 sm:ml-3 text-sm sm:text-base"
                      onClick={handleLinkClick}
                    >
                      Non-Steel Products
                    </Link>
                    <button 
                      onClick={() => navigateToBusinessSection('solar-section')}
                      className="block w-full text-left px-3 sm:px-4 py-2 text-white hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 ml-2 sm:ml-3 text-sm sm:text-base"
                    >
                      Solar Products
                    </button>
                  </div>
                )}
              </div>

              <Link 
                to="/media" 
                className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                  isActivePath('/media') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-primary/5'
                }`}
                onClick={handleLinkClick}
              >
                Media
              </Link>
              <Link 
                to="/careers" 
                className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base ${
                  isActivePath('/careers') ? 'text-primary bg-primary/10' : 'text-white hover:text-primary hover:bg-primary/5'
                }`}
                onClick={handleLinkClick}
              >
                Careers
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="px-3 sm:px-4 py-3 sm:py-4 border-t border-primary/20 mt-2 sm:mt-3">
                <Link to="/contact">
                  <Button className="w-full bg-primary text-accent font-semibold py-2.5 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-primary text-sm sm:text-base">
                    Contact Us
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