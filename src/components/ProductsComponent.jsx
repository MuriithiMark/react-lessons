import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./products-component.css";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { getProducts } from "../services/api";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img
            src={product.thumbnail}
            alt={`${product.name} photo`}
            className="product-img"
          />
          <span className="product-name">{product.title}</span>
          <span className="product-price">
            <b>${product.price}</b>
          </span>
          <div className="product-actions">
            <button
              className="add-to-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsComponent;
