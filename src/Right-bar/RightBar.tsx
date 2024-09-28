import React from "react";
import "./RightBar.css";
import FoodItems from "../App";
import MenuElement from "./MenuElement";

interface IRightBar {
  foodItems: FoodItem[];
}

const RightBar: React.FC<IRightBar> = ({ foodItems }) => {
    return (
      
    <div className="RightBarContainer">
        {foodItems.map((item: FoodItem) => (
          <MenuElement
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            id={item.id}
          />
        ))}
      </div>
  );
};

export default RightBar;
