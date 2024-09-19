// app/(root)/products/add/page.js
"use client"
import "../../../globals.css";

import { useState, useEffect } from "react";
import { handleProductSubmit } from "@/lib/addProduct";

export default function AddProductPage() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device
  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
    const mobileCheck = /Mobi|Android/i.test(userAgent);
    setIsMobile(mobileCheck);
  }, []);

  const handle360Video = () => {
    if (isMobile) {
      // Redirect to AR Camera or a placeholder
      alert("Opening AR Camera for 360° video...");
      // You can implement real redirection or opening AR camera here
    } else {
      // Show a notification to switch to mobile
      alert("Please use your mobile device to capture the 360° video.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      <form action={handleProductSubmit} method="POST" className="space-y-6">
        {/* General Information Section */}
        <div className="bg-white p-6 shadow-md rounded-lg space-y-4">
          <h2 className="text-xl font-bold">General Information</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="productName" className="block font-medium">Product Name</label>
              <input type="text" id="productName" name="productName" className="w-full border p-2 rounded" required />
            </div>

            <div>
              <label htmlFor="description" className="block font-medium">Description</label>
              <textarea id="description" name="description" className="w-full border p-2 rounded" required></textarea>
            </div>
          </div>
        </div>

        {/* Media Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold">Product Media</h2>
          <div className="space-y-4">
            <div>
              <label htmlFor="images" className="block font-medium">Upload Images</label>
              <input type="file" id="images" name="images" multiple className="w-full border p-2 rounded" />
            </div>
            <div>
              <label htmlFor="video360" className="block font-medium">360° Video</label>
              <button 
                type="button" 
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" 
                onClick={handle360Video}
              >
                Capture 360° Video
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold">Pricing</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="price" className="block font-medium">Base Price (₦)</label>
              <input type="number" id="price" name="price" className="w-full border p-2 rounded" required />
            </div>
            <div>
              <label htmlFor="discount" className="block font-medium">Discount (%)</label>
              <input type="number" id="discount" name="discount" className="w-full border p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold">Category & Tags</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block font-medium">Product Category</label>
              <select id="category" name="category" className="w-full border p-2 rounded">
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="home_appliances">Home Appliances</option>
              </select>
            </div>

            <div>
              <label htmlFor="tags" className="block font-medium">Product Tags</label>
              <select id="tags" name="tags" className="w-full border p-2 rounded">
                <option value="new">New Arrival</option>
                <option value="discount">Discount</option>
                <option value="best_seller">Best Seller</option>
              </select>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Product</button>
        </div>
      </form>
    </div>
  );
}
