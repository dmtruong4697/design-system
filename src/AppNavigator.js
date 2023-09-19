import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PhuongScreen from "./screens/PhuongScreen";
import TruongScreen from "./screens/TruongScreen";
import LongScreen from "./screens/LongScreen";
import ScreenNames from "./constants/ScreenNames";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.HomeScreen}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name={ScreenNames.HomeScreen}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.PhuongScreen}
          component={PhuongScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.TruongScreen}
          component={TruongScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNames.LongScreen}
          component={LongScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
