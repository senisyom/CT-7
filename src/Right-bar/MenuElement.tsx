import React from "react";
import "./MenuElement.css"

interface IMenuElement {
    name: string;
    price: number;
    image: string
    id: number;
}

const MenuElement: React.FC<IMenuElement> = ({ name, price, image }) => {

    return (
        <div>
            <div className="FoodCard">
                <button className="FoodButton">
                    <img src={image} alt={name} className="FoodImg" />
                    <span className="foodName">{name}</span>
                    <span className="FoodPrice">{price} KGS </span>
                </button>
            </div>
        </div>
    )
}

export default MenuElement;