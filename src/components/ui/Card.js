import React from "react";

const Card = ({ children }) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">{children}</div>
  );
};

export default Card;
