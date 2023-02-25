import React from "react";
import PageLayout from "../../layout/default-layout";
import { Link } from "react-router-dom";
import { RouteLinks } from "../../routes/RouteLinks";
import { BtnSmall } from "../../components/button/button";

const SignIn = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="card create-account mx-auto my-5 col-10 col-md-8 col-lg-6">
        <div className="d-flex">
          <h3 className="card-title text-center">Hey Buddy</h3>
          <img src="/images/smiley.svg" alt="smiley"/>
        </div>
          <p className="card-text text-center">Welcome back!</p>
          <div className="card-section">
            <form>
              <div class="form-row">
                <div class="form-group col">
                  <label for="inputEmail4" className="form-label d-flex justify-content-center">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control card-details"
                    id="inputEmail4"
                    placeholder="Enter email here"
                  />
                </div>
                <div class="form-group col">
                  <label
                    for="inputPassword4 form-label"
                    className="form-label my-3  d-flex justify-content-center"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control card-details"
                    id="inputPassword4"
                    placeholder="Enter your Password here "
                  />
                </div>
              </div>
              <p className="d-flex justify-content-lg-end form-label  my-3 sign-in-text">
                Forgot password?
              </p>
            </form>
          </div>

          <div className="text-center my-2">
            <BtnSmall label="Proceed" type="submit" />
            <p className="account-text my-2">
              Have an account already?{" "}
              <Link to={RouteLinks.Dashboard}  style={{textDecoration: 'none'}}>    <span className="sign-in-text">Sign in</span></Link>
          
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignIn;
