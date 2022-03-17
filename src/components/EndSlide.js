import React from "react";
import SocialMediaShare from "./SocialMediaShare";
import imgDung1 from "../../src/images/dung-ly-1.jpg";
import imgDung2 from "../../src/images/dung-ly-2.jpg";
import imgDung3 from "../../src/images/dung-ly-letter-1.jpg";
import imgDung4 from "../../src/images/dung-ly-letter-2.jpg";

const EndSlide = () => {
  return (
    <div className="slide-end container">
      <div className="content">
        <p>
          After the rescue, my father worked at a refugee camp in Hong Kong.
          Thereafter, he was sent to Denmark. Two years later, my mother and I
          were reunited with my father.
        </p>
        <p>
          Amongst the boat people, my father became close friends with one man
          named Dung Ly. The last he heard from him was that Dung was living in
          Texas, USA. My father doesn't know where Dung is today but hopes that
          he will one day see Vinh again.
        </p>
        <figure className="media">
          <img src={imgDung1} alt="Dung Ly sitting in a library." />
          <img src={imgDung4} alt="text1" />
          <img src={imgDung2} alt="text2" />
          <img src={imgDung3} alt="text3" />
          <figcaption>Fig caption</figcaption>
        </figure>
      </div>
      <SocialMediaShare />
    </div>
  );
};

export default EndSlide;
