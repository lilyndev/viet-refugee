import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import BlackSLide from "./BlackSlide";
import PhotoSlide from "./PhotoSlide";
import IntroSlide from "./IntroSlide";
import EndSlide from "./EndSlide";
import imgBoatDark from "../../src/images/0_intro_background_boat.webp";
import imgBoatDarkForeground from "../../src/images/0_intro_background_boat--foreground.png";
import imgBus from "../../src/images/3_bus.webp";
import imgCard from "../../src/images/5_ripped_card.webp";
import imgCardForeground from "../../src/images/5_ripped_card--foreground.png";
import imgLocal from "../../src/images/7_local.webp";
import imgVungTau from "../../src/images/8_vung_tau.webp";
import imgPantsBackground from "../../src/images/10_pants--background.webp";
import imgPantsForeground from "../../src/images/10_pants--foreground.png";
import imgPrison from "../../src/images/13_prison.webp";
import imgReunited from "../../src/images/15_reunited.webp";
import imgReunitedForeground from "../../src/images/15_reunited--foreground.png";
import imgMessenger from "../../src/images/17_bike_messenger.webp";
import imgFinalWords from "../../src/images/19_final_words.webp";
import imgBoatBlackWhite from "../../src/images/21_boat_blackwhite.webp";
import imgBoatColor from "../../src/images/21_boat_color.webp";
import imgRescue from "../../src/images/23_the_rescue.webp";
import imgBlack from "../../src/images/black.webp";
import ScreenOrientationMsg from "./ScreenOrientationMsg";

