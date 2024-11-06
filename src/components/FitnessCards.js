import { Image, Text, View, TouchableOpacity } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { FitnessItems } from "../context/Context";
import styles from "./styles";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  const { darkMode } = useContext(FitnessItems);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#000000" : "#FFFFFF" },
      ]}
    >
      {FitnessData.map((item, id) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              exercises: item.exercises,
              id: item.id,
            })
          }
          style={styles.card}
          key={id}
        >
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text
            style={[styles.text, { color: darkMode ? "#EAEAEA" : "white" }]}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            name="lightning-bolt"
            size={30}
            color={darkMode ? "#FFD700" : "#dfbe04"}
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FitnessCards;
