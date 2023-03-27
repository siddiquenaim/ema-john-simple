import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, id, img, seller, quantity, price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div>
      <div className="product">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={img} alt="" />
        </div>
        <div className="product-info">
          <h6 className="product-name">{name}</h6>
          <p>Price: ${price}</p>
          <p>Manufacturer: {seller}</p>
          <p>Rating: {ratings} Stars</p>
        </div>
        <button
          onClick={() => handleAddToCart(props.product)}
          className="btn-cart"
        >
          Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
