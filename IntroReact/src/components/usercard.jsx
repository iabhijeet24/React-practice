
import React from "react";
import "../components/usercard.css";

const UserCard = ({name , age , image}) => {
 
  return (
    <div className="user-container">
       <img src={image} id="user-image" alt={`${name}'s profile picture`} />
      <h3 id="user-name">{name}</h3>
      <h4 id="user-age">{age}</h4>
      <p id="user-desc">Description of {name}</p>
    </div>
  );
};

export default UserCard;
