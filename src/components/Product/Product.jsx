import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, id, img, seller, quantity, price, ratings } = props.product;
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
        <button className="btn-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
