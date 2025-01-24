function TotalStats({ expenses }) {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
    const totalsByCategory = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
      return acc;
    }, {});
  
    return (
      <div>
        <h2>Total des Dépenses</h2>
        <p>Montant Total : {total.toFixed(2)}€</p>
        <h3>Total par Catégorie</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.keys(totalsByCategory).map((category) => (
            <li key={category}>
              {category} : {totalsByCategory[category].toFixed(2)}€
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TotalStats;
  