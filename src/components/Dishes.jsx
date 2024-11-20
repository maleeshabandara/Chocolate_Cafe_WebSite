import React from "react";
import DishesCard from "./DishesCard"; // Assuming you have a DishesCard component
import img1 from "../assets/img/img1.jpeg"; // Image import
import img2 from "../assets/img/img2.jpg"; // Image import
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";


const Dishes = () => {
  return (
    <div className="min-h-screen py-12 px-5 bg-gray-100">
      {/* Section Title */}
      <h1 className="text-center text-4xl font-semibold mb-12">Our Delicacies</h1>

      {/* Dishes Cards Container */}
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Choc lava Cake" price="Rs 2500.00" />
        <DishesCard img={img3} title="Cake Torte Dessert" price="Rs 3500.00" />
        <DishesCard img={img4} title="Cake Cream Cherry" price="Rs 2900.00" />
        <DishesCard img={img5} title="Choc White Cake" price="Rs 2500.00" />
        <DishesCard img={img2} title="Cake Chocolate Sweet" price="Rs 2750.00" />
        <DishesCard img={img6} title="Butter Cheese" price="Rs 450.00" />
        <DishesCard img={img7} title="Cheese Gato" price="Rs 650.00" />
      </div>
    </div>
  );
};

export default Dishes;
