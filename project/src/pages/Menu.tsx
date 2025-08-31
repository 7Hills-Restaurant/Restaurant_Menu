import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Leaf, UtensilsCrossed } from 'lucide-react';

// Menu data structure
const menuCategories = [
  {
    id: "starters",
    name: "Starters",
    subcategories: ["Vegetarian", "Non Vegetarian"]
  },
  {
    id: "idli-dosa",
    name: "Idli & Dosa Corner",
    subcategories: ["Dosa", "Idli", "Vada","Puri"]
  },
  {
    id: "vegetarian",
    name: "Vegetarian"
  },
  {
    id: "chicken",
    name: "Chicken"
  },
  {
    id: "lamb",
    name: "Lamb"
  },
  {
    id: "7hillsthali",
    name:"7 Hills Thali",
    subcategories:["Vegetarian Thali","Non Vegetarian Thali"]

  },
  {
    id:"tandoori",
    name:"Tandoori Specials"
  },
  {
    id:"soups",
    name:"Soups"
  },
  {
    id:"rice",
    name: "Rice"
  },
  {
    id: "naan",
    name: "Naan" 
  },
  {
    id: "biryani",
    name: "Biryani"
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks",
    subcategories: ["Cool Drinks", "Masala", "Water", "Lassi", "Lemonade"]
  },
  {
    id: "alcohol",
    name: "Alcohol Drinks",
    subcategories: ["Cocktails", "Beer Indian", "Beer European", "Aperiitif", "Whisk,Rum,& Vodka 4cl",  "Digestive"]
  },
 {
  id: "hot-drinks",
  name: "Hot Drinks",
  subcategories: ["Indian Tea",  "Coffee","Dip Tea"]
},
{
  id: "dessert",
  name: "Dessert",
  subcategories: ["Indian Desert", "Ice Creams"]
},
{
  id: "wine",
  name: "Wine",
  subcategories: ["House Wine", "Bottle Wine"]
},

];


