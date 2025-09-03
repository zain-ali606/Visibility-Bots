import React, { useState, useEffect } from "react";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/", active: true },
    {
      name: "Solutions",
      href: "/solutions",
      dropdown: [
        { name: "Smart Factory", href: "/solutions/SmartFactory" },
        { name: "Smart City", href: "/Solutions/SmartCity" },
        { name: "Smart Agriculture", href: "/Solutions/SmartAgriculture" },
        { name: "Smart Buildings", href: "/smart-buildings" },
      ]
    },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Embedded System Design", href: "/embedded-system-design" },
        { name: "Firmware Development", href: "/firmware-development" },
        { name: "PCB Design", href: "/pcb-design" },
        { name: "Industrial Automation and PLCs", href: "/industrial-automation-and-plcs" },
      ]
    },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Smart Energy Meter", href: "/smart-energy-meter" },
        { name: "Energy Visibility Box", href: "/energy-visibility-box" },
        { name: "AQI Device", href: "/aqi-device" },
        { name: "Indoor Asset Tracking", href: "/indoor-asset-tracking" },
      ]
    },
    {
      name: "Company",
      href: "#",
      dropdown: [
        { name: "About Us", href: "/about" },
        { name: "Blog", href: "/blog" },
        { name: "Career", href: "/career" },
        { name: "Contact", href: "/contact" },
      ]
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileDropdown = (index) => {
    setMobileOpenDropdown(mobileOpenDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileOpenDropdown(null);
  };

  return (
    <>
      {/* Fixed navbar with glass morphism */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-white/20' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo with animation */}
            <div className="flex-shrink-0 group">
              <a 
                href="/" 
                className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img
                    src="https://visibilitybots.com/wp-content/uploads/2024/11/logo.png"
                    alt="Visibility Bots"
                    className="h-8 lg:h-12 w-auto transition-all duration-300 group-hover:brightness-110"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='10' y='25' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%236366f1'%3EVisibility Bots%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div 
              className="hidden lg:flex items-center space-x-1"
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1 relative overflow-hidden ${
                      item.active
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-white/80'
                    }`}
                    onClick={item.dropdown ? (e) => {
                      e.preventDefault();
                      toggleDropdown(index);
                    } : undefined}
                    onMouseEnter={() => item.dropdown && setOpenDropdown(index)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {item.dropdown && (
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                  </a>

                  {/* Desktop Dropdown Menu */}
                  {item.dropdown && (
                    <div 
                      className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-300 ${
                        openDropdown === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
                      }`}
                      onMouseEnter={() => setOpenDropdown(index)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                    
                      <div className="p-2">
                        {item.dropdown.map((dropdownItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-lg transition-all duration-200 relative overflow-hidden group"
                            style={{ animationDelay: `${dropIndex * 50}ms` }}
                          >
                            <span className="relative z-10">{dropdownItem.name}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="/contact"
                className="relative px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 group overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>

            {/* Mobile Menu Button and CTA */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Mobile CTA */}
              <a
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Contact
              </a>
              
              {/* Hamburger Menu */}
              <button
                onClick={toggleMobileMenu}
                className="relative w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white group"
                aria-label="Toggle mobile menu"
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center space-y-1.5">
                  <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} onClick={toggleMobileMenu}></div>

        {/* Mobile Menu Panel */}
        <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-lg shadow-2xl transform transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
            <img
              src="https://visibilitybots.com/wp-content/uploads/2024/11/logo.png"
              alt="Visibility Bots"
              className="h-8 w-auto"
              onError={(e) => {
                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='40' viewBox='0 0 120 40'%3E%3Ctext x='10' y='25' font-family='Arial, sans-serif' font-size='16' font-weight='bold' fill='%236366f1'%3EVisibility Bots%3C/text%3E%3C/svg%3E";
              }}
            />
            <button
              onClick={toggleMobileMenu}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="p-6 space-y-2 overflow-y-auto h-full pb-32">
            {navigationItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className={`flex-1 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex items-center relative overflow-hidden ${
                      item.active
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50/50'
                    }`}
                    onClick={!item.dropdown ? toggleMobileMenu : (e) => e.preventDefault()}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                  </a>
                  
                  {item.dropdown && (
                    <button
                      onClick={() => toggleMobileDropdown(index)}
                      className="ml-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <svg 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          mobileOpenDropdown === index ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.dropdown && (
                  <div className={`overflow-hidden transition-all duration-500 ${
                    mobileOpenDropdown === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="ml-4 space-y-1 border-l-2 border-indigo-100 pl-4">
                      {item.dropdown.map((dropdownItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-all duration-200 relative overflow-hidden group"
                          onClick={toggleMobileMenu}
                          style={{ animationDelay: `${(index * 100) + (dropIndex * 50)}ms` }}
                        >
                          <span className="relative z-10">{dropdownItem.name}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-blue-500/5 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA Button */}
            <div className="pt-6 mt-6 border-t border-gray-200/50">
              <a
                href="/contact"
                className="block w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold text-center rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-1 relative overflow-hidden group"
                onClick={toggleMobileMenu}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-8 text-center">
              <p className="text-xs text-gray-500">© 2024 Visibility Bots</p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
          }
        }
        
        .mobile-menu-enter {
          animation: slideInFromRight 0.3s ease-out;
        }
        
        .dropdown-enter {
          animation: fadeInUp 0.3s ease-out;
        }
        
        .nav-item-enter {
          animation: slideInFromLeft 0.5s ease-out;
        }
        
        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;