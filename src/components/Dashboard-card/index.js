import React from "react";

const DashboardCard = ({
  img,
  DashboardText,
  DashboardImage,
  DashboardName,
}) => {
  return (
    <div className=" col-lg-4 col-md-4 card">
      <img src={img} alt="card" className="card-img-top img-fluid" />
      <div className="d-flex justify-content-between">
        <div className="profile-details">
          <img src={DashboardImage} alt="card" />
          <p className="profile-name">{DashboardName}</p>
        </div>
        <div className="d-flex ">
          <img src="/images/image 7.svg" alt="dashboard" />
          <img src="/images/image 7.svg" alt="dashboard" />
          <img src="/images/image 7.svg" alt="dashboard" />
        </div>
      </div>
      <h6 className="">{DashboardText}</h6>
      <div className="d-flex justify-content-evenly">
        <div>
          <img src="/images/Vector.svg" alt="vector" />
        </div>
        <div>
          <img src="/images/Vector.svg" alt="vector" />
        </div>
        <div>
          <img src="/images/Vector.svg" alt="vector" />
        </div>
        <div>
          <img src="/images/Vector.svg" alt="vector" />
        </div>
        <div>
          <img src="/images/Vector.svg" alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
