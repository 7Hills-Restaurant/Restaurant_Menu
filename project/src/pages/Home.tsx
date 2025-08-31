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
      image: "/menu/ChickenBiryani.webp",
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
     <section className="relative flex items-center min-h-screen bg-red-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute w-20 h-20 border-2 border-white rounded-full top-10 left-10 opacity-30"></div>
          <div className="absolute w-32 h-32 border-2 border-white rounded-full bottom-20 right-20 opacity-20"></div>
          <div className="absolute w-16 h-16 border-2 border-yellow-300 rounded-full opacity-25 top-1/2 left-1/4"></div>
        </div>

        <div className="relative px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white">
              <h1 className="mb-6 text-5xl font-bold lg:text-6xl animate-fade-in">
                Welcome to
                <span className="block text-yellow-300">7 Hills</span>
                <span className="text-3xl lg:text-4xl">Indian Restaurant</span>
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-orange-100">
                Experience the authentic flavors of India in the heart of Leuven. 
                From aromatic spices to traditional recipes, we bring you a culinary 
                journey that celebrates the rich heritage of Indian cuisine.
              </p>
              {/* <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/menu"
                  className="flex items-center justify-center px-8 py-4 text-lg font-bold text-orange-600 transition-all duration-300 transform bg-white rounded-full hover:bg-orange-50 hover:scale-105 group"
                >
                  Explore Menu
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href="tel:+32470652489"
                  className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-orange-600 hover:scale-105"
                >
                  Call Now
                </a>
              </div> */}
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="p-8 transition-transform duration-500 transform bg-white shadow-2xl rounded-3xl rotate-3 hover:rotate-0">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Indian cuisine"
                  className="object-cover w-full h-80 rounded-2xl"
                />
                <div className="absolute px-4 py-2 font-bold text-orange-800 bg-yellow-400 rounded-full shadow-lg -top-4 -right-4">
                  Authentic Indian
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <div className="flex justify-center w-6 h-10 border-2 border-white rounded-full">
            <div className="w-1 h-3 mt-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-red-900 md:text-5xl">Featured Dishes</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-yellow-500"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-700">
              Discover our most popular dishes that showcase the authentic flavors of India
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute px-3 py-1 font-bold text-black bg-yellow-500 rounded-full top-4 right-4">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-3 text-xl font-bold text-red-900">{dish.name}</h4>
                  <p className="mb-4 leading-relaxed text-gray-700">{dish.description}</p>
                  <Link
                    to={`/${dish.category}`}
                    className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-700"
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-red-900 md:text-5xl">Menu Categories</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-yellow-500"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-700">
              Explore our diverse menu categories, each offering authentic Indian flavors
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {menuCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="relative overflow-hidden transition-all duration-300 transform rounded-lg shadow-lg group hover:shadow-2xl hover:scale-105"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-colors duration-300 bg-black/40 group-hover:bg-black/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="px-4 text-xl font-bold text-center text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-white bg-red-900">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Ready to Experience Authentic Indian Cuisine?</h2>
          <p className="mb-8 text-xl text-gray-200">
            Visit us today and embark on a culinary journey through the diverse flavors of India
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black transition-all duration-300 transform bg-yellow-500 rounded-full hover:bg-yellow-400 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-yellow-500 transition-all duration-300 transform border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black hover:scale-105"
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