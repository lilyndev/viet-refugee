import React from "react";
import SocialMediaShare from "./SocialMediaShare";

const IntroSlide = () => {
  return (
    <div className="container xtra-dark" id="slide-1">
      <SocialMediaShare />
      <header>
        <h1>&quot;1988&quot;: A Vietnamese Boat Refugee Story</h1>
        <p className="byline">By Lily Nguyen</p>
        <span className="scroll-icon">Scroll</span>
      </header>
    </div>
  );
};

export default IntroSlide;
