import React from "react";
import PageLayout from "../../layout/default-layout";
import { Link } from "react-router-dom";
import { RouteLinks } from "../../routes/RouteLinks";

const CreateAccount = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="card create-account mx-auto my-5 col-10 col-md-8 col-lg-6">
          <h3 className="card-title text-center">Hey Buddy</h3>
          <p className="card-text text-center">Welcome!</p>
          <div className="card-section">
            <div className="card-details">
              <img src="/images/google icon.jpg" alt="" />
              <p className="card-details-text">Sign up with Google</p>
            </div>
            <div className="card-details my-4">
              <img src="/images/facebook icon.jpg" alt="facebook-icon" />
              <p className="card-details-text">Sign up with Facebook</p>
            </div>
            <div className="card-details my-4">
              <img src="/images/mail.jpg" alt="mail-icon" />
              <Link to={RouteLinks.signEmail} style={{textDecoration: 'none'}}>
                <p className="card-details-text">Sign up with Email</p>
              </Link>
            </div>
          </div>

          <p className="account-text">
            Have an account already?{" "}
            <span className="sign-in-text">Sign in</span>
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default CreateAccount;
