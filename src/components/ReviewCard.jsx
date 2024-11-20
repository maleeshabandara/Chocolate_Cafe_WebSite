import React from "react";

const ReviewCard = ({ img, name, review }) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-gray-200 p-5 rounded-lg shadow-md space-y-4">
      {/* Review Text */}
      <div>
        <p className="text-gray-600 text-sm">
          {review}
        </p>
      </div>

      {/* Reviewer Information */}
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt="Reviewer"
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
        />
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;
