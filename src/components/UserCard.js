import React from 'react';
import '../styles/styles.css';

const UserCard = ({ userData }) => {
  return (
    <div className="card-container">
      <div className="top-section">
        <img
          className="user-img"
          height="75px"
          width="75px"
          src={userData.image.replace('?user', userData.name)}
          alt="Image"
        />
      </div>
      <div className="bottom-section">
        <h3>{userData.name}</h3>
        <span className="user-info">{userData.email}</span>
        <span className="user-info">{userData.phone}</span>
        <span className="user-info">{userData.country}</span>
      </div>
    </div>
  );
};

export default UserCard;
