import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-16">
      <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Spinner;
