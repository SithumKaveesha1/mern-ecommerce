const mongoose = require("mongoose");
const Product = require("./models/Product");
const Feature = require("./models/Feature");
require("dotenv").config();

const products = [
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    title: "Nike Air Max 270",
    description: "The Nike Air Max 270 is iconic for its comfort and style.",
    category: "footwear",
    brand: "nike",
    price: 150,
    salePrice: 130,
    totalStock: 50,
    averageReview: 4.5,
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    title: "Modern Smart Watch",
    description: "Stay connected with this sleek and modern smart watch.",
    category: "accessories",
    brand: "puma",
    price: 200,
    salePrice: 180,
    totalStock: 30,
    averageReview: 4.8,
  },
  {
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800",
    title: "Women's Summer Dress",
    description: "A beautiful and light summer dress for any occasion.",
    category: "women",
    brand: "zara",
    price: 80,
    salePrice: 60,
    totalStock: 100,
    averageReview: 4.2,
  },
  {
    image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=800",
    title: "Classic Leather Jacket",
    description: "A timeless classic leather jacket that never goes out of style.",
    category: "men",
    brand: "h&m",
    price: 120,
    salePrice: 90,
    totalStock: 25,
    averageReview: 4.7,
  },
  {
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
    title: "Kids' Colorful Sneakers",
    description: "Fun and durable sneakers for active kids.",
    category: "kids",
    brand: "adidas",
    price: 50,
    salePrice: 40,
    totalStock: 60,
    averageReview: 4.0,
  },
  {
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
      title: "Levi's 501 Original Fit Jeans",
      description: "The original blue jean since 1873. Slim through the hip and thigh with a straight leg.",
      category: "men",
      brand: "levi",
      price: 90,
      salePrice: 75,
      totalStock: 45,
      averageReview: 4.6,
  },
  {
      image: "https://images.unsplash.com/photo-1520639889313-72722b934789?auto=format&fit=crop&q=80&w=800",
      title: "H&M Floral Blouse",
      description: "Lightweight and stylish floral blouse perfect for work or casual outings.",
      category: "women",
      brand: "h&m",
      price: 45,
      salePrice: 35,
      totalStock: 80,
      averageReview: 4.3,
  }
];

const features = [
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600&h=600",
  },
  {
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1600&h=600",
  },
  {
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1600&h=600",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data
    await Product.deleteMany({});
    await Feature.deleteMany({});
    console.log("Cleared existing products and features.");

    // Seed data
    await Product.insertMany(products);
    await Feature.insertMany(features);
    console.log("Database seeded successfully!");

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
}

seedDB();
