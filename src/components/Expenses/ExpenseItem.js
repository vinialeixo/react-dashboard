import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./ExpenseItem.css";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandlres = () => {
    setTitle("Title Changed!!");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandlres}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
