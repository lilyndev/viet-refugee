import React from "react";
import ContactUs from "./Contact";
import imgDung1 from "../../src/images/dung-ly-1.jpg";
import imgDung2 from "../../src/images/dung-ly-letter-2.jpg";
import imgDung3 from "../../src/images/dung-ly-2.jpg";
import imgDung4 from "../../src/images/dung-ly-letter-1.jpg";

const EndSlide = () => {
  return (
    <div className="slide-end container">
      <div className="content">
        <h2>After the Rescue</h2>
        <p>
          After the rescue, Van An Nguyen worked at a refugee camp in Hong Kong.
          After that, An was sent to Denmark because his sister already lived
          there. Two years later, visas were approved for his wife and daughter
          to move to Denmark, and in 1994 they became a family of six.
        </p>
        <h3>Looking for Long-Lost Friend</h3>
        <p>
          When An fled Vietnam in 1988, he became close friends with Dung Ly
          amongst the boat people. But An lost contact with Dung in the 90s and
          hopes that sharing his story today will help him reconnect with his
          long-lost friend. The last An heard from Dung was that he had moved to
          Texas, USA, and below are photos that Dung had sent to An. Please
          contact the Nguyen family via email or share this story if you have
          any information that might be helpful.
        </p>
        <figure className="media">
          <img src={imgDung1} alt="" />
          <img src={imgDung2} alt="" />
          <img src={imgDung3} alt="" />
          <img src={imgDung4} alt="" />
          <figcaption>
            Photos of Dung Ly with hand-written notes on the back-side of each
            photo from 1988 and 1989.
          </figcaption>
        </figure>
      </div>
      <ContactUs />
    </div>
  );
};

export default EndSlide;
