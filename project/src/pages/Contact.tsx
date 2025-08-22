import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Visit us today and experience the authentic taste of India
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Address</h3>
              <p className="text-gray-700">
           FONTEINSTRAAT 123, 3000 LEUVEN, BELGIUM
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Phone</h3>
              <p className="text-gray-700">
              +32 470 65 24 89
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Email</h3>
              <p className="text-gray-700">
           info@7hillsrestaurant.com<br />
              
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-black" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-2">Hours</h3>
               <div className="text-center">
          
            <div className="space-y-2">
          
              <div className="flex justify-between">
                <span>Monday:</span>
                <span>11:30 – 14:30 & 18:00 – 22:30</span>
              </div>
                 <div className="flex justify-between">
                <span>Tuesday:</span>
                <span>Closed</span>
              </div>
              
              <div className="flex justify-between">
                <span>Wednesday - Sunday:</span>
                <span>11:30 – 14:30 & 18:00 – 22:30</span>
              </div>
          
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-900 mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.264974067811!2d4.688909089033369!3d50.88180599865099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c160dc2ae1fbd3%3A0xbbcdb096e8b061c9!2sFonteinstraat%20123%2C%203000%20Leuven%2C%20Belgium!5e0!3m2!1sen!2sin!4v1755855345567!5m2!1sen!2sin"   width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-4">Make a Reservation</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 mb-8">
            Call us or visit in person to reserve your table for an unforgettable dining experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5551232877"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
            <a
              href="mailto:reservations@7hillsindian.com"
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;