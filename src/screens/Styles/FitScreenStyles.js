import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 400,
  },
  exerciseName: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  sets: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 10,
  },
  doneButton: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
    borderRadius: 30,
    padding: 10,
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  navigationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 25,
  },
  navButton: {
    borderRadius: 30,
    padding: 10,
    width: "42%",
  },
  navButtonText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
});

export default styles;
