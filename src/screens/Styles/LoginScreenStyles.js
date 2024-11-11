import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  input: {
    width: "80%",
    height: 45,
    borderColor: "#333",
    borderWidth: 1.5,
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  themeToggle: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

export default styles;
