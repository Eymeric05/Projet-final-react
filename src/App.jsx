import React, { useReducer } from "react";
import { initialState, expenseReducer } from "./reducers/expenseReducer";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalStats from "./components/TotalStats";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <div className="App">
      <header>
        <h1>Gestionnaire de Dépenses Personnelles</h1>
      </header>
      <ExpenseForm dispatch={dispatch} />
      <ExpenseList expenses={state.expenses} dispatch={dispatch} />
      <TotalStats expenses={state.expenses} />
    </div>
  );
}

export default App;
