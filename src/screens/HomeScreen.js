import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ScreenNames from "../constants/ScreenNames";

const HomeScreen = () => {
  const navigation = useNavigation();

  const CustomButton = (title, screenName) => (
    <View style={{ marginVertical: 20 }}>
      <Button
        title={title}
        onPress={() => {
          navigation.navigate(screenName);
        }}
      />
    </View>
  );

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, paddingTop: 20 }}>
        {CustomButton("Trưởng Screen", ScreenNames.TruongScreen)}
        {CustomButton("Phương Screen", ScreenNames.PhuongScreen)}
        {CustomButton("Long Screen", ScreenNames.LongScreen)}
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
