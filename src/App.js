import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
import Cat from "./components/category/Cat";
// import Trend from "./components/Trending/Trend";
import AutoPlay from "./components/Trending/Trend";
import "slick-carousel/slick/slick.min";
import Videos from "./components/Video/Videos";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cat />
      <AutoPlay />
      <Videos />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
