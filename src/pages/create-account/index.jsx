import React from "react";
import PageLayout from "../../layout/default-layout";
const CreateAccount = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="card mx-auto my-5 col-10 col-md-8 col-lg-6">
        <h3 className="card-title text-center">Hey Buddy</h3>
        <p className="card-text text-center">Welcome!</p>
        <div>
          <img src="/images/google icon.jpg" alt=""/>
        </div>
          <p>
Have an account already? Sign in</p>
        </div>
      </div>
      {/* <div classNameName="card row">
        <div classNameName="card-body">
        <div className="mx-auto col-10 col-md-8 col-lg-6">
          <div className="create-account">
            <h1>Hey Buddy </h1>
            <p>Welcome!</p>
            <div>
            <img src="/images/google icon.jpg" alt="google-icon" className="create-image" />
              <button class="my-5">
                Secondary
              </button>
              <img src="/images/facebook icon.jpg" alt="facebook-icon" />
              <button class="btn btn-outline-secondary">
                Secondary
              </button>
              <img src="/images/mail.jpg" alt="mail" />
              <button class="btn btn-outline-secondary">
          
                Secondary
              </button>
            </div>
          </div>
        </div>
        </div>
       
      </div> */}
    </PageLayout>
  );
};

export default CreateAccount;
