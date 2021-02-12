import * as actions from "../actionTypes";
import randomColor from "randomcolor";

let lastId = 0;

export default function personalExpense(state = [], action) {
  switch (action.type) {
    case actions.PER_EXPENSE_ADDED:
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

    default:
      return state;
  }
}
