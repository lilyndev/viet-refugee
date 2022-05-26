import React from "react";

const IntroSlide = () => {
  return (
    <div className="slide-intro container xtra-dark" id="slide-1">
      <header>
        <h1>Viet Refugee</h1>
        <div className="slide-intro__info">
          <p>
            A boat refugee story of how my father fled Vietnam in 1988 after his
            fifth try.
          </p>
          <div className="byline">By Lily Nguyen</div>
        </div>
        <div className="scroll-icon">
          <span>Scroll</span>
          <svg
            id="scroll-down"
            width="16"
            height="34"
            viewBox="0 0 16 34"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                id="scroll-down-line"
                d="M7.99999 34L15.7942 24.25H0.205765L7.99999 34Z"
                fill="#ffffff"
              />
              <path
                id="scroll-down-arrow"
                d="M6.99999 0H8.99999V31H6.99999V0Z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </div>
      </header>
    </div>
  );
};

export default IntroSlide;
