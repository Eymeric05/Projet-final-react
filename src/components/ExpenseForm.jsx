import React, { useState } from "react";
import Select from "react-select";
const categories = ["Alimentation", "Logement", "Transport", "Divertissement", "Santé", "Éducation", "Autres"];

function ExpenseForm({ dispatch }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!label || !amount) return;

    const newExpense = {
      id: Date.now(),
      label,
      amount: parseFloat(amount),
      category,
    };

    dispatch({ type: "ADD_EXPENSE", payload: newExpense });
    setLabel("");
    setAmount("");
    setCategory(categories[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la dépense"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Montant (€)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ExpenseForm;
