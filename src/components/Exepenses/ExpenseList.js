import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  let expenseContent =
    props.items.length === 0 ? (
      <h2 className="expenses-list__fallback ">No expenses found</h2>
    ) : (
      props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    );

  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpenseList;
