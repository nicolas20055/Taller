import { useState, useEffect } from "react";
import React from "react";
import ProductCard from "../../components/ProductCard";


const ApiUrl = "https://fakestoreapi.com/products";

export const obtenerProductos = async () => {
    try {
        const response = await fetch(ApiUrl);
        if (!response.ok) {
            throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        return [];
    }
};

const Main = () => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");


    useEffect(() => {
        const fetchProductos = async () => {
            const data = await obtenerProductos();
            setProductos(data);
        };

        fetchProductos();

    }, []);

    const productosFiltrados = productos.filter((producto) =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );

 

    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full max-w-md"
            />
           

    </div>
        );
    }


export default Main;