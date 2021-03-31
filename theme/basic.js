import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 8
  },
  debug: {
    backgroundColor: "black",
    color: "green",
    width: "100%",
    padding: 2,
    marginBottom: 1,
    fontFamily: "Menlo" // only iOS
  }
});

