import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Removed this import
import axios from 'axios';
import { ArrowRight } from 'lucide-react';

// --- Type Definitions for API Data ---
interface Category {
  _id: string;
  id_name: string;
  name: string;
  image: {
    url: string;
  };
}

interface FeaturedDish {
  _id: string;
  name: string;
  price: number;
  image: {
    url: string;
  };
  // The category object is populated from the backend
  category: {
    id_name: string;
  };
}

// --- Configuration ---
const API_URL = import.meta.env.VITE_MENU_API_URL;

const Home: React.FC = () => {
  // --- State for Dynamic Data ---
  const [featuredDishes, setFeaturedDishes] = useState<FeaturedDish[]>([]);
  const [menuCategories, setMenuCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch featured dishes and categories concurrently
        const [featuredResponse, categoriesResponse] = await Promise.all([
          axios.get<FeaturedDish[]>(`${API_URL}/featured`),
          axios.get<Category[]>(`${API_URL}/categories`)
        ]);


        console.log(featuredResponse.data)
        setFeaturedDishes(featuredResponse.data);
      
        
        // Display a curated list of categories, or all if fewer than 8
        const allCategories = categoriesResponse.data;
        console.log(allCategories,"aaa")
        const preferredCategories = ["h"];
        const filteredCategories = allCategories.filter(c => preferredCategories.includes(c.id_name));
        setMenuCategories(filteredCategories.length > 0 ? filteredCategories : allCategories.slice(0, 12));

      } catch (err) {
        console.error("Failed to fetch homepage data:", err);
        setError("Could not load restaurant data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []); // Empty dependency array ensures this runs only once on mount
console.log(featuredDishes,menuCategories)

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
               <div className="flex flex-col gap-4 sm:flex-row">
                 <a
                   href="/menu"
                   className="flex items-center justify-center px-8 py-4 text-lg font-bold text-red-900 transition-all duration-300 transform bg-white rounded-full hover:bg-orange-50 hover:scale-105 group"
                 >
                   Explore Menu
                   <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                 </a>
                 <a
                   href="tel:+32470652489"
                   className="flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-red-900 hover:scale-105"
                 >
                   Call Now
                 </a>
               </div>
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
          
          {loading && <p className="text-center">Loading featured dishes...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          
          {!loading && !error && (
            <div className="grid gap-8 md:grid-cols-3">
              {featuredDishes.map((dish) => (
                <div
                  key={dish._id}
                  className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dish.image.url}
                      alt={dish.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute px-3 py-1 font-bold text-black bg-yellow-500 rounded-full top-4 right-4">
                      €{dish.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3 text-xl font-bold text-red-900">{dish.name}</h4>
                    <a
                      href={`/menu?category=${dish.category.id_name}`}
                      className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-700"
                    >
                     Explore Our Full Menu <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Menu Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-red-900 md:text-5xl">Menu Categories</h2>
            <div className="w-24 h-1 mx-auto mb-6 bg-yellow-500"></div>
            <p className="max-w-3xl mx-auto text-xl text-gray-700">
              Explore our diverse menu categories, each offering authentic Indian flavors
            </p>
          </div>

          {loading && <p className="text-center">Loading categories...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {menuCategories.map((category) => (
                <a
                  key={category._id}
                  href={`/menu?category=${category.id_name}`}
                  className="relative flex items-center justify-center p-4 overflow-hidden transition-all duration-300 transform bg-red-800 rounded-lg shadow-lg group aspect-square hover:shadow-2xl hover:scale-105"
                >
                  <div className="absolute inset-0 transition-transform duration-300 transform group-hover:scale-110">
                    <img
                      src={category.image.url}
                      alt={category.name}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="absolute inset-0 transition-colors duration-300 bg-black/40 group-hover:bg-black/50"></div>
                  <h3 className="relative px-4 text-xl font-bold text-center text-white">{category.name}</h3>
                </a>
              ))}
            </div>
          )}
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
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black transition-all duration-300 transform bg-yellow-500 rounded-full hover:bg-yellow-400 hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-yellow-500 transition-all duration-300 transform border-2 border-yellow-500 rounded-full hover:bg-yellow-500 hover:text-black hover:scale-105"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;