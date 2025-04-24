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


    useEffect(() => {
        const fetchProductos = async () => {
            const data = await obtenerProductos();
            setProductos(data);
        };

        fetchProductos();
    }, []);

 

    return (
        <div>
            <h1>Lista de Productos</h1>
            <div className={{}}>
                {productos.map((producto) => (
                    <ProductCard key={producto.id} producto={producto} />
                ))}
            </div>
        </div>
    );
};

export default Main;