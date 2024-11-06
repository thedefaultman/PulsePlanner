import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, TouchableOpacity, View, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { FitnessItems } from "../context/Context";
import styles from "./Styles/WorkoutScreenStyles";

const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { completed, setCompleted, darkMode } = useContext(FitnessItems);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          styles.scrollContainer,
          { backgroundColor: darkMode ? "#000000d7" : "white" },
        ]}
      >
        <Image
          style={styles.imageHeader}
          source={{ uri: route.params.image }}
        />

        <Ionicons
          onPress={() => navigation.goBack()}
          style={[
            styles.backIcon,
            { backgroundColor: darkMode ? "#333333" : "white" },
          ]}
          name="arrow-back-outline"
          size={24}
          color={darkMode ? "white" : "black"}
        />

        {route.params.exercises.map((item, index) => (
          <TouchableOpacity style={styles.exerciseContainer} key={index}>
            <View style={styles.exerciseDetails}>
              <Image
                style={styles.exerciseImage}
                source={{ uri: item.image }}
              />

              <View style={{ marginLeft: 10 }}>
                <Text
                  style={[
                    styles.exerciseName,
                    { color: darkMode ? "white" : "black" },
                  ]}
                >
                  {item.name}
                </Text>
                <Text
                  style={[
                    styles.exerciseSets,
                    { color: darkMode ? "#d3d3d3" : "gray" },
                  ]}
                >
                  {item.sets}
                </Text>
              </View>
            </View>

            {completed.includes(item?.name) ? (
              <AntDesign name="checkcircle" size={24} color="#198f51" />
            ) : null}
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Fit", { exercises: route.params.exercises });
          setCompleted([]);
        }}
        style={[
          styles.startButton,
          { backgroundColor: darkMode ? "#007236" : "#198f51" },
        ]}
      >
        <Text
          style={[
            styles.startButtonText,
            { color: darkMode ? "#EAEAEA" : "white" },
          ]}
        >
          <MaterialCommunityIcons
            name="whistle"
            size={24}
            color={darkMode ? "#FFD700" : "white"}
          />{" "}
          START
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default WorkoutScreen;
