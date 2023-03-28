import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
      );
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    // step-1: get id of the added product
    for (const id in storedCart) {
      // step-2: get product from products state by using id
      const addedProduct = products.find((product) => product.id === id);

      // step-3: get and set quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;

        // step-4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
    }

    // step-5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    // const newCart = [...cart, product];
    // if product doesn't exist in the cart, then set quantity = 1
    // if exists update quantity by 1
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exists];
    }

    setCart(newCart);
    addToDb(product.id);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
