import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Investment Planning",
      description: "Comprehensive investment strategies tailored to your financial goals, risk tolerance, and time horizon.",
      features: [
        "Portfolio diversification",
        "Risk assessment",
        "Goal-based planning",
        "Regular portfolio review"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Retirement Planning",
      description: "Secure your future with our expert retirement planning services designed to ensure financial independence.",
      features: [
        "Retirement corpus calculation",
        "Pension planning",
        "Tax-efficient strategies",
        "Regular monitoring"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Tax Planning",
      description: "Optimize your tax liability with strategic planning and investment in tax-saving instruments.",
      features: [
        "Tax-saving investments",
        "Section 80C optimization",
        "Capital gains planning",
        "Annual tax review"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Insurance Planning",
      description: "Protect your family's future with comprehensive insurance solutions tailored to your needs.",
      features: [
        "Life insurance planning",
        "Health insurance review",
        "Term vs whole life analysis",
        "Coverage optimization"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Mutual Fund Advisory",
      description: "Expert guidance on mutual fund investments with regular monitoring and rebalancing.",
      features: [
        "Fund selection & analysis",
        "SIP planning",
        "Performance monitoring",
        "Rebalancing strategies"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Estate Planning",
      description: "Secure your legacy with proper estate planning and wealth transfer strategies.",
      features: [
        "Will preparation guidance",
        "Nominee planning",
        "Wealth transfer strategies",
        "Legal documentation support"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
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
              your financial goals and secure your future.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8"
              >
                <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mb-6 text-gold-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
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
