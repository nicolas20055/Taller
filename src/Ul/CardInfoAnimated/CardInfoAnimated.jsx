import React, { useState, useEffect } from 'react';


export const CardInfoAnimated = ({ title, content, images }) => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const animationSpeed = 1000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, animationSpeed);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 ease-in-out hover:scale-105 h-[350px] sm:h-[250px] md:h-[400px] flex flex-col justify-center items-center">
      
     
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold">
        {title}
      </h2>

     
      <p className=" text-sm sm:text-base md:text-lg text-center px-4 sm:px-6 mt-2 ">
        {content}
      </p>

      
      <div className="flex justify-center items-center h-32 sm:h-36 md:h-40 lg:h-48 relative">
        {images.length > 0 && (
          <div className="w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] text-5xl sm:text-6xl md:text-7xl transition-opacity duration-700">
            {images[currentIconIndex]}
          </div>
        )}
      </div>
    </div>
  );
};