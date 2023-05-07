import React, { useState, useEffect }  from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Loader from './components/Loader/Loader';

import db from './firebase-config.js';
import {collection, addDoc, getDocs, deleteDoc, doc} from "firebase/firestore";

const App = () => {
	
  const canLoad = true;
  const [loading, setLoading] = useState(false);
	
  const [expenses, setExpenses] = useState([]);
  const expensesCollRef = collection(db, "EXPENSES")
 
  
  useEffect(() => {
	  if (canLoad) {
		  setLoading(true);
		  
		  const getExpenses = async () => {
			  
			  const data = await getDocs(expensesCollRef);
			  
			  setExpenses(data.docs.map((doc) => ({
			  id: doc.id,
			  title: doc.data().title,
			  amount: doc.data().amount,
			  date: doc.data().date.toDate()
			  })));
			  
			  
			setLoading(false);
		  };
		  
		  getExpenses();
	  }
  }, []);
  
  const addExpenseHandler = async (expense) => {
	  
	setLoading(true);
    if (canLoad) {
		
	   
		await addDoc(expensesCollRef, expense);
		const newExpense = { ...expense };
		
		setExpenses((previousArray) => {
		  return [expense, ...previousArray];
		});
	}
	else console.log("cannot load data")
    setLoading(false);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
	  {loading ? <Loader /> : expenses.length > 0 ? <Expenses items={expenses} /> : <Expenses items={expenses} />}
	</div>
  );
};


export default App;