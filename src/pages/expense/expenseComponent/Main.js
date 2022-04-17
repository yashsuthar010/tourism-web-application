import React from "react";
import "../main.css";
import Addtransaction from "./Addtransaction";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Transactionlist from "./Transactionlist";
import { GlogbalProvider } from "../../../context/Globalstate";

const Main = () => {
  return (
    <>
      <div className="child">
        <div className="child1">
          <h1 className="textE">Manage Your Expense...</h1>
          <p>
            The href attribute is required for an anchor to be keyboard
            accessible. Provide a valid, navigable address as the href value. If
            you cannot provide an href, but still need the element to resemble a
            link,
          </p>
          <button className="btn8">Get Started</button>
        </div>
        <div className="child2">
          <GlogbalProvider className="child3">
            <h2 className="track">Track Expense</h2>
            <div>
              <Balance />
              <IncomeExpense />
              <Transactionlist />
              <Addtransaction />
            </div>
          </GlogbalProvider>
        </div>
      </div>
    </>
  );
};

export default Main;
