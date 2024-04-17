import "./CourseItem.css";
import rating_stars from "../../assets/rating_starts.png";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function CourseItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="course-item">
      <div className="course-item-img-container">
        <img className="course-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img className="add" onClick={() => addToCart(id)} src={assets.icon_add} alt="" />
        ) : (
          <div className="course-item-counter">
            <img onClick={() => removeFromCart(id)} src={assets.icon_minus} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.icon_add} alt="" />
          </div>
        )}
      </div>
      <div className="course-item-info">
        <div className="course-item-name-rating">
          <p>{name}</p>
          <img src={rating_stars} alt="" />
        </div>
        <p className="course-item-desc">{description}</p>
        <p className="course-item-price">{price} RON</p>
      </div>
    </div>
  );
}
