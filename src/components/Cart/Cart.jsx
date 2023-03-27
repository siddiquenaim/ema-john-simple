import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // const cart = props.cart; //option 1
  //   const { cart } = props; //option 2
  console.log(cart);

  let total = 0;
  let totalShipping = 0;
  for (let product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (total * 7) / 100;
  const grandTotal = total + totalShipping + tax;

  return (
    <div className="cart">
      <h4 className="cart-title">Order Summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)} </p>
      <h6 style={{ fontSize: "21px", marginTop: "14px" }}>
        Grand Total: ${grandTotal}
      </h6>
    </div>
  );
};

export default Cart;
