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

export const setCurrentUser = (description) => ({
  type: actions.SET_CURRENT_USER,
  payload: {
    email: description.email,
    name: description.name,
    id: description.id,
  },
});

export const groupCreated = (description) => ({
  type: actions.GROUP_CREATED,
  payload: {
    groupID: description.groupID,
    groupName: description.groupName,
    groupMembers: description.groupMembers,
    groupPassword: description.groupPassword,
    expenses: description.expenses,
    groupSubtitle: description.groupSubtitle,
  },
});
