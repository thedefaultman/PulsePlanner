import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import FitnessCards from "../components/FitnessCards";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { FitnessItems } from "../context/Context";
import styles from "./Styles/HomeScreenStyles";

const HomeScreen = ({ route }) => {
  const { calories, minutes, workout, darkMode, setDarkMode } =
    useContext(FitnessItems);

  const { username } = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000000d7" : "#ffffff" },
      ]}
    >
      <View
        style={[styles.header, { backgroundColor: darkMode ? "#333" : "#eee" }]}
      >
        <View style={styles.headerTopRow}>
          <Text
            style={[styles.headerText, { color: darkMode ? "white" : "black" }]}
          >
            PulsePlanner - Stay Consistent, Achieve More
          </Text>
          <TouchableOpacity onPress={() => setDarkMode(!darkMode)}>
            {darkMode ? (
              <Ionicons name="sunny" size={24} color="white" />
            ) : (
              <Ionicons name="moon" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>

        {/* Display username */}
        <View style={{ marginBottom: 20 }}>
          <Text
            style={[
              styles.usernameText,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            Hey, {username} - Welcome
          </Text>
        </View>

        <View style={styles.cardsRow}>
          <View
            style={[
              styles.shadowCards,
              { backgroundColor: darkMode ? "#555" : "#ffffff" },
            ]}
          >
            <Text
              style={[styles.cardText, { color: darkMode ? "white" : "black" }]}
            >
              {calories.toFixed(2)}
            </Text>
            <Text style={{ color: darkMode ? "white" : "black" }}>KCAL</Text>
          </View>

          <View
            style={[
              styles.shadowCards,
              { backgroundColor: darkMode ? "#555" : "#ffffff" },
            ]}
          >
            <Text
              style={[styles.cardText, { color: darkMode ? "white" : "black" }]}
            >
              {workout}
            </Text>
            <Text style={{ color: darkMode ? "white" : "black" }}>
              WORKOUTS
            </Text>
          </View>

          <View
            style={[
              styles.shadowCards,
              { backgroundColor: darkMode ? "#555" : "#ffffff" },
            ]}
          >
            <Text
              style={[styles.cardText, { color: darkMode ? "white" : "black" }]}
            >
              {minutes}
            </Text>
            <Text style={{ color: darkMode ? "white" : "black" }}>MINUTES</Text>
          </View>
        </View>
      </View>

      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;
