import { useState, useEffect, useRef } from 'react';

const ActionButtons = () => {
  const [isInsuranceDropdownOpen, setIsInsuranceDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsInsuranceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDematAccountClick = () => {
    // You can provide the link here when ready
    const dematLink = '#'; // Replace with actual link
    if (dematLink !== '#') {
      window.open(dematLink, '_blank');
    } else {
      // Fallback to WhatsApp for now
      const message = 'Hi! I am interested in opening a Demat account. Please provide me with the details and process.';
      const url = `https://wa.me/919922244479?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
  };

  const handleInsuranceClick = (insuranceType) => {
    const messages = {
      life: 'Hi! I am interested in Life Insurance. Please provide me with the best Life Insurance options available.',
      health: 'Hi! I am interested in Health Insurance. Please provide me with the best Health Insurance options available.',
      general: 'Hi! I am interested in General Insurance. Please provide me with the best General Insurance options available.',
      motor: 'Hi! I am interested in Motor Insurance. Please provide me with the best Motor Insurance options available.'
    };

    const url = `https://wa.me/919922244479?text=${encodeURIComponent(messages[insuranceType])}`;
    window.open(url, '_blank');
    setIsInsuranceDropdownOpen(false);
  };

  const handleMutualFundsClick = () => {
    const message = 'Hi! I am interested in Mutual Funds investment. Please provide me with the best Mutual Fund options available and help me choose the right funds for my investment goals.';
    const url = `https://wa.me/919922244479?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInvestmentIdeasClick = () => {
    const message = 'Hi! I am looking for investment ideas and strategies. Please provide me with expert investment recommendations and market insights to help me make informed investment decisions.';
    const url = `https://wa.me/919922244479?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-navy-900 py-3 md:py-4 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 justify-center items-center">
          <style jsx>{`
            @media (max-width: 640px) {
              .mobile-full-width {
                width: 100% !important;
                min-width: 100% !important;
                max-width: 100% !important;
              }
            }
          `}</style>
      {/* Open Demat Account Button */}
      <button
        onClick={handleDematAccountClick}
        className="mobile-full-width bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 group text-xs sm:text-sm w-full sm:w-auto"
      >
        <span>OPEN DEMAT ACCOUNT</span>
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Buy Insurance Button with Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsInsuranceDropdownOpen(!isInsuranceDropdownOpen)}
          className="mobile-full-width bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 group text-xs sm:text-sm w-full sm:w-auto"
        >
          <span>BUY INSURANCE</span>
          <svg 
            className={`w-5 h-5 transition-transform duration-200 ${isInsuranceDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Insurance Options Dropdown */}
        {isInsuranceDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
            <div className="py-2">
              <button
                onClick={() => handleInsuranceClick('life')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="font-medium">Life Insurance</span>
              </button>
              
              <button
                onClick={() => handleInsuranceClick('health')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium">Health Insurance</span>
              </button>
              
              <button
                onClick={() => handleInsuranceClick('general')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  </svg>
                </div>
                <span className="font-medium">General Insurance</span>
              </button>
              
              <button
                onClick={() => handleInsuranceClick('motor')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium">Motor Insurance</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Buy Mutual Funds Button */}
      <button
        onClick={handleMutualFundsClick}
        className="mobile-full-width bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 group text-xs sm:text-sm w-full sm:w-auto"
      >
        <span>BUY MUTUAL FUNDS</span>
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Ideas To Invest Button */}
      <button
        onClick={handleInvestmentIdeasClick}
        className="mobile-full-width bg-gold-500 hover:bg-gold-600 text-white font-semibold py-2.5 px-3 sm:py-3 sm:px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-1 sm:space-x-2 group text-xs sm:text-sm w-full sm:w-auto"
      >
        <span>IDEAS TO INVEST</span>
        <svg 
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
