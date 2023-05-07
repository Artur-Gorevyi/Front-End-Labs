import React from "react";
import Card from "../Card"
import ExpenseDate from "./ExpenseDate";
import {collection, addDoc, getDocs, deleteDoc, doc} from "firebase/firestore";
import db from '../../firebase-config.js';

const ExpenseItem = (props) => {
	
	const delExpense = async (props) => {
		if (window.confirm("\nDELETE '"+props.title+"' FOR $"+props.amount+"?") == true) {
			const expensesDocRef = doc(db, "EXPENSES",props.id)
			await deleteDoc(expensesDocRef);
		} 
	};
	
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
		<div className="delEx" onClick={() => {delExpense(props)}}><img src="https://www.clipartmax.com/png/full/112-1120803_trash-can-icon-white.png"/></div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;