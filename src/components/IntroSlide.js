import React from "react";
import SocialMediaShare from "./SocialMediaShare";

const IntroSlide = () => {
  return (
    <div className="container dark" id="slide-1">
      <header>
        <h1>&quot;1988&quot;: A Vietnamese Boat Refugee Story</h1>
        <p className="byline">
          By <a href="http://www.lilyn.tech">Lily Nguyen</a>
        </p>
        <SocialMediaShare />
        <span className="scroll-icon">Scroll</span>
      </header>
    </div>
  );
};

export default IntroSlide;
