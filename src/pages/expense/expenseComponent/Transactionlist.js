import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Globalstate";
import Transaction from "./Transaction";

const Transactionlist = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3 className="track">History</h3>
      <hr
        style={{
          height: "1px",
          borderWidth: 0,
          color: "gray",
          backgroundColor: "gray",
          width: "680px",
        }}
      />
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default Transactionlist;
