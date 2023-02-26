import React from "react";
import PageLayout from "../../layout/default-layout";
import { BtnSmall } from "../../components/button/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Profile = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1
    };
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
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
        </div>
    </PageLayout>
  );
};

export default Profile;
