import { StyleSheet } from "react-native";
import { Colors } from "../styles/colors";

export const customStyles = StyleSheet.create({
  title: {
    paddingTop: 50,
    fontSize: 36,
    marginLeft: 25,
    color: Colors.blue,
    fontWeight: "700",
  },
  loadingIndicator: {
    position: "absolute",
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
});
