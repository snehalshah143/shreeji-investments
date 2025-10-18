import { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Vikram Joshi",
      role: "Small Business Owner",
      location: "Indapur, Pune",
      content: "What impressed me most about Shreeji Investments is their after-service support. Even after 2 years of working with them, they still call me monthly to review my portfolio and suggest adjustments. They remember my family situation and always ask about my business. This personalized attention makes all the difference.",
      rating: 5
    },
    {
      name: "Meera Agarwal",
      role: "Government Employee",
      location: "Pune",
      content: "I was hesitant about investing initially, but Shreeji Investments took time to understand my risk appetite and financial goals. They didn't push any products on me. Instead, they created a simple SIP plan that fits my salary. Their regular follow-ups and market updates via WhatsApp make me feel secure about my investments.",
      rating: 5
    },
    {
      name: "Dr. Ramesh Patil",
      role: "Medical Practitioner",
      location: "Indapur, Pune",
      content: "The personalized service at Shreeji Investments is exceptional. They understand that as a doctor, my income is irregular. They've created a flexible investment plan that works with my schedule. When I had a medical emergency last year, they helped me liquidate some investments quickly without any hassle. Their support during difficult times is remarkable.",
      rating: 5
    },
    {
      name: "Kavita Deshmukh",
      role: "School Teacher",
      location: "Pune",
      content: "I've been with Shreeji Investments for 3 years now. What I love most is how they treat me like family. They remember my daughter's birthday and even suggested a small investment for her future. Their after-service is outstanding - they explain everything in simple terms and never make me feel ignorant about financial matters.",
      rating: 5
    },
    {
      name: "Suresh Kulkarni",
      role: "Retired Bank Manager",
      location: "Indapur, Pune",
      content: "After retiring from banking, I thought I knew everything about investments. But Shreeji Investments showed me new perspectives and better strategies. Their personalized approach considers my age and risk tolerance perfectly. They call me every quarter to discuss market conditions and adjust my portfolio accordingly. This level of care is rare.",
      rating: 5
    },
    {
      name: "Anita Pawar",
      role: "Homemaker",
      location: "Pune",
      content: "As a homemaker, I was completely new to investments. Shreeji Investments didn't rush me into anything. They spent 3 meetings just understanding my family's needs and my comfort level. They created a simple plan that I can understand and manage. Their regular WhatsApp updates and personal calls make me feel confident about my family's financial future.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gold-400">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about their experience 
              with Shreeji Investments.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="text-center">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-gold-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Client Info */}
              <div className="text-center">
                <div className="font-semibold text-navy-900 text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
                <div className="text-gray-500 text-sm">
                  {testimonials[currentTestimonial].location}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial ? 'bg-gold-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Trusted by Many
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Assets Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the same level of professional service and expert guidance 
            that has made our clients successful.
          </p>
          <a
            href="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
