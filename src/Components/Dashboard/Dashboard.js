//All The Imported Materials:
import React, { useState } from "react";
import "./Dashboard.css";
import userData from "../../fakeData/usersData.json";
import Users from "../Users/Users";
import Cart from "../Cart/Cart";

//Users Dashboard Component:
const Dashboard = () => {
  const data = userData.slice(0, 15);
  const [users, setUsers] = useState(data);
  const [cart, setCart] = useState([]);

  const handleHireEvent = (user) => {
    const newCart = [...cart, user];
    setCart(newCart);
  };

  return (
    <section className="users-dashboard">
      <div className="container">
        <main className="dashboard-wrapper">
          <div className="users-board">
            <div className="board-title">
              <h3>the best employers</h3>
              <p>select them for your company</p>
            </div>
            <div className="users-container">
              {users.map((userInfo) => (
                <Users userInfo={userInfo} key={userInfo.id} handleHireEvent={handleHireEvent}></Users>
              ))}
            </div>
          </div>
          <aside className="users-info-card">
            <h3>employers summary</h3>
              {
                <Cart cart={cart}></Cart>
              }
          </aside>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
