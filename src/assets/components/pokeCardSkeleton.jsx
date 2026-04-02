import React from "react";

function PokeCardSkeleton() {
  return (
    <div className=" bg-gray-100 shadow-xl rounded-xl h-fit w-100 p-4 animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-xl mb-4"></div>

      <div className="h-6 bg-gray-300 rounded mb-3"></div>

      <div className="h-4 bg-gray-300 rounded mb-2"></div>

      <div className="h-4 bg-gray-300 rounded mb-2"></div>

      <div className="h-4 bg-gray-300 rounded mb-2"></div>
    </div>
  );
}

export default PokeCardSkeleton;
