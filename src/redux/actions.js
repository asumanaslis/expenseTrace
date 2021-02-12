import * as actions from "./actionTypes";

export const perExpenseAdded = (description) => ({
  type: actions.PER_EXPENSE_ADDED,
  payload: {
    title: description.title,
    category: description.category,
    subtitle: description.subtitle,
    price: description.price,
  },
});

export const navChanged = (description) => ({
  type: actions.NAV_CHANGED,
  payload: {
    routeName: description,
  },
});

export const grExpenseAdded = (description) => ({
  type: actions.GR_EXPENSE_ADDED,
  payload: {
    title: description.title,
    category: description.category,
    subtitle: description.subtitle,
    price: description.price,
  },
});
