export const initialState = {
    expenses: [],
  };
  
  export const expenseReducer = (state, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        return {
          ...state,
          expenses: [...state.expenses, action.payload],
        };
      case "DELETE_EXPENSE":
        return {
          ...state,
          expenses: state.expenses.filter((expense) => expense.id !== action.payload),
        };
      default:
        return state;
    }
  };
  