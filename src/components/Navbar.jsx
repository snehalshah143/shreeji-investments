import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 shadow-lg sticky top-0 z-50 border-b border-gold-500 relative overflow-hidden">
      {/* Financial Background Elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Candle Chart Pattern */}
        <div className="absolute top-2 left-8 w-16 h-12">
          <svg viewBox="0 0 64 48" className="w-full h-full">
            <rect x="8" y="20" width="4" height="16" fill="#10b981" opacity="0.3"/>
            <rect x="7" y="18" width="6" height="4" fill="#10b981" opacity="0.4"/>
            <rect x="7" y="36" width="6" height="4" fill="#10b981" opacity="0.4"/>
            <rect x="16" y="24" width="4" height="8" fill="#ef4444" opacity="0.3"/>
            <rect x="15" y="22" width="6" height="4" fill="#ef4444" opacity="0.4"/>
            <rect x="15" y="32" width="6" height="4" fill="#ef4444" opacity="0.4"/>
            <rect x="24" y="16" width="4" height="20" fill="#10b981" opacity="0.3"/>
            <rect x="23" y="14" width="6" height="4" fill="#10b981" opacity="0.4"/>
            <rect x="23" y="36" width="6" height="4" fill="#10b981" opacity="0.4"/>
            <rect x="32" y="28" width="4" height="4" fill="#ef4444" opacity="0.3"/>
            <rect x="31" y="26" width="6" height="4" fill="#ef4444" opacity="0.4"/>
            <rect x="31" y="32" width="6" height="4" fill="#ef4444" opacity="0.4"/>
          </svg>
        </div>
        
        {/* Graph Lines */}
        <div className="absolute top-4 right-20 w-24 h-8">
          <svg viewBox="0 0 96 32" className="w-full h-full">
            <path d="M4 28 L16 20 L28 24 L40 12 L52 16 L64 8 L76 4 L88 12" 
                  stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.4"/>
            <circle cx="4" cy="28" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="16" cy="20" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="28" cy="24" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="40" cy="12" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="52" cy="16" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="64" cy="8" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="76" cy="4" r="1.5" fill="#3b82f6" opacity="0.5"/>
            <circle cx="88" cy="12" r="1.5" fill="#3b82f6" opacity="0.5"/>
          </svg>
        </div>
        
        {/* Financial Icons */}
        <div className="absolute top-3 right-8 w-6 h-6">
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#f59e0b" opacity="0.2"/>
            <path d="M2 17L12 22L22 17" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M2 12L12 17L22 12" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Trend Line */}
        <div className="absolute bottom-2 left-1/4 w-20 h-4">
          <svg viewBox="0 0 80 16" className="w-full h-full">
            <path d="M4 12 L20 8 L36 4 L52 6 L68 2" 
                  stroke="#10b981" strokeWidth="1" fill="none" opacity="0.3"/>
            <path d="M4 12 L20 8 L36 4 L52 6 L68 2" 
                  stroke="#10b981" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="2,2"/>
          </svg>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Custom Logo - Replace with your converted SVG/PNG */}
                <img 
                  src="/images/logo.svg" 
                  alt="Shreeji Investments Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="text-white font-bold text-xl hidden">S</span>
              </div>
              <span className="ml-3 text-3xl md:text-4xl lg:text-5xl font-bold text-white group-hover:text-gold-300 transition-colors duration-200 logo-text">
                Shreeji Investments
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gold-500 text-navy-900 shadow-lg'
                      : 'text-white hover:bg-gold-500 hover:text-navy-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold-300 hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-1 bg-navy-800 border-t border-gold-500 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-gold-500 text-navy-900 shadow-md'
                  : 'text-white hover:bg-gold-500 hover:text-navy-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
