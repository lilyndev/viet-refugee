import useScreenOrientation from "react-hook-screen-orientation";
import { ParallaxBanner } from "react-scroll-parallax";
import imgBoatDark from "../src/images/0_intro_background_boat.jpg";
import imgBoatDarkForeground from "../src/images/0_intro_background_boat--foreground.png";
import imgBus from "../src/images/3_bus.jpg";
import imgCard from "../src/images/5_ripped_card.jpg";
import imgCardForeground from "../src/images/5_ripped_card--foreground.png";
import imgLocal from "../src/images/7_local.jpg";
import imgVungTau from "../src/images/8_vung_tau.jpg";
import imgEmptyHouse from "../src/images/10_emptyhouse.jpg";
import imgPants from "../src/images/10_pants.jpg";
import imgPrison from "../src/images/13_prison.jpg";
import imgReunited from "../src/images/15_reunited.jpg";
import imgReunitedForeground from "../src/images/15_reunited--foreground.png";
import imgMessenger from "../src/images/17_bike_messenger.jpg";
import imgFinalWords from "../src/images/19_final_words.jpg";
import imgBoatBlackWhite from "../src/images/21_boat_blackwhite.jpg";
import imgBoatColor from "../src/images/21_boat_color.jpg";
import imgRescue from "../src/images/23_the_rescue.jpg";
import imgBlack from "../src/images/black.jpg";

