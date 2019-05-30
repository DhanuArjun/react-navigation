import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./Friends";
import Fd from "./Fd";

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Fd: { screen: Fd }
});

export default createAppContainer(AppNavigator);
