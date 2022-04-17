import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Main from "./expenseComponent/Main";

const Expense = () => {
  return (
    <>
      <Navbar />
      <div className="parent">
        <Main />
      </div>
    </>
  );
};

export default Expense;
