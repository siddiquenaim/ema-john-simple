import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/public/products.json");
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>Products: {products.length}</h2>
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
      </div>
    </div>
  );
};

export default Shop;
