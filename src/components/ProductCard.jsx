import React from "react";

const ProductCard = ({ producto }) => {
    return (
        <div className="border-2 border-gray-300 rounded-lg p-4 w-64 shadow-md">
            <img 
                src={producto.image}
                alt={producto.title}
                className="w-full h-40 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-4">{producto.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{producto.description}</p>
            <p className="text-lg font-bold mt-4">Precio: ${producto.price}</p>
        </div>
    );
};

export default ProductCard;