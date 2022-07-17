import React, { useState } from "react";
import axios from "axios";

export default function Cart({ items, emptyCart }) {
  const [orderId, setOrderId] = useState(null);

  if (items.length === 0) {
    if (orderId) {
      return (
        <div className="col-sm">
          <div className="cart">
            <h2>Thank You for your order 😄</h2>
            <h4>Your order ID is: {orderId}</h4>
          </div>
        </div>
      );
    }
    return <div />;
  }

  const calculateTotals = (items) => {
    const subTotal = items.reduce(
      (acc, item) => Number(acc) + Number(item.price),
      0
    );

    const gst = subTotal * 0.07;
    const total = subTotal + gst;

    return { subTotal, gst, total };
  };

  const { subTotal, gst, total } = calculateTotals(items);

  const createOrder = () => {
    const { total } = calculateTotals(items);
    const order = { total, items };
    axios.post("/orders", order).then((result) => {
      setOrderId(result.data.order.id);
      emptyCart();
      //console.log(result);
    });
  };

  return (
    <div className="col-sm">
      <div className="cart">
        <h2>Cart</h2>
        {items.map((item, index) => (
          <div key={index}>
            {item.quantity} | {item.name} ${item.price}
          </div>
        ))}
        <div>
          <h4>Sub Total: ${subTotal}</h4>
          <h4>GST: ${gst.toFixed(2)}</h4>
          <h2>Total: ${total.toFixed(2)}</h2>
        </div>
        <button onClick={createOrder}>Create order</button>
      </div>
    </div>
  );
}
