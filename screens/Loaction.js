import React, { useState } from "react";
import { View, Text, Button, Alert, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import DateTimePicker from "react-native-modal-datetime-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Select from "./Select";
import Selected from "./Selected";
const NativeStack = createNativeStackNavigator();

const Screen4 = ({ navigation: { navigate } }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  const [state, setState] = useState(false);
  const setState1 = () => {
    if (state === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(true);
    } else {
      setState(false);
    }
  };
  const [state2, setState2] = useState(false);
  const setState22 = () => {
    if (state2 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(true);
      setState(false);
    } else {
      setState2(false);
    }
  };
  const [state3, setState3] = useState(false);
  const setState33 = () => {
    if (state3 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(true);
      setState2(false);
      setState(false);
    } else {
      setState3(false);
    }
  };
  const [state4, setState4] = useState(false);
  const setState44 = () => {
    if (state4 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(true);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState4(false);
    }
  };
  const [state5, setState5] = useState(false);
  const setState55 = () => {
    if (state5 === false) {
      setState8(false);
      setState7(false);
      setState6(false);
      setState5(true);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState5(false);
    }
  };
  const [state6, setState6] = useState(false);
  const setState66 = () => {
    if (state6 === false) {
      setState8(false);
      setState7(false);
      setState6(true);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState6(false);
    }
  };
  const [state7, setState7] = useState(false);
  const setState77 = () => {
    if (state7 === false) {
      setState8(false);
      setState7(true);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState7(false);
    }
  };
  const [state8, setState8] = useState(false);
  const setState88 = () => {
    if (state8 === false) {
      setState8(true);
      setState7(false);
      setState6(false);
      setState5(false);
      setState4(false);
      setState3(false);
      setState2(false);
      setState(false);
    } else {
      setState8(false);
    }
  };
  return (
    <Container>
      <SliderContainer>
        <View style={{ width: 155, height: 569 }}>
          <Slider1>
            <TouchableOpacity onPress={setState1}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  충청남도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState22}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state2 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state2 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  충청북도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState33}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state3 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state3 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  경기도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState44}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state4 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state4 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  전라남도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState55}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state5 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state5 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  전라북도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState66}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state6 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state6 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  경상남도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState77}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state7 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state7 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  경상북도
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={setState88}>
              <View
                style={{
                  height: 55,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: state8 ? "white" : "#f8f8fa",
                }}
              >
                <Text
                  style={{
                    color: state8 ? "black" : "#ebebec",
                    fontWeight: "900",
                    fontSize: 18,
                  }}
                >
                  강원도
                </Text>
              </View>
            </TouchableOpacity>
          </Slider1>
        </View>

        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            display: "flex",
          }}
        >
          <View style={{ display: state8 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>춘천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>원주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>강릉시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>동해시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>태백시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>속초시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>삼척시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>홍천군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>횡성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영월군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>평창군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>정선군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>철원군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>화천군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>양구군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>인제군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>고성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>양양군</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state7 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>포항시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>경산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>경주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>김천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>안동시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>구미시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>상주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>문경시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>경산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>군위군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>의성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>청송군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영양군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영덕군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>경북3</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state6 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>창원시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>진주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>통영시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>사천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>김해시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>밀양시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>거제시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>양산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>의령군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>함안군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>창녕군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>고성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>남해군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>남해군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>하동군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>산청군</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state5 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>전주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>군산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>익산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>정읍시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>남원시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>김제시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>완주군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>진안군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>무주군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>장수군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>임실군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>순창군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>고창군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>부안군</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state4 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>목포시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>여수시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>순천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>나주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>광양시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>담양군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>곡성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>구례군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>고흥군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>보성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>화순군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>장흥군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>강진군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>해남군</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state3 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>수원시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>성남시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>의정부시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>안양시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>부천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>광명시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>평택시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>평택시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>동두천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>안산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigate("Select2", { screen: "Select2" })}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>고양시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>과천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>구리시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>남양주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>오산시</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>시흥시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>군포시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>군포시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>의왕시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>하남시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>용인시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>파주시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>이천시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>안성시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>안성시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>김포시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>화성시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>광주시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>양주시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>포천시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>여주시</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>연천군</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>가평군</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingLeft: 20,
                  height: 55,
                }}
              >
                <Text style={{ fontSize: 18 }}>양평군</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ display: state2 ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>청주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>충주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>제천시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>보은군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>옥천군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>영동군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>증평군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>진천군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>괴산군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>음성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>단양군</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{ display: state ? "flex" : "none" }}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => navigate("Select1", { screen: "Select1" })}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>천안시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>공주시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>보령시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>아산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>서산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>논산시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>계룡시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>당진시</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>금산군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>부여군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>서천군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>청양군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>홍성군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>예산군</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "flex-start",
                    paddingLeft: 20,
                    height: 55,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>태안군</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </SliderContainer>
    </Container>
  );
};
export default Screen4;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
const Date = styled.View`
  background-color: white;
  width: 184px;
  height: 42px;
  margin-top: 128px;
  margin-left: 156px;
  margin-right: 20px;
  border: 1px;
  border-color: #ededed;
  justify-content: center;
  align-items: center;
`;
const SliderContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;
const Slider1 = styled.ScrollView`
  background-color: #f8f8fa;
`;
const Slider2 = styled.View`
  flex: 1;
  background-color: black;
  height: 100%;
`;
const TestText = styled.Text`
  color: #ebebec;
  font-weight: 900;
  font-size: 18px;
`;

const Btn1 = styled.View`
  height: 55px;
  justify-content: center;
  align-items: center;
`;

const Detail = styled.View`
  background-color: #0000ff;
  flex: 1;
  display: style;
`;
