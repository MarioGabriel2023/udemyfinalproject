import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../components/context/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, courses_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {courses_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price} RON</p>
                  <p>{item.price * cartItems[item._id]} RON</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b> {getTotalCartAmount()} RON</b>
          </div>
        </div>
        <div className="cart-promocode">
          <p>PROMOCODE</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
      <div className="cart-bottom">
        <button onClick={() => navigate("/buy")} className="btn">
          PROCEED TO CHECKOUT
        </button>
      </div>
    </>
  );
}
