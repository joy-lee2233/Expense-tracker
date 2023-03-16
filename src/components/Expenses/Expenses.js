import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
      {props.items.map((expenses) => (
      <ExpenseItem
        key = {expenses.id}
        title = {expenses.title}
        amount = {expenses.amount}
        date = {expenses.date}
      />
      ))}
      
    </Card>
  );
}

export default Expenses;
