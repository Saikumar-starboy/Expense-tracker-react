import React from "react";

import "./ExpenseItem.css";
import Expensedate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails.js"

const expenseItem = (props) => {

    const clickHandler = () => {
        console.log('clicked!!!!');
    }
  
  return (
    <div>
      <div  className="expense-item">
       <Expensedate date={props.date}/>
       <ExpenseDetails title={props.title} amount={props.amount}/>
       <button onClick={clickHandler}>Change Title</button>
        
      </div>
    </div>
  );
}

export default expenseItem;