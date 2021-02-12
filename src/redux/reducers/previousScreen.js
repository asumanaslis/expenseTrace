import * as actions from "../actionTypes";

export default function previousScreen(state = "Personal", action) {
  switch (action.type) {
    case actions.NAV_CHANGED:
      return action.payload;

    default:
      return state;
  }
}
