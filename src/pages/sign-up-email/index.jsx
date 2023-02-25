import React from "react";
import PageLayout from "../../layout/default-layout";
import { BtnSmall } from "../../components/button/button";

const SignEmail = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="sign-email">
          <h1 className="sign-email-header text-center">Sign up with Email</h1>
          <p className="sign-email-text text-center">
            Enter your email address and we’ll send a passcode to your inbox.
          </p>
        </div>
        <form className="sign-up-form">
          <div class="row px-4 mt-4">
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">E-mail</div>
              <div class="col-10 ">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your email here"
                />
              </div>
            </div>
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">City</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your city here"
                />
              </div>
            </div>
          </div>
          <div class="row px-4 mt-4">
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">First name</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your first name here"
                />
              </div>
            </div>
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">Country</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your country here"
                />
              </div>
            </div>
          </div>
          <div class="row px-4 mt-4">
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">Last name</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your last name here"
                />
              </div>
            </div>
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">Password</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your password here"
                />
              </div>
            </div>
          </div>
          <div class="row px-4 mt-4">
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">Phone number</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your password here"
                />
              </div>
            </div>
            <div class="col-md-6 row mb-3">
              <div class="col-2 col-form-label form-label">Confirm Password</div>
              <div class="col-10">
                <input
                  type="text"
                  class="sign-up-input"
                  placeholder="Enter your first name here"
                />
              </div>
            </div>
          </div>

           
        </form>
        <div className="text-center my-5">
        <BtnSmall label="Proceed" type="submit"/>
        <p className="account-text my-2">Have an account already? <span className="sign-in-text">Sign in</span></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignEmail;
