import { Link } from 'react-router-dom';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  actionButton = null,
  isHighlighted = false,
  category = ""
}) => {
  const handleWhatsAppClick = (message) => {
    const url = `https://wa.me/919922244479?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col ${
      isHighlighted ? 'ring-2 ring-gold-400 shadow-gold-200' : ''
    }`}>
      {/* Category Badge */}
      {category && (
        <div className="inline-block bg-navy-100 text-navy-700 text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
          {category}
        </div>
      )}

      {/* Icon */}
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
        isHighlighted ? 'bg-gold-100' : 'bg-navy-100'
      }`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-3 ${
        isHighlighted ? 'text-gold-700' : 'text-navy-900'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 flex-grow">
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <svg className="w-4 h-4 text-gold-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* Action Button */}
      {actionButton && (
        <div className="mt-auto">
          {actionButton.type === 'whatsapp' ? (
            <button
              onClick={() => handleWhatsAppClick(actionButton.message)}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>{actionButton.text}</span>
            </button>
          ) : actionButton.type === 'link' ? (
            <Link
              to={actionButton.href}
              className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                isHighlighted 
                  ? 'bg-gold-500 hover:bg-gold-600 text-white' 
                  : 'bg-navy-900 hover:bg-navy-800 text-white'
              }`}
            >
              {actionButton.icon && <span className="text-lg">{actionButton.icon}</span>}
              <span>{actionButton.text}</span>
            </Link>
          ) : (
            <button
              onClick={actionButton.onClick}
              className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                isHighlighted 
                  ? 'bg-gold-500 hover:bg-gold-600 text-white' 
                  : 'bg-navy-900 hover:bg-navy-800 text-white'
              }`}
            >
              {actionButton.icon && <span className="text-lg">{actionButton.icon}</span>}
              <span>{actionButton.text}</span>
            </button>
          )}
        </div>
      )}

      {/* Default Learn More Link if no action button */}
      {!actionButton && (
        <div className="mt-auto">
          <Link
            to="/contact"
            className="inline-block bg-navy-900 hover:bg-navy-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 w-full text-center"
          >
            Learn More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
