const PartnerLogos = () => {
  const partners = [
    {
      name: "Angel One",
      category: "Broker",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
          <span className="text-navy-900 font-bold text-lg">Angel One</span>
        </div>
      )
    },
    {
      name: "Tata AIG",
      category: "Insurance",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
          <span className="text-navy-900 font-bold text-sm">Tata AIG</span>
        </div>
      )
    },
    {
      name: "Tata AIA",
      category: "Insurance",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
          <span className="text-navy-900 font-bold text-sm">Tata AIA</span>
        </div>
      )
    },
    {
      name: "HDFC Ergo",
      category: "Insurance",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
          <span className="text-navy-900 font-bold text-sm">HDFC Ergo</span>
        </div>
      )
    },
    {
      name: "ICICI Lombard",
      category: "Insurance",
      logo: (
        <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center shadow-md">
          <span className="text-navy-900 font-bold text-xs">ICICI Lombard</span>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Our Trusted Partners</h3>
          <p className="text-gray-600 text-sm">Leading financial institutions we work with</p>
        </div>
        
        {/* Running Strip */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                {partner.logo}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
