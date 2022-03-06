import imgDung1 from "../../src/images/dung-ly-1.jpg";
import imgDung2 from "../../src/images/dung-ly-2.jpg";
import imgDung3 from "../../src/images/dung-ly-letter-1.jpg";
import imgDung4 from "../../src/images/dung-ly-letter-2.jpg";

const EndSlide = () => {
  return (
    <div className="slide-end">
      <div className="hsContainer">
        <div className="hsContent">
          <p>
            After the rescue, my father worked at a refugee camp in Hong Kong.
            Thereafter, he was sent to Denmark.
            Two years later, my mother and I were reunited with my father.
          </p>
          <p>
            Amongst the boat people, my father became close friends with one man named Dung Ly.
            The last he heard from him was that Dung was living in Texas, USA. 
            My father doesn't know where Dung is today but hopes that he will one day see Vinh again.
          </p>
          <div className="hsMedia">
            <img src={imgDung1} alt="Dung Ly sitting in a library." />
            <img src={imgDung4} alt="Logo1" />
          </div>
          <div className="hsMedia">
            <img src={imgDung2} alt="Logo2" />
            <img src={imgDung3} alt="Logo3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndSlide;