import { useState, useEffect } from "react";
import { TbArrowsRandom } from "react-icons/tb";
import React from "react";

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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            setLoading(true);
            const data = await obtenerProductos();
            setProductos(data);
            setLoading(false);
        };

        fetchProductos();
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div>
            <h1>Lista de Productos</h1>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>
                        <p>Precio: ${producto.price}</p>
                        <img src={producto.image} alt={producto.title} style={{ width: "100px" }} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Main;