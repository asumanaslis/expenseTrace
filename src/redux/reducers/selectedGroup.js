import * as actions from "../actionTypes";

export default function selectedGroup(state = "", action) {
  switch (action.type) {
    case actions.SELECTED_GROUP_CHANGED:
      return action.payload;

    default:
      return state;
  }
}
