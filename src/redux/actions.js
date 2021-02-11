import * as actions from "./actionTypes";

export const expenseAdded = (description) => ({
  type: actions.EXPENSE_ADDED,
  payload: {
    title: description.title,
    category: description.category,
    subtitle: description.subtitle,
    price: description.price,
  },
});
