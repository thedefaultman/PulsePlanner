import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 20,
  },
  imageHeader: {
    width: "100%",
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },
  backIcon: {
    position: "absolute",
    top: 30,
    left: 20,
    borderRadius: 8,
    padding: 3,
  },
  exerciseContainer: {
    marginVertical: 12,
    marginHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  exerciseDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  exerciseImage: {
    width: 90,
    height: 90,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  exerciseSets: {
    marginTop: 4,
    fontSize: 16,
  },
  startButton: {
    padding: 12,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 50,
  },
  startButtonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
