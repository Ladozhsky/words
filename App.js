import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainStack from './navigate'

const fonts = () =>
  Font.loadAsync({
    'SyneMono': require("./assets/fonts/SyneMono-Regular.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
    <MainStack />
    );
  } else {
    return <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />;
  }
}

const styles = StyleSheet.create({});
