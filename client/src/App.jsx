import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import WhyHireMe from "./Components/WhyHireMe/WhyHireMe";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <WhyHireMe/>
    </div>
  );
}

export default App;
