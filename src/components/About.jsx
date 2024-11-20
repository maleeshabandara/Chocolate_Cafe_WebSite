import React from "react";
import img from "../assets/img/about.jpg";
import Button from "./Button"; // Assuming this is your custom Button component

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between lg:px-32 px-5 py-16 bg-gray-100">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <img src={img} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Why Choose Us?</h1>
        <p className="text-lg text-gray-600 mb-4">
        Choc-fe offers its customers the best tasting chocolate drinks in the area; This will be achieved by using high quality ingredients and strictly following the preparation guidelines. Store layout, menu listings and marketing activities will focus on maximizing higher margin beverage sales. Along with beverages, brewed coffee and tea as well as refreshing beverages, waffles, cakes, pancakes, will be sold in the coffee house. All our products and services are very affordable and quality.
        </p>
        <p className="text-lg text-gray-600 mb-6">
        Choc-fe offers its customers the best tasting chocolate drinks in the area; This will be achieved by using high quality ingredients and strictly following the preparation guidelines. Store layout, menu listings and marketing activities will focus on maximizing higher margin beverage sales. Along with beverages, brewed coffee and tea as well as refreshing beverages, waffles, cakes, pancakes, will be sold in the coffee house. All our products and services are very affordable and quality.
        </p>
        <div>
          <Button
            title="Learn More"
            onClick={() => alert("Learn More button clicked!")}
            className="bg-brightColor text-white px-6 py-2 rounded-md hover:bg-brightColor-dark transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
