import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductsComponent from "./components/ProductsComponent";
import CartComponent from "./components/CartComponent";

function App() {
  return (
    <>
      <Header />
      <CartComponent />
      <ProductsComponent />
    </>
  );
}

export default App;
