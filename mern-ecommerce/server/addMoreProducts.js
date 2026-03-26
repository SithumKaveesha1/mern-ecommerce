const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const moreProducts = [
  {
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800",
    title: "Puma RS-X Bold",
    description: "Future-retro sneakers with bold design and maximum cushioning.",
    category: "footwear",
    brand: "puma",
    price: 110,
    salePrice: 95,
    totalStock: 35,
    averageReview: 4.4,
  },
  {
    image: "https://images.unsplash.com/photo-1542272454315-4c01d7afdf4a?auto=format&fit=crop&q=80&w=800",
    title: "Levi's Trucker Jacket",
    description: "The original denim jacket since 1967. A symbol of self-expression for decades.",
    category: "men",
    brand: "levi",
    price: 98,
    salePrice: 85,
    totalStock: 20,
    averageReview: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
    title: "Zara Luxury Handbag",
    description: "Elegant and spacious handbag for daily use or special occasions.",
    category: "accessories",
    brand: "zara",
    price: 120,
    salePrice: 100,
    totalStock: 15,
    averageReview: 4.5,
  },
  {
    image: "https://images.unsplash.com/photo-1519231450239-0d33e7284814?auto=format&fit=crop&q=80&w=800",
    title: "Adidas Kids Tracksuit",
    description: "Comfortable and stylish tracksuit for active kids. Iconic three stripes.",
    category: "kids",
    brand: "adidas",
    price: 65,
    salePrice: 55,
    totalStock: 40,
    averageReview: 4.2,
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    title: "Nike Training Shorts",
    description: "Breathable and lightweight shorts for your best workout session.",
    category: "men",
    brand: "nike",
    price: 35,
    salePrice: 28,
    totalStock: 100,
    averageReview: 4.6,
  }
];

async function addMore() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    await Product.insertMany(moreProducts);
    console.log("5 more products added successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error adding products:", error);
    process.exit(1);
  }
}

addMore();
