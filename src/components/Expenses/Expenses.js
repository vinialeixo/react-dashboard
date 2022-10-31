import ExpepensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./../UI/Card";
import { useState } from "react";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHander}
        />
        <ExpepensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
