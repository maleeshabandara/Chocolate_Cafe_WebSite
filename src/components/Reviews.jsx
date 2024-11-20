import React from "react";
import ReviewCard from "./ReviewCard";
import img1 from "../assets/img/pic1.jpg";
import img2 from "../assets/img/pic2.jpg";


const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 md:px-32 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Customer Reviews</h1>
      
      <div className="flex flex-wrap gap-8 justify-center">
        {/* Review 1 */}
        <ReviewCard
          img={img1}
          name="Maleesha Bandara"
          review="We bought some food from Chocoholics, and all of them were very delicious. From classic chocolate cakes to unique creations like chocolate fondue and lava cakes, Chocoholics offers a wide variety of options to satisfy any craving."
        />
        {/* Review 2 */}
        <ReviewCard
          img={img2}
          name="John Doe"
          review="Excellent place to have some chocolate-pouring food. The service and staff were excellent, and the chocolate pancakes were top-notch!"
        />
      </div>
    </div>
  );
};

export default Reviews;
