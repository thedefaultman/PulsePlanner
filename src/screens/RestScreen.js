import { useNavigation } from "@react-navigation/native";
import { useEffect, useState, useContext } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { FitnessItems } from "../context/Context";
import styles from "./Styles/RestScreenStyles";

const RestScreen = () => {
  const navigation = useNavigation();
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(2);
  const { darkMode } = useContext(FitnessItems);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();

    // Cleanup function
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000000d7" : "#ffffff" },
      ]}
    >
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/full-length-athlete-sipping-water-from-fitness-bottle-exhausted-after-workout_1098-18878.jpg?w=360&t=st=1689099570~exp=1689100170~hmac=a60d176d8a393f59b8b032dd294005ceedbd048a04c01e542bcffa815ecd4428",
        }}
        style={styles.image}
      />

      <Text style={[styles.breakText, { color: darkMode ? "white" : "black" }]}>
        TAKE A BREAK!
      </Text>

      <Text style={[styles.timerText, { color: darkMode ? "white" : "black" }]}>
        <MaterialIcons
          name="timer"
          size={26}
          color={darkMode ? "white" : "black"}
        />{" "}
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;
