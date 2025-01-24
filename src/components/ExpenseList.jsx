function ExpenseList({ expenses, dispatch }) {
    return (
      <div>
        <h2>Liste des Dépenses</h2>
        {expenses.length === 0 && <p>Aucune dépense enregistrée.</p>}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {expenses.map((expense) => (
            <li key={expense.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ccc" }}>
              <div>
                <strong>{expense.label}</strong> - {expense.amount.toFixed(2)}€ ({expense.category})
              </div>
              <button
                onClick={() => dispatch({ type: "DELETE_EXPENSE", payload: expense.id })}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px",
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExpenseList;
  