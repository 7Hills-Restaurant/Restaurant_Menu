import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { Search, ChevronDown, Leaf, UtensilsCrossed } from 'lucide-react';

// --- Type Definitions for API Data ---
// It's a best practice to define the shape of your data.

interface Category {
  _id: string;
  id_name: string;
  name: string;
  subcategories: string[];
}

interface MenuItem {
  _id: string;
  name: string;
  price: number;
  category: Category; // The category is a populated object
  subcategory?: string;
  isVeg: boolean;
  image: {
    url: string;
  };
}

// --- Configuration ---
const API_URL = import.meta.env.VITE_MENU_API_URL;


const Menu: React.FC = () => {
  // --- State with Type Annotations ---
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuCategories, setMenuCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // --- State for Filtering and Sorting ---
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price-low' | 'price-high'>('name');
  
  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [itemsResponse, categoriesResponse] = await Promise.all([
          axios.get<MenuItem[]>(`${API_URL}/items`),
          axios.get<Category[]>(`${API_URL}/categories`)
        ]);

        setMenuItems(itemsResponse.data);
        setMenuCategories(categoriesResponse.data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch menu data:", err);
        setError("Sorry, we couldn't load the menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Filtering and Sorting Logic ---
  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category?.id_name === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
      const matchesDietary = dietaryFilter === 'all' || 
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesDietary;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        default: return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedSubcategory, dietaryFilter, sortBy, menuItems]);

  // --- Helper Function to get Subcategories ---
  const getSubcategories = (): string[] => {
    if (selectedCategory === 'all') return [];
    const category = menuCategories.find(cat => cat.id_name === selectedCategory);
    return category?.subcategories || [];
  };

  // --- Render Loading State ---
  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading menu...</div>;
  }

  // --- Render Error State ---
  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
  }

  // --- Main Render ---
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      {/* Header Section */}
      <div className="py-12 text-white bg-red-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Menu</h1>
            <div className="w-24 h-1 mx-auto mb-6 bg-yellow-500"></div>
            <p className="text-xl text-gray-200">
              Discover authentic Indian flavors crafted with traditional recipes
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Search and Filter Section */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-lg">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" size={20} />
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory('all');
                  }}
                  className="px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {menuCategories.map(category => (
                    <option key={category._id} value={category.id_name}>{category.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2" size={16} />
              </div>

              {/* Subcategory Filter */}
              {getSubcategories().length > 0 && (
                <div className="relative">
                  <select
                    value={selectedSubcategory}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedSubcategory(e.target.value)}
                    className="px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="all">All Subcategories</option>
                    {getSubcategories().map(subcategory => (
                      <option key={subcategory} value={subcategory}>{subcategory}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2" size={16} />
                </div>
              )}

              {/* Dietary Filter */}
              <div className="flex p-1 bg-gray-100 rounded-lg">
                <button onClick={() => setDietaryFilter('all')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${ dietaryFilter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900' }`}> All </button>
                <button onClick={() => setDietaryFilter('veg')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${ dietaryFilter === 'veg' ? 'bg-white text-green-600 shadow-sm' : 'text-gray-600 hover:text-gray-900' }`}><Leaf size={16} /> Veg </button>
                <button onClick={() => setDietaryFilter('non-veg')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${ dietaryFilter === 'non-veg' ? 'bg-white text-red-600 shadow-sm' : 'text-gray-600 hover:text-gray-900' }`}><UtensilsCrossed size={16} /> Non-Veg </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select value={sortBy} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as typeof sortBy)} className="px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2" size={16} />
            </div>
          </div>
          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredAndSortedItems.length} dish{filteredAndSortedItems.length !== 1 ? 'es' : ''}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {filteredAndSortedItems.length === 0 ? (
          <div className="py-12 text-center">
            <Search size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="mb-2 text-xl font-semibold text-gray-600">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAndSortedItems.map((item) => (
              <div key={item._id} className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl group">
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image.url} alt={item.name} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute px-2 py-1 text-sm font-bold text-black bg-yellow-500 rounded-full top-2 right-2">
                    €{item.price.toFixed(2)}
                  </div>
                  <div className="absolute top-2 left-2">
                    {item.isVeg ? (
                      <div className="p-1 bg-green-500 rounded-full"><Leaf size={14} className="text-white" /></div>
                    ) : (
                      <div className="p-1 bg-red-500 rounded-full"><UtensilsCrossed size={14} className="text-white" /></div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold text-red-900 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      {item.category?.name}
                    </span>
                  </div>
                  {item.subcategory && (
                    <span className="block mb-3 text-sm text-gray-500">{item.subcategory}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
