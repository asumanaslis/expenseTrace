import { StyleSheet } from "react-native";
import { BLUE } from "../styles/colors";

export const customStyles = StyleSheet.create({
  title: {
    paddingTop: 50,
    fontSize: 36,
    marginLeft: 25,
    color: BLUE,
    fontWeight: "700",
  },
  loadingIndicator: {
    position: "absolute",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
    color: BLUE,
  },
});
