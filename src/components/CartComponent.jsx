import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./cart-component.css";
import cartTotalPriceSelector from "../features/cart/selectors/cartTotalPriceSelector";
import {
  decrementProduct,
  incrementProduct,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartComponent = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cartTotalPriceSelector(cart);

  const dispatch = useDispatch();

  return (
    cart.isOpen && (
      <div className="cart">
        <div className="cart-main">
          {cart.items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={`${item.title} image`} />

              <div className="info">
                <span className="title">{item.title}</span>
                <div className="actions">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => dispatch(decrementProduct({ id: item.id }))}
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    disabled={item.quantity >= item.stock}
                    onClick={() => dispatch(incrementProduct({ id: item.id }))}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="remove-actions">
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  >
                    Remove From Cart
                  </button>
                </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <span className="total-price">Total Price: ${totalPrice}</span>
        </div>
      </div>
    )
  );
};

export default CartComponent;
