import { Alert } from "react-native";

export const AUTH_ERRS = [
  {
    code: "auth/email-already-exits",
    message: "The provided email is already exits",
  },
  {
    code: "auth/internal-error",
    message: "Opps.. Unexpected Error, Try Again",
  },
  {
    code: "auth/invalid-email",
    message: "The provided email is invalid",
  },
  {
    code: "auth/invalid-password",
    message: "Your password must contain at least 6 characters",
  },
  {
    code: "auth/user-not-found",
    message: "The user you requested is not exists",
  },
  {
    code: "auth/too-many-requests",
    message: "You tried too many times, please try again later",
  },
  {
    code: "auth/wrong-password",
    message: "Incorret password",
  },
  // {
  //   code: "",
  //   message: "",
  // },
];
