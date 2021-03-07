//All The Imported Materials:
import React from "react";
import "./Users.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

//Users Component:
const Users = (props) => {
// console.log(props);
const {img, name, title, institute, department, proffesion, salary, email} = props.userInfo;
const hireButton = props.handleHireEvent;

  return (
    <div className="single-user">
      <div className="img-box">
        <img src={img} alt="author-profile"/>
      </div>
      <div className="user-text">
        <h4>name: <span>{name}</span></h4>
        <p>title: <span>{title}</span></p>
        <p>institute: <span>{institute}</span></p>
        <p>department: <span>{department}</span></p>
        <p>profession: <span>{proffesion}</span></p>
        <p>salary-early: <span>${salary}</span></p>
        <p>email: <span>{email}</span></p>
      </div>
      <button className="hire-btn" onClick={() => hireButton(props.userInfo)}><FontAwesomeIcon icon={faUserPlus}/> hire me</button>
    </div>
  );
};

export default Users;
