import React from "react";
import PageLayout from "../../layout/default-layout";
import { Input } from "../../components/input/input";
import { BtnSmall } from "../../components/button/button";

const EditProfile = () => {
  return (
    <PageLayout>
      <div className="edit-profile">
        <div className="profile-section text-center">
          <div className="">
            <div className="profile-picture">
              <img src="/images/logo.svg" alt="logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center gap-5 my-3">
            <button class="btn btn-primary" type="button">
              Change
            </button>
            <button class="btn btn-outline-secondary">Remove</button>
          </div>
          <p className="text-center" style={{color:'blue'}}>
            Bio: ‘Keep going, even when the going gets tough’
          </p>
          <div className="edit-profile-form container my-5">
            {" "}
            <div className="row">
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="First Name"
                  placeholder="Enter your first name"
                  type="text"
                  name="first name"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="Last Name"
                  placeholder="Enter your last name"
                  type="text"
                  name="last name"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="Phone number"
                  placeholder="Enter your phone nummber"
                  type="text"
                  name="phone-number"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="Email Address"
                  placeholder="Enter your email address"
                  type="text"
                  name="email-address"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="Country"
                  placeholder="Enter your country"
                  type="text"
                  name="country"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="linkedIn Profile"
                  placeholder="Enter your linkedIn profile"
                  type="text"
                  name="profile"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="col-md-6 col-lg-6 col-12">
                <Input
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  type="password"
                  name="confirm-password"
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-5 my-3">
            <BtnSmall label="Save" />
            <button class="btn btn-outline-primary">Cancel</button>
          </div>
          {/* <Link to={RouteLinks.editProfile}>
          <BtnSmall label="Edit Profile" />
          </Link> */}
        </div>
      </div>
    </PageLayout>
  );
};

export default EditProfile;
