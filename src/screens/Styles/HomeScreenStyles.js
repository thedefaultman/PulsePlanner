import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: 160,
    width: "100%",
  },
  headerTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  cardsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 0,
  },
  shadowCards: {
    width: "32%",
    height: 80,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
