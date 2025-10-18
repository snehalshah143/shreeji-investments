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
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
      category: "Share & Demat"
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
      icon: null,
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
      icon: null,
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
      icon: null,
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
      icon: null,
      category: "Insurance"
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
      <section className="py-8 bg-white">
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
                isHighlighted={false} // Remove highlighting for uniformity
              />
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Services */}
      <section className="py-4">
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
                isHighlighted={false} // Remove highlighting for uniformity
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
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

      {/* CTA Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Take the first step towards your financial goals with our professional services.
          </p>
          <Link
            to="/contact"
            className="bg-navy-900 hover:bg-navy-800 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;