const ParallaxContent = () => {
  const screenOrientation = useScreenOrientation();

  if ((screenOrientation === "portrait-primary") | "portrait-secondary") {
    return <p>Please rotate your device to landscape mode.</p>;
  } else {
    return (
      <>
        <ParallaxBanner
          layers={[
            { image: imgBoatDark, speed: -20 },
            { image: imgBoatDarkForeground, speed: -10 },
          ]}
          className="parallax-banner"
        >
          <div className="bcg" id="slide-1">
            <div className="hsContainer dark">
              <div className="hsIntro">
                <h1>&quot;1988&quot;: A Vietnamese Boat Refugee Story</h1>
                <p className="byline">
                  By <a href="http://www.lilyn.dev">Lily Nguyen</a>
                </p>
                <span className="scroll-icon">Scroll</span>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-2">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  After the Fall of Saigon (now Ho Chi Minh City) and the end of
                  the <span className="italic-black-slide">Vietnam War</span> in
                  1975, over one million fled the country in southern Vietnam in
                  fear of retaliation by the <span className="red">communists</span>. Typically the
                  Vietnamese refugees would use old boats, facing the risks of
                  starvation, storms, and pirate attacks in the open sea.
                </p>
                <p>
                  My father was one of the Vietnamese boat people who&nbsp;
                  <span className="italic-black-slide">fled the country</span> in
                  1988 &#8212; five days after I was born.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBus,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-3">
            <div className="hsContainer dark">
              <div className="hsContent">
                <div className="content">
                  <p>
                    When my father made his <span className="italic-black-slide">first escape attempt</span>, at 21
                    years old, he had to travel for hours to get to the
                    awaiting boat by the seaside of Bến Tre,
                    far away from his hometown, Sài Gòn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-4">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  At a street café in Bến Tre, an anonymous helper gave my
                  father a <span className="green2">ripped card</span> as an identifier. The next day, my father
                  met with another person who checked&nbsp;
                  <span className="italic-black-slide">if his card matched</span>&nbsp;
                  to make sure that he wasn't a betrayer.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            { image: imgCard, speed: -20 },
            { image: imgCardForeground, speed: -10 },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-5">
            <div className="hsContainer light">
              <div className="hsContent">
                <div className="content">
                  <p>
                    Following the lead of the helper, my father&nbsp;
                    <span className="italic-black-slide">walked for hours</span> and took several buses to reach
                    the coast. At the same time they had to
                    keep an eye out for the <span className="red">communists</span> and not
                    awake suspicion among the locals.&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-6">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  When it turned dark, my father and a group of other Vietnamese
                  people were persecuted by the <span className="red">communists</span>. Suddenly they heard
                  <span className="red"> shooting</span> and had no choice but to&nbsp;
                  <span className="italic-black-slide">run away</span> and use the
                  money they had left to get back to the city.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgLocal,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-7">
            <div className="hsContainer dark">
              <div className="hsContent">
                <div className="content">
                  <p>
                    My father was <span className="italic-black-slide">determined</span> to make&nbsp;
                    a second attempt and traveled this time to
                    another city near the Southern coast of Vietnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgVungTau,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-8">
            <div className="hsContainer dark">
              <div className="hsContent">
                <div className="content">
                  <p>
                    At dawn the boat was waiting by the coast
                    of Vũng Tàu. But just when he thought the operation was
                    successful, the <span className="red">communists</span> caught on to the refugees and
                    everyone ran away in <span className="italic-black-slide">panic</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgEmptyHouse,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-9">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  In 1984, <span className="italic-black-slide">my mother</span>&nbsp;
                  encouraged my father to meet with a man she had met and whom
                  she believed would be able to get my father out of the
                  country. It turned out this man could not be trusted.
                </p>
                <p>
                  During this&nbsp;
                  <span className="italic-black-slide">third attempt</span>, my
                  father was left alone in a house far away in the country side.
                  Luckily, a local offered her help, because she knew that my
                  father had been <span className="red">deceived</span>.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgPants,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-10">
            <div className="hsContainer">
              <div className="hsContent">
                <div className="content">
                  <p>
                    Not having any money left, my father&nbsp;
                    <span className="italic-black-slide">begged</span> the woman to help him sell his pair of jeans
                    so that he could afford a return ticket home to Sài Gòn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-11">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  In 1985, at 23 years old, my father was close to achieving his
                  goal, <span className="italic-black-slide">sailing away</span>&nbsp;
                  near the seaside of Tiền Giang. The boat, however, got stuck
                  in the rocks and all the refugees were sentenced to <span className="red">prison</span>.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgPrison,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-12">
            <div className="hsContainer dark">
              <div className="hsContent">
                <div className="content">
                  <p>
                    Prisoners had to <span className="italic-black-slide">work</span> from 6 AM to 6 PM everyday
                    building a long road deep in the forest. Anyone who couldn't
                    handle the pressure was buried to the neck
                    in mud and left from morning to evening.
                  </p>
                  <p>
                    Family visits were only allowed twice a month. During
                    visitations, my mother and grandmother were allowed to give my father
                    a small bag of rice and only exchange a <span className="italic-black-slide">few words</span>&nbsp;
                    with each other.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            { image: imgReunited, speed: -20 },
            { image: imgReunitedForeground, speed: -10 },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-14">
            <div className="hsContainer light">
              <div className="hsContent">
                <div className="content">
                  <p>
                    After <span className="red">two years in prison</span>, my father was
                    reunited with my mother in 1987. But at
                    this point he had <span className="italic-black-slide">given up all hope</span> of leaving the
                    country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-15">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  In 1988, a few days after I was born, a bike&nbsp;
                  <span className="italic-black-slide">messenger</span> was sent
                  for my father. He was told that because he had attempted to
                  flee so many times without luck, the people in charge of the
                  refugee operation would to let him <span className="green2">board the last boat</span> without
                  having to pay the required deposit.
                </p>
                <p>
                  Because my mother had&nbsp;
                  <span className="italic-black-slide">just given birth</span>, my
                  father declined the offer and asked the woman in charge of the
                  operation to let my uncle go instead.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgMessenger,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-16">
            <div className="hsContainer dark">
              <div className="hsContent">
                <div className="content">
                  <p>
                    [The messenger]: &quot;How do I know he is your real
                    brother!? I can't just let him go instead of you.&quot;
                  </p>
                  <p>
                    [My father]: &quot;Please, I beg you! I swear he is my real
                    brother. I can't leave my wife and newborn daughter - I wish
                    you would let him go instead of me!&quot;
                  </p>
                  <p>
                    [The messenger]: &quot;...okay! But let me tell you that
                    this is the last boat. If you choose to stay, you will not
                    get another chance to leave the country!&quot;&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-17">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  When my uncle was about to leave the country, he&nbsp;
                  <span className="italic-black-slide">hesitated</span> and didn't
                  want to go without my father.
                </p>
                <p>
                  Filled with <span className="italic-black-slide">mixed emotions</span>, my father made the last minute
                  decision to leave the country together with my uncle <span className="red">without
                  my mother knowing</span>.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgFinalWords,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-18">
            <div className="hsContainer">
              <div className="hsContent">
                <div className="content">
                  <p>
                    My father's final words to the people in charge of the
                    refugee operation:
                  </p>
                  <p>
                    "I don't have anything left besides my house. If you let me
                    go with my brother and I come out of this alive, I will let my wife know to sell our house and pay you
                    back!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBlack,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-black" id="slide-19">
            <div className="hsContainer">
              <div className="hsContent">
                <p>
                  After three days in the <span className="italic-black-slide">open sea</span> and with only one potato and
                  a cup of water each day, my father, uncle, and 114 other
                  Vietnamese boat people were <span className="green2">rescued</span> by a German ship.
                </p>
                <p>
                  The German captain reported back home what he saw and his fear
                  that the refugees would not survive the coming storm - he was
                  told to let the Vietnamese boat people&nbsp;
                  <span className="italic-black-slide">board the ship</span>.
                </p>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBoatBlackWhite,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-20">
            <div className="hsContainer dark">
              <div className="hsContent">
                <div className="content">
                  <p>
                    My father could not believe that his dream
                    of a better future for his family had
                    come true.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgBoatColor,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-22">
            <div className="hsContainer">
              <div className="hsContent">
                <div className="content">
                  <p>The rescue in 1988.</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image: imgRescue,
              speed: -20,
            },
          ]}
          className="parallax-banner"
        >
          <div className="bcg slide-photo" id="slide-22">
            <div className="hsContainer">
              <div className="hsContent">
                <div className="content">
                  <p>The rescue in 1988.</p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxBanner>
      </>
    );
  }
};

export default ParallaxContent;
