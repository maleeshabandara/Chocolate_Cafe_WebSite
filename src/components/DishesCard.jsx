import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./Button"; // Import the Button component

const DishesCard = (props) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img src={props.img} alt={props.title} className="w-full h-48 object-cover rounded-md mb-4" />

      {/* Dish Title */}
      <h3 className="text-xl font-semibold mb-2">{props.title}</h3>

      {/* Ratings */}
      <div className="flex text-yellow-500 mb-4">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
      </div>

      {/* Price and Buy Button */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{props.price}</h3>
        <Button title="Buy Now" onClick={() => alert(`Bought ${props.title}`)} />
      </div>
    </div>
  );
};

export default DishesCard;
