import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none">
            <div className="card mb-4 ">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text">{item.nombre}</p>
                </div>
            </div>
        </Link >
    )
}

export default Item;

