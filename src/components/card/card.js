import React from "react";

const Card = ({
  img,
  cardText,
  dateText,
  locationText,
  readText,
  name,
  nameimage
}) => {
  return (
    <div className=" col-lg-4 col-md-4 card">
      <img src={img} alt="card" className="card-img-top img-fluid" />
      <h1 className="header">{cardText}</h1>
      <div className="">
        <ul className="details-list">
          <p className="date-text">{dateText}</p>
          <li>{readText}</li>
          <li>{locationText}</li>
          <i class="bi bi-bookmark bookmark-icon"></i>
        </ul>
      </div>
      <div className="profile-details">
        <img src={nameimage} alt="card" />
        <p className="profile-name">{name}</p>
      </div>
    </div>
  );
};

export default Card;
