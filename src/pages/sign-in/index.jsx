import React from "react";
import { useState } from "react";
import PageLayout from "../../layout/default-layout";
import { Link } from "react-router-dom";
import { RouteLinks } from "../../routes/RouteLinks";
import { BtnSmall } from "../../components/button/button";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const[ authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || true)
  );
  const users = [{ email: "k.bajcare@gmail.com", password: "tomike2014" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      navigate(RouteLinks.Dashboard);
    }
  };
  return (
    <PageLayout>
      <div className="container">
        <div className="card create-account mx-auto my-5 col-10 col-md-8 col-lg-6">
          <div className="d-flex">
            <h3 className="card-title text-center">Hey Buddy</h3>
            <img src="/images/smiley.svg" alt="smiley" />
          </div>
          <p className="card-text text-center">Welcome back!</p>
          <div className="card-section">
            <form onSubmit={handleSubmit}>
              <div class="form-row">
                <div class="form-group col">
                  <label
                    for="inputEmail4"
                    className="form-label d-flex justify-content-center"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email"
                    class="form-control card-details"
                    id="inputEmail4"
                    placeholder="Enter email here"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
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
                    name="Password"
                    class="form-control card-details"
                    id="inputPassword4"
                    placeholder="Enter your Password here "
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
              </div>
              <p className="d-flex justify-content-lg-end form-label  my-3 sign-in-text">
                Forgot password?
              </p>
              <div className="text-center my-2">
            <BtnSmall label="Proceed" type="submit" value="Submit" />
            <p className="account-text my-2">
              Have an account already?{" "}
              <Link
                to={RouteLinks.Dashboard}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <span className="sign-in-text">Sign in</span>
              </Link>
            </p>
          </div>
            </form>
          </div>

     
        </div>
      </div>
    </PageLayout>
  );
};

export default SignIn;
