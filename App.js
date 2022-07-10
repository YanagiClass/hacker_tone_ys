import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Select from "./screens/Select";
import { Stacks } from "./navigation/Stack";

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
