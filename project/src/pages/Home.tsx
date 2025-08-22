import React from 'react';
import { Link } from 'react-router-dom';
// import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  const featuredDishes = [
    {
      name: "Butter Chicken",
      description: "Tender chicken in rich tomato and cream sauce",
      price: "€16.5",
      image: "/menu/ButterChicken.jpg",
      category: "menu"
    },
    {
      name: "Andhra Chicken Biryani",
      description: "Fragrant basmati rice with tender lamb and aromatic spices",
      price: "€19.5",
      image: "/menu/ChickenBiryani.jpg",
      category: "menu"
    },
    {
      name: "Masala Dosa",
      description: "Crispy crepe filled with spiced potato curry",
      price: "€12.5",
      image: "menu/MasalaDosa.jpg",
      category: "menu"
    }
  ];

  const menuCategories = [
    { name: "Starters", path: "/menu", image: "/menu/ChickenPakoda.jpg" },
    { name: "Idli & Dosa", path: "/menu", image: "/menu/CheesePlainDosa.jpg" },
    { name: "Chicken", path: "/menu", image: "/menu/ChickenKorma.jpg" },
    { name: "Lamb", path: "/menu", image: "/menu/LambKorma.jpg" },
    { name: "7 Hills Thali", path: "/menu", image: "/menu/Non-VegThal.jpeg" },
    { name: "Tandoori", path: "/menu", image: "/menu/ChickenTandoori.jpg" },
    { name: "Naan", path: "/menu", image: "/menu/GarlicNaan.jpg" },
    { name: "Biryani", path: "/menu", image: "/menu/ChickenBiryani.jpg" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
     <section className="relative bg-red-900 min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full opacity-30"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-yellow-300 rounded-full opacity-25"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Welcome to
                <span className="block text-yellow-300">7 Hills</span>
                <span className="text-3xl lg:text-4xl">Indian Restaurant</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Experience the authentic flavors of India in the heart of Leuven. 
                From aromatic spices to traditional recipes, we bring you a culinary 
                journey that celebrates the rich heritage of Indian cuisine.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/menu"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Explore Menu
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <a
                  href="tel:+32470652489"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Call Now
                </a>
              </div> */}
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Indian cuisine"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-orange-800 px-4 py-2 rounded-full font-bold shadow-lg">
                  Authentic Indian
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Featured Dishes</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover our most popular dishes that showcase the authentic flavors of India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-red-900 mb-3">{dish.name}</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">{dish.description}</p>
                  <Link
                    to={`/${dish.category}`}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                 Explore Our Full Menu 
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Menu Categories</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explore our diverse menu categories, each offering authentic Indian flavors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold text-center px-4">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Authentic Indian Cuisine?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Visit us today and embark on a culinary journey through the diverse flavors of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;