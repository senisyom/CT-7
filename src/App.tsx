import humburgerImage from "./assets/spoons.jpg";
import cheeseBurgerImage from "./assets/spoons.jpg";
import friesImage from "./assets/spoons.jpg";
import coffeeImage from "./assets/cup-3.png";
import teaImage from "./assets/cup-3.png";
import colaImage from "./assets/cup-3.png";
import deleteImage from "./assets/delete-buttonn.png";
import { useState } from "react";
import "./App.css";
import RightBar from "./Right-bar/RightBar";
import MenuElement from "./Right-bar/MenuElement";

interface FoodItem {
  id: number;
  name: string;
  price: number;
  image: string;
  deleteImg: string;
}

interface IOrder {
  name: string;
  count: number;
  id: number;
}

const App = () => {
  const FoodItems: FoodItem[] = [
    {
      id: 1,
      name: "Hamberger",
      price: 120,
      image: humburgerImage,
      deleteImg: deleteImage,
    },
    {
      id: 2,
      name: "CheeseBurger",
      price: 130,
      image: cheeseBurgerImage,
      deleteImg: deleteImage,
    },
    {
      id: 3,
      name: "Fries",
      price: 100,
      image: friesImage,
      deleteImg: deleteImage,
    },
    {
      id: 4,
      name: "Coffee",
      price: 110,
      image: coffeeImage,
      deleteImg: deleteImage,
    },
    { id: 5, name: "Tea", price: 90, image: teaImage, deleteImg: deleteImage },
    {
      id: 6,
      name: "Cola",
      price: 90,
      image: colaImage,
      deleteImg: deleteImage,
    },
  ];

  const [foodOrder, setFoodOrder] = useState<IOrder[]>(
    FoodItems.map((item: FoodItem) => {
      return { id: item.id, name: item.name, count: 0 };
    })
  );

  return (
    <div className="Container">
      <RightBar foodItems={FoodItems}/>
    </div>
  );
};

export default App;
