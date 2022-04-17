import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/Globalstate";

const Addtransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3 className="track">Add new transaction</h3>
      <hr
        style={{
          height: "1px",
          borderWidth: 0,
          color: "gray",
          backgroundColor: "gray",
          width: "680px",
        }}
      />
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="track">
            Text
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="track">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <hr
            style={{
              height: "1px",
              borderWidth: 0,
              color: "gray",
              backgroundColor: "gray",
              width: "680px",
            }}
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn track">Add transaction</button>
      </form>
    </>
  );
};

export default Addtransaction;
