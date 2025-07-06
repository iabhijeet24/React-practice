
import React from "react";
import "../components/usercard.css";

// ✅ Then your component
const UserCard = () => {
  return (
    <div className="user-container">
      <h3 id="user-name">Abhijeet Singh</h3>
      <img src="" id="user-image" alt="user" />
      <p id="user-desc">Description of ABHIJEET SINGH</p>
    </div>
  );
};

export default UserCard;
