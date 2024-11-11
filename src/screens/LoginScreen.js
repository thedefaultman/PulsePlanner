import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
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
      // Pass username to HomeScreen as a parameter
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
      <Text style={[styles.title, { color: darkMode ? "#FFFFFF" : "#000000" }]}>
        Welcome to Pulse Planner
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: darkMode ? "#2a2a2a" : "#f2f2f2",
            color: darkMode ? "#fff" : "#000",
          },
        ]}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: darkMode ? "#2a2a2a" : "#f2f2f2",
            color: darkMode ? "#fff" : "#000",
          },
        ]}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: darkMode ? "#ff6200" : "#ff6200" },
        ]}
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
