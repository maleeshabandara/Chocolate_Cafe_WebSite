import React from "react";
import Button from "./Button"; // Adjust the path if necessary

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat"
    >
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-6xl">
          Elevate your inner Foodie with every bite
        </h1>
        <p className="text-backgroundColor lg:w-3/4">
        Choc-fe is the ultimate dessert destination, specialising in decadent dishes made from the finest quality chocolate, imported directly from the worlds chocolate in Brazil.
        </p>
        <div className="lg:pl-0">
          <Button
            title="Order Now"
            onClick={() => alert("Order Now button clicked!")}
            className="bg-brightColor text-white px-6 py-2 rounded-md hover:bg-brightColor-dark transition-all"
          />
        </div>
      </div>
    </div>
    
  );
};

export default Home;
