import React from 'react';
import { useExpenses } from "../context/ExpenseContext";

  const ExpenseSummary = () => {

    const { expenses } = useExpenses();

    const totalExpenses = getTotalExpenses(expenses);
    const categoriesData = getExpensesByCategory(expenses);

    let highestCategory = {
      name: "none",
      amount: 0,
    };

    Object.entries(categoriesData).forEach(([category, amount]) => {
      if(amount > highestCategory.amount) {
        highestCategory = { name: category, amount: amount };
      }
    });
  
  return 
  <div>
    <div></div>
    <div></div>
    <div></div>
  </div>;
};

export default ExpenseSummary;