const menuItems=[
  // Starters - Vegetarian
  { id: "1", name: "Paani Puri", price: 10.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"/menu/paani-puri.jpg" },
  { id: "2", name: "Samosa", price: 6.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"/menu/samosa-image.jpg" },
  { id: "3", name: "Spring Roll", price: 7.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Vegetable-Spring-Rolls-2-1.jpg" },
  { id: "4", name: "Fusion Platter", price: 12.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Fussionplatte.jpeg" },
  { id: "5", name: "Onion pakoda", price: 7.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/veg-platter.jpg" },
  { id: "6", name: "Gobi Pakoda", price: 7.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Gobi-Pakoda.jpg"},
  { id: "7", name: "Panner Pakoda", price: 9.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Paneer-Pakoda.jpg" },
  { id: "8", name: "Mirchi Bhaji", price: 8.00, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/MirchiBhaji.jpeg.jpg" },
  { id: "9", name: "Masala Papad", price: 9.50, category: "starters", subcategory: "Vegetarian", isVeg: true, imgUrl:"./menu/Masalapapad.jpg" },
  
  // Starters - Non Vegetarian
  { id: "10", name: "Chicken Samosa", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/Chickensamosa.jpg" },
  { id: "11", name: "Lamb Samosa", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/lambsamosa.jpg" },
  { id: "12", name: "Chicken Pakoda", price: 8.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/ChickenPakoda.jpg" },
  { id: "13", name: "Fish Fry", price: 9.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/FishFry.jpeg.jpg" },
  { id: "14", name: "Egg Bonda", price: 9.00, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/EggBonda.jpg" },
  { id: "15", name: "Non Veg Platter", price: 15.50, category: "starters", subcategory: "Non Vegetarian", isVeg: false, imgUrl:"/menu/NonVegPlatter.jpg" },

  // Tandoori Specials
  { id: "16", name: "Paneer Tikka", price: 14.50, category: "tandoori", isVeg: true, imgUrl:"/menu/PaneerTikka.jpg" },
  { id: "17", name: "Chicken Tikka", price: 14.50, category: "tandoori", isVeg: false, imgUrl:"/menu/ChickenTikka.jpg" },
  { id: "18", name: "Chicken Tandoori", price: 15.50, category: "tandoori", isVeg: false, imgUrl:"/menu/ChickenTandoori.jpg" },
  { id: "19", name: "Lamb Seekh Kebab", price: 15.50, category: "tandoori", isVeg: false, imgUrl:"/menu/LambSeekhKebab.jpg" },
  { id: "20", name: "Chicken Seekh Kebab", price: 15.50, category: "tandoori", isVeg: false, imgUrl:"/menu/ChickenSeekhKebab.jpg" },
  

  // Idli & Dosa Corner - Dosa
  { id: "21", name: "Plain Dosa", price: 10.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/PlainDosa.jpg" },
  { id: "22", name: "Masala Dosa", price: 12.50, category: "idli-dosa", subcategory: "Dosa", isVeg: true, imgUrl:"/menu/MasalaDosa.jpg" },
  

  // Idli & Dosa Corner - Idli
  { id: "23", name: "Plain Idli ", price: 9.50, category: "idli-dosa", subcategory: "Idli", isVeg: true, imgUrl:"/menu/PlainIdli3pc.jpg" },
  { id: "24", name: "Sambar Idli", price: 10.50, category: "idli-dosa", subcategory: "Idli", isVeg: true, imgUrl:"/menu/SambarIdli3pc.jpg" },

  // Idli & Dosa Corner - Vada
  { id: "25", name: "Plain Vada", price: 9.50, category: "idli-dosa", subcategory: "Vada", isVeg: true, imgUrl:"/menu/PlainVada.jpg" },
  { id: "26", name: "Sambar Vada", price: 11.50, category: "idli-dosa", subcategory: "Vada", isVeg: true, imgUrl:"/menu/SambarVada.jpg" },

  // Idli & Dosa Corner - Puri
  { id: "27", name: "Puri", price: 9.50, category: "idli-dosa", subcategory: "Puri", isVeg: true, imgUrl:"/menu/Puri.jpeg.jpg" },
  
  // Vegetarian 
  { id: "28", name: "Mix Veg", price: 14.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/MixVeg.jpg" },
  { id: "29", name: "Paneer Jalfrezi", price: 15.00, category: "vegetarian", isVeg: true, imgUrl:"/menu/PaneerJalfrezi.jpg" },
  { id: "30", name: "Paneer Butter Masala", price: 16.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/PaneerButterMasala.jpg" },
  { id: "31", name: "Paneer Vindaloo", price: 16.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/PaneerVindaloo.jpg" },
  { id: "32", name: "Dal Thadka", price: 16.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/DalThadka.jpg" },
  { id: "33", name: "Bagara Baingan", price: 16.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/BagaraBaingan.jpg" },
  { id: "34", name: "Sambar", price: 12.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/Sambar.jpg" },
  { id: "35", name: "Dal Makhani", price: 15.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/DalMakhani.jpg" },
  { id: "36", name: "Rajma", price: 14.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/Rajma.jpg" },
  { id: "37", name: "Paneer Korma", price: 14.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/PaneerKorma.jpg" },
  { id: "38", name: "Palak Paneer", price: 15.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/PalakPaneer.jpg" },
  { id: "39", name: "Paneer Do Piaza", price: 15.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/PaneerDoPiaza.jpg" },
  { id: "40", name: "Aloo Gobi", price: 16.50, category: "vegetarian", isVeg: true, imgUrl:"/menu/BainganBharta.jpg" },

  // Chicken
  { id: "41", name: "Chicken Jalfrezi", price: 15.50, category: "chicken", isVeg: false, imgUrl:"/menu/ChickenJalfrezi.jpg" },
  { id: "42", name: "Butter Chicken", price: 16.50, category: "chicken", isVeg: false, imgUrl:"/menu/ButterChicken.jpg" },
  { id: "43", name: "Chicken Vindaloo", price: 15.50, category: "chicken", isVeg: false, imgUrl:"/menu/ChickenVindaloo.jpg" },
  { id: "44", name: "Chicken Korma", price: 14.50, category: "chicken", isVeg: false, imgUrl:"/menu/ChickenKorma.jpg" },
  { id: "45", name: "Palak Chicken", price: 16.50, category: "chicken", isVeg: false, imgUrl:"/menu/PalakChicken.jpg" },
  { id: "46", name: "Chicken kebab Masala", price: 16.50, category: "chicken", isVeg: false, imgUrl:"/menu/ChickenDoPiaza.jpg" },

  // Lamb Main Course
  { id: "47", name: "Lamb Jalfrezi", price: 16.50, category: "lamb", isVeg: false, imgUrl:"/menu/LambJalfrezi.jpg" },
  { id: "48", name: "Lamb Vindaloo", price: 15.50, category: "lamb", isVeg: false, imgUrl:"/menu/LambVindaloo.jpg" },
  { id: "49", name: "Lamb Korma", price: 15.50, category: "lamb", isVeg: false, imgUrl:"/menu/LambKorma.jpg" },
  { id: "50", name: "Palak Lamb", price: 16.50, category: "lamb", isVeg: false, imgUrl:"/menu/PalakLamb.jpg" },
  { id: "51", name: "Lamb Kebab Masala", price: 16.50, category: "lamb", isVeg: false, imgUrl:"/menu/LambKebabMasala.jpg" },


  // Naan
  { id: "52", name: "Plain Naan", price: 4.50, category: "naan",  isVeg: true, imgUrl:"/menu/Naan.jpg" },
  { id: "53", name: "Butter Naan", price: 5.00, category: "naan",  isVeg: true, imgUrl:"/menu/ButterNaan.jpg" },
  { id: "54", name: "Garlic Naan", price: 5.50, category: "naan",  isVeg: true, imgUrl:"/menu/GarlicNaan.jpg" },
  { id: "55", name: "Roti Tandoori", price: 4.50, category: "naan", isVeg: true, imgUrl:"/menu/RotiTandoori.jpg" },
  { id: "56", name: "Cheese Naan", price: 6.00, category: "naan",  isVeg: true, imgUrl:"/menu/CheeseNaan.jpg" },

  //Soups 
  { id: "57", name: "Chicken Tandori Soup", price: 8.50, category: "soups", isVeg: false, imgUrl:"/menu/ChickenTandooriSoup.jpeg.jpg" },
  { id: "58", name: "Asperges Soup", price: 7.00, category: "soups", isVeg: true, imgUrl:"/menu/AsergesSoup.jpeg.jpg" },
  { id: "59", name: "Tomato Soup", price: 7.00, category: "soups", isVeg: true, imgUrl:"/menu/TomotoSoup.jpeg.jpg" },


  //  Rice
  { id: "60", name: "Bagara Rice", price: 4.50, category: "rice",  isVeg: true, imgUrl:"/menu/BagaraRice.jpg" },
  { id: "61", name: "Plain Rice", price: 5.00, category: "rice",  isVeg: true, imgUrl:"/menu/PlainRice.jpg" },
  { id: "62", name: "Saffron Rice", price: 6.00, category: "rice",  isVeg: true, imgUrl:"/menu/SaffronRice.jpg" },

  // Biryani
  { id: "63", name: "Lamb Biryani", price: 20.50, category: "biryani", isVeg: false, imgUrl:"/menu/LambBiryani.jpg" },
  { id: "64", name: "Andhra Chicken Biryani", price: 19.50, category: "biryani", isVeg: false, imgUrl:"/menu/ChickenBiryani.webp" },
  { id: "65", name: "Vegetable Biryani", price: 18.50, category: "biryani", isVeg: true, imgUrl:"/menu/Vegetable Biryani.jpg" },

  // 7 Hills Thali - Vegetarian Thali
  { id: "66", name: "Vegetarian Thali", price: 20.50, category: "7hillsthali", subcategory: "Vegetarian Thali", isVeg: true, imgUrl:"/menu/VegThal.jpeg" },

  // 7 Hills Thali - Non Vegetarian Thali
  { id: "67", name: "Non Vegetarian Thali", price: 22.50, category: "7hillsthali", subcategory: "Non Vegetarian Thali", isVeg: false, imgUrl:"/menu/Non-VegThal.jpeg" },

  // Soft Drinks - Cool Drinks
  { id: "68", name: "Coca Cola (Normal / Zero)", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/CocaCola.jpg" },
  { id: "69", name: "Fanta", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/Fanta.jpg" },
  { id: "70", name: "Sprite", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/Sprite.jpg" },
  { id: "71", name: "Ice Tea", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/IceTea.jpg" },
  { id: "72", name: "Thums Up", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/ThumsUp.jpg" },
  { id: "73", name: "Limca", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/Limca.jpg" },
  { id: "74", name: "Indian Tonic", price: 4.50, category: "soft-drinks", subcategory: "Cool Drinks", isVeg: true, imgUrl:"/menu/IndianTonic.jpg" },

  // Soft Drinks - Masala
  { id: "75", name: "Shikanji", price: 5.50, category: "soft-drinks", subcategory: "Masala", isVeg: true, imgUrl:"/menu/Shikanji.jpg" },
  { id: "76", name: "Chaas", price: 5.50, category: "soft-drinks", subcategory: "Masala", isVeg: true, imgUrl:"/menu/Chaas.jpg" },

  // Soft Drinks - Water
  { id: "77", name: "Sparkling / Still (1/2 ltr)", price: 4.00, category: "soft-drinks", subcategory: "Water", isVeg: true, imgUrl:"/menu/SparklingStill.jpg" },
  { id: "78", name: "Still / Sparkling (1 ltr)", price: 6.50, category: "soft-drinks", subcategory: "Water", isVeg: true, imgUrl:"/menu/StillSparkling.jpg" },

  // Soft Drinks - Lassi
  { id: "79", name: "Special Lassi", price: 9.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/SpecialLassi.jpg" },
  { id: "80", name: "Mango Lassi", price: 6.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/MangoLassi.jpg" },
  { id: "81", name: "Rose Lassi", price: 6.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/RoseLassi.jpg" },
  { id: "82", name: "Jeera Lassi", price: 5.50, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/jeeraLassi.jpg" },
  { id: "83", name: "Salt Lassi", price: 5.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/SaltLassi.jpg" },
  { id: "84", name: "Sweet Lassi", price: 5.50, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/SweetLassi.jpg" },
  { id: "85", name: "Natural Lassi", price: 5.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/NaturalLassi.jpg" },
  { id: "86", name: "Chocolate Lassi", price: 8.00, category: "soft-drinks", subcategory: "Lassi", isVeg: true, imgUrl:"/menu/ChocolateLassi.jpg" },

  // Soft Drinks - Lemonade
  { id: "87", name: "Lemon Juice", price: 5.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true, imgUrl:"/menu/LemonJuice.jpg" },
  { id: "88", name: "Lemon Soda", price: 6.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true, imgUrl:"/menu/LemonSoda.jpg" },
  { id: "89", name: "Ginger Juice", price: 6.00, category: "soft-drinks", subcategory: "Lemonade", isVeg: true, imgUrl:"/menu/GingerJuice.jpg" },

  // Alcohol Drinks - Cocktails
  { id: "90", name: "Mojito", price: 8.50, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/Mojito.jpg" },
  { id: "91", name: "Aperol Spritz", price: 8.50, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/AperolSpritz.jpg" },
  { id: "92", name: "Blue Lagoon", price: 8.50, category: "alcohol", subcategory: "Cocktails", isVeg: true, imgUrl:"/menu/BlueLagoo.jpeg" },

  // Alcohol Drinks - Beer Indian
  { id: "93", name: "Cobra Large 4.8% 650ml", price: 9.50, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/CobraLarge.jpg" },
  { id: "94", name: "King Fisher Large 4.8%  650ml", price: 9.50, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/KingFisherLarge.jpg" },
  { id: "95", name: "Cobra Small 4.8% 330ml", price: 5.00, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/CobraSmall.jpg" },
  { id: "96", name: "King Fisher 4.8% Small 330ml", price: 5.00, category: "alcohol", subcategory: "Beer Indian", isVeg: true, imgUrl:"/menu/KingFisherSmall.jpg" },

  // Alcohol Drinks - Beer European
  { id: "97", name: "Duvel 8,2% ", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/Duvel.jpg" },
  { id: "98", name: "Triple Karmeliet 8,4%", price: 5.50, category: "alcohol" , subcategory: "Beer European", isVeg: true, imgUrl:"/menu/TripleKarmeliet8.jpeg" },
  { id: "99", name: "Jupiller 5,2%", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/Jupiller.jpg" },
  { id: "100", name: "Leffe Blonde 6,6%", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/LeffeBlonde6.jpeg" },
  { id: "101", name: "Stella Artois 5,2%", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/StellaArtois5.jpeg" },
  { id: "102", name: "Hoegaarden 4,9%", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/Hoegaarden4.jpeg" },
  { id: "103", name: "Leffe Blonde 0%", price: 5.00, category: "alcohol", subcategory: "Beer European", isVeg: true, imgUrl:"/menu/LeffeBlonde.jpeg" },

  // Alcohol Drinks - Aperiitif
  { id: "104", name: "Gin & Tonic", price: 9.00, category: "alcohol", subcategory: "Aperiitif", isVeg: true, imgUrl:"/menu/GinToni.jpeg" },
  { id: "105", name: "Martini Bianco(Pressecco & Soda)", price: 7.50, category: "alcohol", subcategory: "Aperiitif", isVeg: true, imgUrl:"/menu/MartiniBiancoPresseccoSod.jpeg" },
  { id: "106", name: "Martini Rosso(Tonic & Orange slice)", price: 9.00, category: "alcohol", subcategory: "Aperiitif", isVeg: true, imgUrl:"/menu/MartiniRossoTonicOrangeslic.jpeg" },
  { id: "107", name: "Vodka Tonic", price: 9.00, category: "alcohol", subcategory: "Aperiitif", isVeg: true, imgUrl:"/menu/VodkaToni.jpeg" },
  { id: "108", name: "Campari(Pressecco & Soda)", price: 7.50, category: "alcohol", subcategory: "Aperiitif", isVeg: true, imgUrl:"/menu/CampariPresseccoandSod.jpeg" },
  { id: "109", name: "Ricard", price: 6.50, category: "alcohol", subcategory: "Aperiitif", isVeg: true, imgUrl:"/menu/Ricar.jpeg" },
  { id: "160", name: "Martini Dry (Gin & Olive)", price: 9.00, category: "alcohol", subcategory: "Aperitif", isVeg: true, imgUrl:"/menu/MartiniDryGinOliv.jpeg" },
  // Alcohol Drinks - Whisk,Rum,& Vodka 4cl
  { id: "110", name: "Johnny Walker Red", price: 6.50, category: "alcohol", subcategory: "Whisk,Rum,& Vodka 4cl", isVeg: true, imgUrl:"/menu/JohnyWalkerRe.jpeg" },
  { id: "111", name: "Jack Daniel", price: 6.50, category: "alcohol", subcategory: "Whisk,Rum,& Vodka 4cl", isVeg: true, imgUrl:"/menu/JackDanne.jpeg" },
  { id: "112", name: "Absolute Vodka", price:  6.50, category: "alcohol", subcategory: "Whisk,Rum,& Vodka 4cl", isVeg: true, imgUrl:"/menu/AbsoluteVodk.jpeg" },
  { id: "113", name: "Old Monk Rum", price:  6.50, category: "alcohol", subcategory: "Whisk,Rum,& Vodka 4cl", isVeg: true, imgUrl:"/menu/OldMonkRu.jpeg" },
  
  
  // Alcohol Drinks - Digestive
  { id: "114", name: "Cognac", price:  6.50, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Cogna.jpeg" },
  { id: "115", name: "Grappa", price:  6.50, category: "alcohol", subcategory: "Digestive", isVeg: true, imgUrl:"/menu/Grapp.jpeg" },

  // Wine - House Wine (Glass)
  { id: "116", name: "Red Wine- Glass", price: 7.00, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRed.jpg" },
  { id: "117", name: "White Wine- Glass", price: 6.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineWhite.jpg" },
  { id: "118", name: "Rose Wine- Glass", price: 7.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRose.jpg" },

  // Wine - House Wine (1/4 ltr)
  { id: "119", name: "Red Wine- 1/4 ltr", price: 10.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRed.jpg" },
  { id: "120", name: "White Wine- 1/4 ltr", price: 10.00, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineWhite.jpg" },
  { id: "121", name: "Rose Wine- 1/4 ltr", price: 9.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRose.jpg" },

  // Wine - House Wine (1/2 ltr)
  { id: "122", name: "Red Wine- 1/2 ltr", price: 14.00, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRed.jpg" },
  { id: "123", name: "White Wine- 1/2 ltr", price: 13.00, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineWhite.jpg" },
  { id: "124", name: "Rose Wine- 1/2 ltr", price: 13.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRose.jpg" },
  
  // Wine - House Wine (1 ltr)
  { id: "125", name: "Red Wine- 1 ltr", price: 19.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRed.jpg" },
  { id: "126", name: "White Wine- 1 ltr", price: 18.00, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineWhite.jpg" },
  { id: "127", name: "Rose Wine- 1 ltr", price: 17.50, category: "wine", subcategory: "House Wine", isVeg: true, imgUrl:"/menu/HouseWineRose.jpg" },

  // Wine - Bottled Wine(White)
  { id: "128", name: "La Crosiade-White", price: 24.00, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/LaCroisadeWhite.jpg" },
  { id: "129", name: "Vinha Da Coutada Velha-White", price: 22.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/VinhaDaCoutadaVelhaWhite.jpg" },
  { id: "130", name: "Corbelli Grillo -White", price: 19.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/CorbelliGrillo.jpg" },
  { id: "131", name: "Domaine Boyar- White", price: 21.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/DomaineBoyar.jpg" },
  { id: "132", name: "Grover(Indan) -White", price: 19.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/GroverIndian.jpg" },

  // Wine - Bottled Wine(Red)
  { id: "133", name: "Vinha Da Coutada Velha-Red", price: 24.00, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/VinhaDaCoutadaVelhaRed.jpg" },
  { id: "134", name: "Sula(Indian)-Red", price: 22.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/SulaIndianRed.jpg" },
  { id: "135", name: "Merlot-Red", price:22.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/MerlotRed.jpg" },

  // Wine - Bottled Wine(Rose)
  { id: "136", name: "Arco De La Vega 13%-Rose", price: 22.50, category: "wine", subcategory: "Bottled Wine", isVeg: true, imgUrl:"/menu/ArcoDeLaVega13.jpg" },
  

  // Wine - Bottled Wine(Sparkling)
  { id: "137", name: "Cava", price: 7.00, category: "wine", subcategory: "Bottle Wine", isVeg: true, imgUrl:"/menu/Cava.jpg" },



// Indian Tea
{ id: "138", name: "Plain Tea", price: 4.00, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/PlainTe.jpeg" },
{ id: "139", name: "Ginger Tea", price: 4.50, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/GingerTe.jpeg" },
{ id: "140", name: "Ellachi Tea", price: 4.50, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/EllachiTe.jpeg" },
{ id: "141", name: "Masala Tea", price: 4.50, category: "hot-drinks", subcategory: "Indian Tea", isVeg: true, imgUrl: "/menu/MasalaTe.jpeg" },

// Dip Tea
{ id: "142", name: "Green Tea", price: 4.00, category: "hot-drinks", subcategory: "Dip Tea", isVeg: true, imgUrl: "/menu/GreenTe.jpeg" },
{ id: "143", name: "Black Tea", price: 4.00, category: "hot-drinks", subcategory: "Dip Tea", isVeg: true, imgUrl: "/menu/BlackTe.jpeg" },
{ id: "144", name: "Mint Tea", price: 4.00, category: "hot-drinks", subcategory: "Dip Tea", isVeg: true, imgUrl: "/menu/MintTe.jpeg" },
{ id: "145", name: "Jasmine Tea", price: 4.00, category: "hot-drinks", subcategory: "Dip Tea", isVeg: true, imgUrl: "/menu/JasmineTe.jpeg" },
{ id: "146", name: "Chamomile Tea", price: 4.00, category: "hot-drinks", subcategory: "Dip Tea", isVeg: true, imgUrl: "/menu/ChamomileTe.jpeg" },

// Coffee
{ id: "147", name: "Coffee", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/Coffe.jpeg" },
{ id: "148", name: "Espresso", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/Express.jpeg" },
{ id: "149", name: "Double Espresso", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/Double Expresso.png" },
{ id: "150", name: "Cappuccino", price: 4.00, category: "hot-drinks", subcategory: "Coffee", isVeg: true, imgUrl: "/menu/Cappuccin.jpeg" },


// Indian Sweets
{ id: "151", name: "Gulab Jamun", price: 6.50, category: "dessert", subcategory: "Indian Desert", isVeg: true, imgUrl: "/menu/GulabJamu.jpeg" },
{ id: "152", name: "Gulab Jamun + Ice Cream", price: 7.50, category: "dessert", subcategory: "Indian Desert", isVeg: true, imgUrl: "/menu/GulabJamunIcecrea.jpeg" },

// Kulfi
{ id: "153", name: "Pistachio Kulfi", price: 7.50, category: "dessert", subcategory: "Indian Desert", isVeg: true, imgUrl: "/menu/PistachioKulf.jpeg" },
{ id: "154", name: "Mango Kulfi", price: 7.50, category: "dessert", subcategory: "Indian Desert", isVeg: true, imgUrl: "/menu/MangoKulf.jpeg" },
{ id: "155", name: "Malai Kulfi", price: 7.50, category: "dessert", subcategory: "Indian Desert", isVeg: true, imgUrl: "/menu/MalaiKulf.jpeg" },

// Halwa
{ id: "156", name: "Gajar Ka Halwa", price: 7.50, category: "dessert", subcategory: "Indian Desert", isVeg: true, imgUrl: "/menu/GajarkaHalw.jpeg" },

// Ice Cream
{ id: "157", name: "Vanilla", price: 7.00, category: "dessert", subcategory: "Ice Creams", isVeg: true, imgUrl: "/menu/VanilaIcecrea.jpeg" },
{ id: "158", name: "Dame Blanche", price: 9.50, category: "dessert", subcategory: "Ice Creams", isVeg: true, imgUrl: "/menu/DameBlanch.jpeg" },
{ id: "159", name: "Chocolate", price: 7.00, category: "dessert", subcategory: "Ice Creams", isVeg: true, imgUrl: "/menu/Chocolat.jpeg" }

  
];


const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || item.subcategory === selectedSubcategory;
      const matchesDietary = dietaryFilter === 'all' || 
        (dietaryFilter === 'veg' && item.isVeg) ||
        (dietaryFilter === 'non-veg' && !item.isVeg);
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesDietary;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedSubcategory, dietaryFilter, sortBy]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    const category = menuCategories.find(cat => cat.id === selectedCategory);
    return category?.subcategories || [];
  };

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
              onChange={(e) => setSearchTerm(e.target.value)}
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
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    setSelectedSubcategory('all');
                  }}
                  className="px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {menuCategories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                <ChevronDown className="absolute text-gray-400 transform -translate-y-1/2 right-2 top-1/2" size={16} />
              </div>

              {/* Subcategory Filter */}
              {getSubcategories().length > 0 && (
                <div className="relative">
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => setSelectedSubcategory(e.target.value)}
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
                <button
                  onClick={() => setDietaryFilter('all')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    dietaryFilter === 'all' 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setDietaryFilter('veg')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'veg' 
                      ? 'bg-white text-green-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Leaf size={16} />
                  Veg
                </button>
                <button
                  onClick={() => setDietaryFilter('non-veg')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    dietaryFilter === 'non-veg' 
                      ? 'bg-white text-red-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <UtensilsCrossed size={16} />
                  Non-Veg
                </button>
              </div>
            </div>

            {/* Sort Options */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 pr-8 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
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

      {/* Menu Items Grid - 4 per row */}
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {filteredAndSortedItems.length === 0 ? (
          <div className="py-12 text-center">
            <div className="mb-4 text-gray-400">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-600">No dishes found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredAndSortedItems.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    // onError={(e) => {
                    //   e.target.src = 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg';
                    // }}
                  />
                  <div className="absolute px-2 py-1 text-sm font-bold text-black bg-yellow-500 rounded-full top-2 right-2">
                    €{item.price.toFixed(2)}
                  </div>
                  <div className="absolute top-2 left-2">
                    {item.isVeg ? (
                      <div className="p-1 bg-green-500 rounded-full">
                        <Leaf size={14} className="text-white" />
                      </div>
                    ) : (
                      <div className="p-1 bg-red-500 rounded-full">
                        <UtensilsCrossed size={14} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="mb-2 text-lg font-bold text-red-900 line-clamp-2">{item.name}</h3>
                  <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                    <span className="px-2 py-1 text-xs bg-gray-100 rounded">
                      {menuCategories.find(cat => cat.id === item.category)?.name}
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