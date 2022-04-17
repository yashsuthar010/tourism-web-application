import "./App.css";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/registration/Signup";
import Home from "./Home";
import Signin from "./pages/registration/Signin";
// import Expense from "./pages/expense/Expense";
import Pages from "./Pages";
import Expense from "./pages/expense/Expense";
import Explore from "./pages/explore/Explore";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/explore" element={<Explore />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
