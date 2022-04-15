import "./App.css";

import { Routes, Route } from "react-router-dom";
import Signup from "./pages/registration/Signup";
import Home from "./Home";
import Signin from "./pages/registration/Signin";
// import Expense from "./pages/expense/Expense";
import Pages from "./Pages";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/expense" element={<Pages />} />

        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
