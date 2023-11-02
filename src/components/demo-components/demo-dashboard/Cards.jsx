import React from "react";

const Cards = ({ children }) => {
  const cardStyle = {
    backgroundImage: 'url("/images/bg/background.jpg")', 
    backgroundSize: "cover",
    backgroundPosition: "center",
    // background: 'linear-gradient(rgba(40, 40, 40, 0.5), rgba(0, 0, 0, 0.5)), url("/images/bg/background.jpg")',
  };

  return (
    <div
      className="w-full h-full rounded-md relative p-8 border-2  bg-gray-900 border-gray-800"
      style={cardStyle}
    >
      {children}
    </div>
  );
};

export default Cards;
