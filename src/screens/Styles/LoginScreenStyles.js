import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },

  // Title Style
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Roboto",
    letterSpacing: 2,
    color: "white",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 5,
  },

  // Input Field Styles
  input: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
    transition: "all 0.3s ease-in-out",
  },

  inputDark: {
    backgroundColor: "#2a2a2a",
    color: "#fff",
    borderColor: "#555",
  },

  // Button Styling with hover/active effects
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6200",
    marginBottom: 15,
    elevation: 5,
    transform: [{ scale: 1 }],
    transition: "transform 0.2s ease-in-out",
  },

  // Button text style
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  // Button active/hover effect
  buttonActive: {
    transform: [{ scale: 1.1 }], // Button grows when pressed
  },

  // Icon for theme toggle
  themeToggle: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#333",
    elevation: 5,
    transition: "background-color 0.2s ease-in-out",
  },

  // Focused input styling
  inputFocus: {
    borderColor: "#ff6200", // Vibrant border color on focus
    backgroundColor: "#fff", // Brighter background on focus
  },

  // Background Image (optional for fitness feel)
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  // Simple hover animation for inputs when focused
  inputHover: {
    borderColor: "#ff6200",
    backgroundColor: "#fff",
  },

  // Example of an animation on load
  containerAnimation: {
    opacity: 0,
    animation: "fadeIn 1s forwards", // CSS @keyframes equivalent in React Native
  },
});

export default styles;
