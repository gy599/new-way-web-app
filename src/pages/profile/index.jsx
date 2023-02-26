import React from "react";
import PageLayout from "../../layout/default-layout";
import { BtnSmall } from "../../components/button/button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div class="row">
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img src="/images/T-img1.jpg" alt="profile" />
                <p  className="blog-post-text">Road maps in Product Design</p>
                <p  className="blog-post-text">13/02/23</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img src="/images/T-img1.jpg" alt="profile" />
                <p  className="blog-post-text">Road maps in Product Design</p>
                <p  className="blog-post-text">13/02/23</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img src="/images/T-img1.jpg" alt="profile" />
                <p  className="blog-post-text">Road maps in Product Design</p>
                <p  className="blog-post-text">13/02/23</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <img src="/images/T-img1.jpg" alt="profile" />
                <p  className="blog-post-text" >Road maps in Product Design</p>
                <p  className="blog-post-text">13/02/23</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="profile-name">Blog posts</h1>
          <div className="d-flex gap-3">
            <img src="/images/T-img1.jpg" alt="profile" />
            <div>
              <p className="blog-posts-header">
                Understanding the principles of design in the 21st century{" "}
              </p>
              <div className="d-flex gap-2">
                <p className="blog-post-text">Feb 2</p>
                <p className="blog-post-text">5 mins read</p>
                <p className="blog-post-text">Lisbon</p>
              </div>
            </div>
          </div>
          <div className="d-flex my-5 gap-3">
            <img src="/images/T-img1.jpg" alt="profile" />
            <div>
              <p className="blog-posts-header">
                Understanding the principles of design in the 21st century{" "}
              </p>
              <div className="d-flex gap-2">
                <p className="blog-post-text">Feb 2</p>
                <p className="blog-post-text">5 mins read</p>
                <p className="blog-post-text">Lisbon</p>
              </div>
            </div>
          </div>
          <div className="d-flex my-5 gap-3">
            <img src="/images/T-img1.jpg" alt="profile" />
            <div>
              <p className="blog-posts-header">
                Understanding the principles of design in the 21st century{" "}
              </p>
              <div className="d-flex gap-2">
                <p className="blog-post-text">Feb 2</p>
                <p className="blog-post-text">5 mins read</p>
                <p className="blog-post-text">Lisbon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
