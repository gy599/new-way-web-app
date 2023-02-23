import React from "react";
import PageLayout from "../../layout/default-layout";
import storyImage1 from "../../assets/img/Union.jpg"
import storyImage2 from "../../assets/img/Union2.jpg"
import { BtnSmall } from "../../components/button/button";
const OurStory = () => {
  return (
    <PageLayout>
      <div className="container">
        <div className="story-content-one d-lg-flex align-items-center d-flex-md-column">
          <div className="story-details">
            <h1 className="details-header">
              Every tech lover (Mentors and enthusiast) needs to part of the
              NEWWAY tech space
            </h1>
            <p className="details-text">
              NEWWAY is a tech space where every idea is not wasted , those
              ideas and content of yours gives value to thousands of techies
              with impostor syndrome. Here, you will boost your confidence in
              your tech line of interest. You will set goals and stay put until
              you take shape, take off, and spark powerful conversations. We’re
              an open platform where over 100 million readers and content
              watchers come to find insightful and dynamic thinking. Here,
              mentors can be birthed and undiscovered voices alike can come up
              to speed. Our purpose is to aid visibility and condor the effect
              of impostor syndrome as we build confidence by allowing blogging,
              content creation, setting of digital goals, digital donation for
              supporters to partake in Newway learning. This is a space that is
              open to everyone And it’s where deeper connections forged between
              mentors and enthusiast via our mentorship feature and creation of
              communities. Together with millions of collaborators, we’re
              building a trusted and vibrant ecosystem fueled by important ideas
              and the people who think about them.
            </p>
          </div>
          <img src={storyImage1} alt="story"/>
        </div>
        <div className="story-content-one d-lg-flex align-items-center d-flex-sm-column">
          <div className="story-details">
            <h1 className="details-header">
            Get more by becoming a member
            </h1>
            <p className="details-text">
            Become a NEWWAY buddy to enjoy unlimited access to our digital write ups, 
content videos and direct support from mentors, create community and earn.
            </p>
<BtnSmall label="Get Started" type="submit"/>
          </div>
          <img src={storyImage2} alt="story" />
        </div>
      </div>
    </PageLayout>
  );
};

export default OurStory;
