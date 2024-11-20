import React from "react";
import DishesCard from "./DishesCard";
import img1 from "../assets/img/menu1.jpg";
import img2 from "../assets/img/img1.jpeg";
import img3 from "../assets/img/menu3.jpg";
import img4 from "../assets/img/about.jpg";
import img5 from "../assets/img/menu2.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Our Menu
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Hot Chocolate Drinks" price="Rs.600.00" />
        <DishesCard img={img2} title="Cakes" price="Rs.2500.00" />
        <DishesCard img={img3} title="Fruits Salad" price="Rs.250.00" />
        <DishesCard img={img4} title="Milk Shakes" price="Rs.700.00" />
        <DishesCard img={img5} title="Smoothies" price="Rs.500.00" />
      </div>
    </div>
  );
};

export default Menu;
