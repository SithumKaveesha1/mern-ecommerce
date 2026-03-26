const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

const imageUpdates = [
  { title: "Nike Air Max 270", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80" },
  { title: "H&M Floral Blouse", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80" },
  { title: "Adidas Kids Tracksuit", image: "https://images.unsplash.com/photo-1519231450239-0d33e7284814?auto=format&fit=crop&q=80" },
  { title: "Levi's Trucker Jacket", image: "https://images.unsplash.com/photo-1576871333020-752e39956f16?auto=format&fit=crop&q=80" },
  { title: "Kids' Colorful Sneakers", image: "https://images.unsplash.com/photo-1620804364219-4835698b975e?auto=format&fit=crop&q=80" },
  { title: "Modern Smart Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80" },
  { title: "Women's Summer Dress", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" },
  { title: "Classic Leather Jacket", image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80" },
  { title: "Puma RS-X Bold", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80" },
  { title: "Levi's 501 Original Fit Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80" },
  { title: "Zara Luxury Handbag", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80" },
  { title: "Nike Training Shorts", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" }
];

async function fix() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB...");

    for (const update of imageUpdates) {
      await Product.findOneAndUpdate({ title: update.title }, { image: update.image });
      console.log(`Updated ${update.title}`);
    }

    console.log("All broken images fixed successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error fixing images:", error);
    process.exit(1);
  }
}

fix();
