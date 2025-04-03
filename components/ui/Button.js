import React from "react";

const Button = ({ text, onClick, variant = "primary" }) => {
  const baseStyles = "px-6 py-2 rounded-2xl font-semibold transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;