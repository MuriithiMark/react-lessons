import React from "react";

import "./header.css";
import cartLengthSelector from "../features/cart/selectors/cartLengthSelector";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../features/cart/cartSlice";
import BagIcon from "./icons/BagIcon";

const Header = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const cartCount = cartLengthSelector(state);

  return (
    <header className="header">
      <span className="site-title">store.name</span>
      <nav className="site-nav">
        <button onClick={() => dispatch(toggleCart())}>
          <span>{cartCount}</span>
          <BagIcon width={44} height={44} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
