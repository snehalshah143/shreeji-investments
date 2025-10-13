const PartnerLogos = () => {
  const partners = [
    // Brokers
    {
      name: "Angel One",
      category: "Broker",
      logoPath: "https://www.angelone.in/sites/default/files/2023-08/angel-one-logo.svg"
    },
    // Insurance Companies
    {
      name: "Tata AIG",
      category: "Insurance",
      logoPath: "https://www.tataaig.com/sites/default/files/2021-09/tata-aig-logo.svg"
    },
    {
      name: "Tata AIA",
      category: "Insurance",
      logoPath: "https://www.tataaia.com/sites/default/files/2021-09/tata-aia-logo.svg"
    },
    {
      name: "HDFC Ergo",
      category: "Insurance",
      logoPath: "https://www.hdfcergo.com/sites/default/files/2021-09/hdfc-ergo-logo.svg"
    },
    {
      name: "ICICI Lombard",
      category: "Insurance",
      logoPath: "https://www.icicilombard.com/sites/default/files/2021-09/icici-lombard-logo.svg"
    },
    // AMC Companies
    {
      name: "SBI Mutual Fund",
      category: "AMC",
      logoPath: "https://www.sbimf.com/sites/default/files/2021-09/sbi-mutual-fund-logo.svg"
    },
    {
      name: "HDFC Mutual Fund",
      category: "AMC",
      logoPath: "https://www.hdfcfund.com/sites/default/files/2021-09/hdfc-mutual-fund-logo.svg"
    },
    {
      name: "ICICI Prudential",
      category: "AMC",
      logoPath: "https://www.icicipruamc.com/sites/default/files/2021-09/icici-prudential-logo.svg"
    },
    {
      name: "Axis Mutual Fund",
      category: "AMC",
      logoPath: "https://www.axismf.com/sites/default/files/2021-09/axis-mutual-fund-logo.svg"
    },
    {
      name: "Kotak Mutual Fund",
      category: "AMC",
      logoPath: "https://www.kotakmutual.com/sites/default/files/2021-09/kotak-mutual-fund-logo.svg"
    },
    {
      name: "Franklin Templeton",
      category: "AMC",
      logoPath: "https://www.franklintempletonindia.com/sites/default/files/2021-09/franklin-templeton-logo.svg"
    },
    {
      name: "DSP Mutual Fund",
      category: "AMC",
      logoPath: "https://www.dspim.com/sites/default/files/2021-09/dsp-mutual-fund-logo.svg"
    }
  ];

  return (
    <div className="bg-gray-100 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-navy-900 mb-2">Our Trusted Partners</h3>
          <p className="text-gray-600 text-sm">Leading brokers, insurance companies, and AMCs we work with</p>
        </div>
        
        {/* Running Strip */}
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div key={`first-${index}`} className="flex-shrink-0">
                <img
                  src={partner.logoPath}
                  alt={`${partner.name} logo`}
                  className="w-32 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-lg p-2 shadow-sm"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-32 h-16 bg-white rounded-lg shadow-sm items-center justify-center hidden"
                  style={{display: 'none'}}
                >
                  <span className="text-navy-900 font-bold text-xs text-center">{partner.name}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div key={`second-${index}`} className="flex-shrink-0">
                <img
                  src={partner.logoPath}
                  alt={`${partner.name} logo`}
                  className="w-32 h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-lg p-2 shadow-sm"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-32 h-16 bg-white rounded-lg shadow-sm items-center justify-center hidden"
                  style={{display: 'none'}}
                >
                  <span className="text-navy-900 font-bold text-xs text-center">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
