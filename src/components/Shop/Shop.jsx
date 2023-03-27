import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/public/products.json");
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product, index) => (
          <Product
            product={product}
            handleAddToCart={handleAddToCart}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summary</h4>
        <p>
          Selected items:{" "}
          {cart.map((singleCart) => (
            <p>{singleCart.name}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Shop;
