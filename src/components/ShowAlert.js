import { AUTH_ERRS } from "../firebase/errors";
import { Alert } from "react-native";

export const showAlert = (error) => {
  const errorMessage = (error) => {
    var i;
    for (i = 0; i < AUTH_ERRS.length; i++) {
      if (AUTH_ERRS[i].code == error.code) {
        return AUTH_ERRS[i].message;
      }
    }
    return error.message;
  };

  Alert.alert(null, errorMessage(error), [
    {
      text: "OK",
      style: "cancel",
    },
  ]);
};
