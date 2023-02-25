import React from "react";
import PageLayout from "../../layout/default-layout";
import { BtnSmall } from "../../components/button/button";

const Profile = () => {
  return (
    <PageLayout>
      <div className="profile">
        <div className="profile-section text-center">
          <div className="d-flex  justify-content-center align-items-baseline">
            <div className="profile-picture">
              <img src="/images/logo.svg" alt="logo" />
              <p className="profile-name">Zoe Smith</p>
            </div>
            <p className="profile-picture-text">Edit Profile Picture</p>
          </div>
          <div className="d-lg-flex d-md-flex justify-content-center gap-5 d-flex-sm-column">
            <div>
              <p className="profile-number">20</p>
              <p className="profile-number">Followers</p>
            </div>
            <div>
              <p className="profile-number">50</p>
              <p className="profile-number">Following</p>
            </div>
            <div>
              <p className="profile-number">10</p>
              <p className="profile-number">Number of likes</p>
            </div>
          </div>
          <BtnSmall label="Edit Profile" />
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
