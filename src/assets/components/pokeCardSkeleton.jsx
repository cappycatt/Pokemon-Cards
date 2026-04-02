import React from "react";

function PokeCardSkeleton() {
  return (
    <div className=" bg-gray-100 shadow-xl rounded-xl h-fit w-100 p-4 animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-40 bg-gray-300 rounded-xl mb-4"></div>

      {/* Title placeholder */}
      <div className="h-6 bg-gray-300 rounded mb-3"></div>

      {/* Type placeholder */}
      <div className="h-4 bg-gray-300 rounded mb-2"></div>

      {/* Height placeholder */}
      <div className="h-4 bg-gray-300 rounded mb-2"></div>

      {/* Weight placeholder */}
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
    </div>
  );
}

export default PokeCardSkeleton;