const ParallaxContent = () => {
  return (
    <>
      <div className="content-orientation-portrait">
        <ScreenOrientationMsg />
      </div>
      <div className="content-orientation-landscape">
        <article>
          <ParallaxBanner
            layers={[
              { image: imgBoatDark, speed: -20 },
              { image: imgBoatDarkForeground, speed: -10 },
            ]}
            className="parallax-banner"
          >
            <IntroSlide />
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
            <BlackSLide slideId="slide-2">
              <p>
                After the Fall of Saigon (now Ho Chi Minh City) and the end of
                the <span className="italic">Vietnam War</span> in 1975, over
                one million fled the country in southern Vietnam in fear of
                retaliation by the&nbsp;<span className="red">communists</span>.
                Typically the Vietnamese refugees would use old boats, facing
                the risks of starvation, storms, and pirate attacks in the open
                sea.
              </p>
              <p>
                My father, Van An Nguyen, was one of the Vietnamese boat people
                who&nbsp;<span className="italic">fled the country</span>&nbsp;
                in 1988 after his fifth try.
              </p>
            </BlackSLide>
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
            <PhotoSlide slideId="slide-3" overlay="dark">
              <p>
                When my father made his&nbsp;
                <span className="italic">first escape attempt</span>, at 21
                years old, he had to travel for hours to get to the awaiting
                boat by the seaside of Bến Tre, far away from his hometown, Sài
                Gòn.
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-4">
              <p>
                At a street café in Bến Tre, an anonymous helper gave my father
                a <span className="green">ripped card</span> as an identifier.
                The next day, my father met with another person who
                checked&nbsp;<span className="italic">if his card matched</span>
                &nbsp; to make sure that he wasn't a betrayer.
              </p>
            </BlackSLide>
          </ParallaxBanner>
          <ParallaxBanner
            layers={[
              { image: imgCard, speed: -20 },
              { image: imgCardForeground, speed: -10 },
            ]}
            className="parallax-banner"
          >
            <PhotoSlide slideId="slide-5" overlay="dark">
              <p>
                Following the lead of the helper, my father&nbsp;
                <span className="italic">walked for hours</span>&nbsp; and took
                several buses to reach the coast. At the same time they had to
                keep an eye out for the&nbsp;
                <span className="red">communists</span> and not awake suspicion
                among the locals.&nbsp;
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-6">
              <p>
                When it turned dark, my father and a group of other Vietnamese
                people were persecuted by the&nbsp;
                <span className="red">communists</span>. Suddenly they heard{" "}
                <span className="red"> shooting</span> and had no choice but
                to&nbsp;<span className="italic">run away</span> and use the
                money they had left to get back to the city.
              </p>
            </BlackSLide>
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
            <PhotoSlide slideId="slide-7">
              <p>
                My father was&nbsp;<span className="italic">determined</span> to
                make a second attempt and traveled this time to another city
                near the Southern coast of Vietnam.
              </p>
            </PhotoSlide>
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
            <PhotoSlide slideId="slide-8" overlay="dark">
              <p>
                At dawn the boat was waiting by the coast of Vũng Tàu. But just
                when he thought the operation was successful, the&nbsp;
                <span className="red">communists</span> caught on to the
                refugees and everyone ran away in&nbsp;
                <span className="italic">panic</span>.
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-9">
              <p>
                In 1984, <span className="italic">my mother</span> encouraged my
                father to meet with a man she had met and whom she believed
                would be able to get my father out of the country. It turned out
                this man could not be trusted.
              </p>
              <p>
                During this&nbsp;<span className="italic">third attempt</span>,
                my father was left alone in a house far away in the country
                side. Luckily, a local offered her help, because she knew that
                my father had been <span className="red">deceived</span>.
              </p>
            </BlackSLide>
          </ParallaxBanner>
          <ParallaxBanner
            layers={[
              { image: imgPantsBackground, speed: -20 },
              { image: imgPantsForeground, speed: -10 },
            ]}
            className="parallax-banner"
          >
            <PhotoSlide slideId="slide-10" overlay="dark">
              <p>
                Not having any money left, my father{" "}
                <span className="italic">begged</span> the woman to help him
                sell his pair of jeans so that he could afford a return ticket
                home to Sài Gòn.
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-11">
              <p>
                In 1985, at 23 years old, my father was close to achieving his
                goal, <span className="italic">sailing away</span> near the
                seaside of Tiền Giang. The boat, however, got stuck in the rocks
                and all the refugees were sentenced to{" "}
                <span className="red">prison</span>.
              </p>
            </BlackSLide>
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
            <PhotoSlide slideId="slide-12" overlay="light">
              <p>
                Prisoners had to <span className="italic">work</span> from 6 AM
                to 6 PM everyday building a long road deep in the forest. Anyone
                who couldn't handle the pressure was buried to the neck in mud
                and left from morning to evening.
              </p>
              <p>
                Family visits were only allowed twice a month. During
                visitations, my mother and grandmother were allowed to give my
                father a small bag of rice and only exchange a{" "}
                <span className="italic">few words</span> with each other.
              </p>
            </PhotoSlide>
          </ParallaxBanner>
          <ParallaxBanner
            layers={[
              { image: imgReunited, speed: -20 },
              { image: imgReunitedForeground, speed: -10 },
            ]}
            className="parallax-banner"
          >
            <PhotoSlide slideId="slide-14">
              <p>
                After <span className="red">two years in prison</span>, my
                father was reunited with my mother in 1987. But at this point he
                had <span className="italic">given up all hope</span> of leaving
                the country.
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-15">
              <p>
                In the Spring of 1988 a bike{" "}
                <span className="italic">messenger</span> was sent for my
                father. He was told that because he had attempted to flee so
                many times without luck, the people in charge of the refugee
                operation would to let him{" "}
                <span className="green">board the last boat</span> without
                having to pay the required deposit.
              </p>
              <p>
                Because my mother had{" "}
                <span className="italic">just given birth</span>, my father
                declined the offer and asked the woman in charge of the
                operation to let my uncle go instead.
              </p>
            </BlackSLide>
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
            <PhotoSlide slideId="slide-16" overlay="dark">
              <p>
                [The messenger]: &quot;How do I know he is your real brother!? I
                can't just let him go instead of you.&quot;
              </p>
              <p>
                [My father]: &quot;Please, I beg you! I swear he is my real
                brother. I can't leave my wife and newborn daughter - I wish you
                would let him go instead of me!&quot;
              </p>
              <p>
                [The messenger]: &quot;...okay! But let me tell you that this is
                the last boat. If you choose to stay, you will not get another
                chance to leave the country!&quot;&nbsp;
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-17">
              <p>
                When my uncle was about to leave the country, he&nbsp;
                <span className="italic">hesitated</span> and didn't want to go
                without my father.
              </p>
              <p>
                Filled with&nbsp;
                <span className="italic">mixed emotions</span>, my father made
                the last minute decision to leave the country together with my
                uncle&nbsp;
                <span className="red">without my mother knowing</span>.
              </p>
            </BlackSLide>
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
            <PhotoSlide slideId="slide-18" overlay="light">
              <p>
                My father's final words to the people in charge of the refugee
                operation:
              </p>
              <p>
                &quot;I don't have anything left besides my house. If you let me
                go with my brother and I come out of this alive, I will let my
                wife know to sell our house and pay you back!&quot;
              </p>
            </PhotoSlide>
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
            <BlackSLide slideId="slide-19">
              <p>
                After three days in the&nbsp;
                <span className="italic">open sea</span> and with only one
                potato and a cup of water each day, my father, uncle, and 114
                other Vietnamese boat people were&nbsp;
                <span className="green">rescued</span> by a German ship.
              </p>
              <p>
                The German captain reported back home what he saw and his fear
                that the refugees would not survive the coming storm - he was
                told to let the Vietnamese boat people&nbsp;
                <span className="italic">board the ship</span>.
              </p>
            </BlackSLide>
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
            <PhotoSlide slideId="slide-20"></PhotoSlide>
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
            <PhotoSlide slideId="slide-21">
              <p>Photos from the rescue in 1988 (1/2)</p>
            </PhotoSlide>
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
            <PhotoSlide slideId="slide-22">
              <p>Photos from the rescue in 1988 (2/2)</p>
            </PhotoSlide>
          </ParallaxBanner>
          <EndSlide />
        </article>
      </div>
    </>
  );
};

export default ParallaxContent;
