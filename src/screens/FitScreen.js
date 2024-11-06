import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useContext } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { FitnessItems } from "../context/Context";
import styles from "./Styles/FitScreenStyles";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const exercise = route.params.exercises;
  const current = exercise[index];
  const {
    completed,
    setCompleted,
    calories,
    setCalories,
    minutes,
    setMinutes,
    workout,
    setWorkout,
    darkMode,
  } = useContext(FitnessItems);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000000d7" : "#ffffff" },
      ]}
    >
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color={"black"} />
      </TouchableOpacity>

      <Image style={styles.image} source={{ uri: current?.image }} />

      <Text
        style={[styles.exerciseName, { color: darkMode ? "white" : "black" }]}
      >
        {current?.name}{" "}
        <Octicons
          name="question"
          size={22}
          color={darkMode ? "#bbbbbb" : "#6d6868"}
        />
      </Text>

      <Text style={[styles.sets, { color: darkMode ? "white" : "black" }]}>
        x{current?.sets}
      </Text>

      {/* Done Button */}
      <TouchableOpacity
        onPress={() => {
          setCompleted([...completed, current?.name]);
          setWorkout(workout + 1);
          setMinutes(minutes + 2.5);
          setCalories(calories + 6.3);
          if (index + 1 >= exercise.length) {
            navigation.navigate("Home");
          } else {
            navigation.navigate("Rest");
            setIndex(index + 1); // Increment index immediately
          }
        }}
        style={[
          styles.doneButton,
          { backgroundColor: darkMode ? "#1f6b3e" : "#198f51" },
        ]}
      >
        <Text style={styles.buttonText}>
          <Ionicons name="checkmark-circle" size={24} color="white" /> DONE
        </Text>
      </TouchableOpacity>

      {/* Previous and Skip Buttons */}
      <View style={styles.navigationRow}>
        <TouchableOpacity
          disabled={index === 0}
          onPress={() => {
            setIndex(index - 1); // Decrement index immediately
            navigation.navigate("Rest");
          }}
          style={styles.navButton}
        >
          <Text
            style={[
              styles.navButtonText,
              { color: darkMode ? "#bbbbbb" : "#6d6868" },
            ]}
          >
            <Ionicons
              name="play-skip-back"
              size={22}
              color={darkMode ? "#bbbbbb" : "#6d6868"}
            />{" "}
            PREV
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            if (index + 1 >= exercise.length) {
              navigation.navigate("Home");
            } else {
              setIndex(index + 1); // Increment index immediately
              navigation.navigate("Rest");
            }
          }}
          style={styles.navButton}
        >
          <Text
            style={[
              styles.navButtonText,
              { color: darkMode ? "#bbbbbb" : "#3f3d3d" },
            ]}
          >
            <Ionicons
              name="play-skip-forward"
              size={22}
              color={darkMode ? "#bbbbbb" : "#3f3d3d"}
            />{" "}
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FitScreen;
