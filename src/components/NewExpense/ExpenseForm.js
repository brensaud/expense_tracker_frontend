import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //   setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    //   });
    // });

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
      setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
      setDate(event.target.value);
    }

    const submitHandler = (event) => {
      event.preventDefault();
      const expenseData = {
        title: enteredTitle,
        amount: amount,
        date: new Date(date)
      }
      props.onSaveExpenseData(expenseData);
      // console.log(expenseData); 
      setEnteredTitle('')
      setAmount('')
      setDate('')
    };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01'
            value={amount} 
            onChange={amountChangeHandler} 
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31'
            value={date} 
            onChange={dateChangeHandler} 
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;