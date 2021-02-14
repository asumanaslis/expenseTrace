import * as actions from "../actionTypes";
import randomColor from "randomcolor";

let lastId = 0;

export default function groupExpense(state = [], action) {
  switch (action.type) {
    case actions.GR_EXPENSE_ADDED:
      return state.map((item) => {
        if (item.groupID !== action.payload.groupID) {
          return item;
        } else {
          return [
            ...item,
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
        }
      });
    case actions.GROUP_CREATED:
      return [
        ...state,
        {
          groupID: action.payload.groupID,
          groupName: action.payload.groupName,
          groupSubtitle: action.payload.groupSubtitle,
          groupMembers: action.payload.groupMembers,
          groupPassword: action.payload.groupPassword,
          expenses: action.payload.expenses,
          date: new Date(),
        },
      ];

    default:
      return state;
  }
}

/*
{
              id: ++lastId,
              category: action.payload.category,
              expenseTitle: action.payload.title,
              categorySubtitle: action.payload.subtitle,
              price: action.payload.price,
              color: randomColor(),
              date: new Date(),
            },
*/
