import * as actions from "../actionTypes";

export default function currentUser(state = [], action) {
  switch (action.type) {
    case actions.SET_CURRENT_USER:
      return action.payload;

    default:
      return state;
  }
}
