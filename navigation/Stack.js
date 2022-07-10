import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Location from "../screens/Loaction";
import Select from "../screens/Select";
import Selected from "../screens/Selected";
import Select1 from "../screens/Select1";
import Select2 from "../screens/Select2";
import Selected1 from "../screens/Selected1";
import Start from "../screens/start";
import SignIn from "../screens/signIn";
import Login from "../screens/login";
import { MainPage } from "../screens/MainPage";
import GuidePage from "../Guide";
import ReservedPage from "../Reserve_list";
import PointPage from "../PointPage";
import AdPage from "../App2";
const Nav = createNativeStackNavigator();

export const Stacks = () => (
  <Nav.Navigator
    screenOptions={{ headerShown: true, headerTitleAlign: "center" }}
  >
    <Nav.Screen
      name="Start"
      options={{
        headerShown: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Start}
    ></Nav.Screen>
    <Nav.Screen
      name="SignIn"
      options={{
        title: "회원가입",
        headerShown: true,
        headerTitleStyle: {
          headerTitleAlign: "center",

          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={SignIn}
    ></Nav.Screen>
    <Nav.Screen
      name="Login"
      options={{
        title: "로그인",
        headerShown: true,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Login}
    ></Nav.Screen>
    <Nav.Screen
      name="MainPage"
      options={{
        headerShown: false,
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={MainPage}
    ></Nav.Screen>

    <Nav.Screen
      name="GuidePage"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={GuidePage}
    ></Nav.Screen>
    <Nav.Screen
      name="Select"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Select}
    ></Nav.Screen>
    <Nav.Screen
      name="ReservedPage"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={ReservedPage}
    ></Nav.Screen>
    <Nav.Screen
      name="PointPage"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={PointPage}
    ></Nav.Screen>
    <Nav.Screen
      name="AdPage"
      options={{
        headerShown: false,
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={AdPage}
    ></Nav.Screen>

    <Nav.Screen
      name="Location"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Location}
    ></Nav.Screen>
    <Nav.Screen
      name="Selected"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Selected}
    ></Nav.Screen>
    <Nav.Screen
      name="Selected1"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Selected1}
    ></Nav.Screen>
    <Nav.Screen
      name="Select1"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Select1}
    ></Nav.Screen>
    <Nav.Screen
      name="Select2"
      options={{
        title: "노지 찾아보기",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
      component={Select2}
    ></Nav.Screen>
  </Nav.Navigator>
);
