import { combineReducers } from "redux";
import personalExpense from "./personalExpense";
import previousScreen from "./previousScreen";
import groupExpense from "./groupExpense";
import currentUser from "./currentUser";
import selectedGroup from "./selectedGroup";

export default combineReducers({
  personalExpense,
  previousScreen,
  groupExpense,
  currentUser,
  selectedGroup,
});
