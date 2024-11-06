import { StatusBar } from "expo-status-bar";
import { FitnessContext } from "./src/context/Context";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <>
      <FitnessContext>
        <StatusBar style="light" backgroundColor="#000" />
        <StackNavigator />
      </FitnessContext>
    </>
  );
}
