import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../context/Context";
import styles from "./Styles/LoginScreenStyles";

const LoginScreen = () => {
  const { darkMode, setDarkMode } = useContext(FitnessItems);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username && password) {
      alert("Logged in successfully!");
      navigation.navigate("Home", { username });
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#1F1F1F" : "#FFFFFF" },
      ]}
    >
      {/* Optional background image for a gym feel */}
      <Image
        source={require("../../assets/enter-gym-background.jpg")}
        style={styles.backgroundImage}
      />

      <Text style={[styles.title]}>Welcome to Pulse Planner</Text>

      <TextInput
        style={[
          styles.input,
          darkMode && styles.inputDark,
          username ? styles.inputFocus : null,
        ]}
        placeholder="Username"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={[
          styles.input,
          darkMode && styles.inputDark,
          password ? styles.inputFocus : null,
        ]}
        placeholder="Password"
        placeholderTextColor={darkMode ? "#aaa" : "#555"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, styles.buttonActive]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setDarkMode(!darkMode)}
        style={styles.themeToggle}
      >
        <Ionicons
          name={darkMode ? "sunny" : "moon"}
          size={24}
          color={darkMode ? "white" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
