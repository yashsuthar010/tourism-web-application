import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
import Cat from "./components/category/Cat";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cat />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
