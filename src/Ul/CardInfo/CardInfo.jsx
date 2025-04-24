import React from 'react';

export const CardInfo = ({ title, content, images, customClass }) => {
  return (
    <div className={`w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl min-w-3xs rounded-lg overflow-hidden shadow-lg border border-gray-200 h-[350px] sm:h-[380px] md:h-[400px] flex flex-col justify-center items-center ${customClass}`}>
      
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-bold">
        {title}
      </h2>

      <p className=" text-base text-center px-4 sm:px-6">
        {content}
      </p>

      {images && images.length > 0 && (
        <div className="flex justify-center items-center h-32 sm:h-36 md:h-40 lg:h-48 space-x-4">
          {images.map((img, index) => (
            <div key={index} className="w-[80px] sm:w-[100px] md:w-[120px] h-[80px] sm:h-[100px] md:h-[120px] flex-shrink-0 object-contain">
              {typeof img === 'string' ? (
                <img
                  src={img}
                  alt={`imagen ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                img
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};