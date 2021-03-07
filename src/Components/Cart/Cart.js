//All The Imported Materials:
import React from "react";
import "./Cart.css";

//Cart Component:
const Cart = (props) => {
  const cart = props.cart;

  const totalSalary = cart.reduce((totalSalary, user) => totalSalary + user.salary, 0);

  return (
    <div className="employee-cart">
      <h4>total employee: {cart.length}</h4>
      <ul style={{listStyle: 'number'}}>
        {
          cart.map(user => (
            <li>{user.name}   ${user.salary}</li>
          ))
        }
      </ul>
      <h5>total salary: {totalSalary}</h5>
      <button className="done-btn">done</button>
    </div>
  );
};

export default Cart;
