import rotateDevice from "../../src/images/rotate-landscape.svg";

const ScreenOrientationMsg = () => {
  return (
    <div className="screen-orientation-msg">
      <h1>Welcome</h1>
      <img src={rotateDevice} alt="phone device rotated to landscape mode" />
      <p className="large">
        To view this website, please rotate your device to landscape mode.
      </p>
      <p>
        If the screen does not rotate, make sure your screen orientation is
        unlocked.
      </p>
      <footer>VietRefugee.com</footer>
    </div>
  );
};

export default ScreenOrientationMsg;
