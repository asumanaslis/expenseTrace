import { combineReducers } from "redux";
import personalExpense from "./personalExpense";
import previousScreen from "./previousScreen";
import groupExpense from "./groupExpense";

export default combineReducers({
  personalExpense,
  previousScreen,
  groupExpense,
});
