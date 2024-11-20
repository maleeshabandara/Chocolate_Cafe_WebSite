import React from "react";

const Button = ({ title, onClick, className }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`px-6 py-1 border border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full ${className}`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
