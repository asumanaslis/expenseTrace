import * as actions from "../actionTypes";
import randomColor from "randomcolor";

let lastId = 0;

export default function groupExpense(state = [], action) {
  switch (action.type) {
    case actions.GR_EXPENSE_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          category: action.payload.category,
          expenseTitle: action.payload.title,
          categorySubtitle: action.payload.subtitle,
          price: action.payload.price,
          color: randomColor(),
          date: new Date(),
        },
      ];
    case actions.GROUP_CREATED:
      return [
        ...state,
        {
          groupID: action.payload.groupID,
          groupName: action.payload.groupName,
          groupMembers: action.payload.groupMembers,
          groupPassword: action.payload.groupPassword,
          expenses: action.payload.expenses,
        },
      ];

    default:
      return state;
  }
}