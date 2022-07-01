import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxContent from "./components/ParallaxContent";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <ParallaxContent />
      </div>
    </ParallaxProvider>
  );
}

export default App;
