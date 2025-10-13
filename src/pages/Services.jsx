import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  // Financial & Investment Services
  const financialServices = [
    {
      title: "Personalized Financial Planning & Goal Setting",
      description: "Comprehensive financial planning tailored to your unique goals, risk tolerance, and life stage with expert guidance.",
      features: [
        "Goal-based financial planning",
        "Risk assessment & profiling",
        "Asset allocation strategies",
        "Regular portfolio review"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      category: "Financial & Investment"
    },
    {
      title: "PMS (Portfolio Management Services)",
      description: "Professional portfolio management services for high-net-worth individuals with personalized investment strategies.",
      features: [
        "Customized portfolio creation",
        "Active fund management",
        "Risk-adjusted returns",
        "Regular performance reporting"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      category: "Financial & Investment"
    },
    {
      title: "AIF (Alternative Investment Funds)",
      description: "Access to sophisticated alternative investment opportunities including private equity, real estate, and hedge funds.",
      features: [
        "Private equity investments",
        "Real estate funds",
        "Hedge fund strategies",
        "Diversified alternative assets"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      category: "Financial & Investment"
    },
    {
      title: "SIF (Special Investment Funds)",
      description: "Specialized investment funds designed for specific market opportunities and niche investment strategies.",
      features: [
        "Sector-specific funds",
        "Thematic investments",
        "Specialized strategies",
        "Expert fund management"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      category: "Financial & Investment"
    }
  ];

  // Share & Demat Services
  const dematServices = [
    {
      title: "IEPF Services",
      description: "Comprehensive Investor Education and Protection Fund services to help you recover unclaimed dividends and shares.",
      features: [
        "Unclaimed dividend recovery",
        "Share transfer assistance",
        "Documentation support",
        "Legal compliance guidance"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: "Share & Demat"
    },
    {
      title: "Physical Share Certificate Transfer & Transposition",
      description: "Expert assistance with physical share certificate transfers and transposition services for seamless ownership changes.",
      features: [
        "Certificate transfer processing",
        "Transposition services",
        "Document verification",
        "Regulatory compliance"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      category: "Share & Demat"
    },
    {
      title: "Dematerialization Services",
      description: "Convert your physical share certificates to electronic form for easy trading and management.",
      features: [
        "Physical to electronic conversion",
        "Demat account linking",
        "Certificate verification",
        "Process completion support"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      category: "Share & Demat",
      actionButton: {
        type: 'whatsapp',
        text: 'Open Demat Account',
        message: 'Hi! I am interested in opening a Demat account. Please provide me with the details and process.'
      }
    }
  ];

  // Insurance Services
  const insuranceServices = [
    {
      title: "Health Insurance",
      description: "Comprehensive health insurance solutions from leading providers including Tata AIG, HDFC Ergo, and ICICI Lombard.",
      features: [
        "Tata AIG health plans",
        "HDFC Ergo coverage",
        "ICICI Lombard policies",
        "Cashless treatment network"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      category: "Insurance"
    },
    {
      title: "General Insurance Products",
      description: "Wide range of general insurance products including motor, home, travel, and business insurance solutions.",
      features: [
        "Motor insurance",
        "Home insurance",
        "Travel insurance",
        "Business insurance"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
        </svg>
      ),
      category: "Insurance"
    },
    {
      title: "Life Insurance Products",
      description: "Comprehensive life insurance solutions to secure your family's financial future with various policy options.",
      features: [
        "Term life insurance",
        "Whole life policies",
        "Endowment plans",
        "ULIP products"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      category: "Insurance"
    },
    {
      title: "Children Plans",
      description: "Specialized insurance and investment plans designed to secure your children's education and future.",
      features: [
        "Education planning",
        "Child insurance plans",
        "Saving schemes",
        "Future security"
      ],
      icon: (
        <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      category: "Insurance",
      actionButton: {
        type: 'whatsapp',
        text: 'Buy Insurance',
        message: 'Hi! I am interested in purchasing insurance. Please provide me with the best options available.'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gold-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial advisory services designed to help you achieve 
              your financial goals and secure your future with professional expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Financial & Investment Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Financial & Investment Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional investment management and financial planning services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {financialServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                category={service.category}
                actionButton={service.actionButton}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Share & Demat Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Share & Demat Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete share and demat services for seamless investment management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dematServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                category={service.category}
                actionButton={service.actionButton}
                isHighlighted={index === 2} // Highlight the Demat Account service
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Insurance Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive insurance solutions from leading providers to protect what matters most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {insuranceServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                category={service.category}
                actionButton={service.actionButton}
                isHighlighted={index === 3} // Highlight the Buy Insurance service
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach to financial planning that ensures your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Consultation</h3>
              <p className="text-gray-600 text-sm">
                Initial meeting to understand your financial goals and current situation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Analysis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of your financial position and risk profile
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Development of personalized financial strategy and investment plan
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-navy-900 mb-2">Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Regular monitoring and adjustments to ensure optimal performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Action Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with our most popular services instantly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Open Demat Account */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Open Demat Account</h3>
              <p className="text-gray-600 mb-6">
                Start your investment journey with a professional demat account setup
              </p>
              <button
                onClick={() => {
                  const url = `https://wa.me/919922244479?text=${encodeURIComponent('Hi! I am interested in opening a Demat account. Please provide me with the details and process.')}`;
                  window.open(url, '_blank');
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Open Demat Account</span>
              </button>
            </div>

            {/* Buy Insurance */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Buy Insurance</h3>
              <p className="text-gray-600 mb-6">
                Protect your family and assets with comprehensive insurance solutions
              </p>
              <button
                onClick={() => {
                  const url = `https://wa.me/919922244479?text=${encodeURIComponent('Hi! I am interested in purchasing insurance. Please provide me with the best options available.')}`;
                  window.open(url, '_blank');
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>Buy Insurance</span>
              </button>
            </div>

            {/* Financial Planning */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center">
              <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Financial Planning</h3>
              <p className="text-gray-600 mb-6">
                Get personalized financial planning and investment strategies
              </p>
              <Link
                to="/contact"
                className="w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Get Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us help you choose 
            the right financial services for your needs.
          </p>
          <Link
            to="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
