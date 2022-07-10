import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import * as React from "react";
import splashImg from "../assets/2.png";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Image source={splashImg} style={styles.img} />
      </View>
      <View style={styles.btnView}>
        <View style={styles.txtView}>
          <Text style={{ fontSize: 55, fontWeight: "bold" }}>차박할 곳</Text>
          <Text style={{ fontSize: 55, fontWeight: "bold" }}>찾을 땐</Text>
          <Text style={{ fontSize: 55, fontWeight: "bold" }}>자박차박</Text>
        </View>
        <View style={styles.btnView2}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.push("SignIn")}
          >
            <Text style={styles.btnTxt}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleView: {
    flex: 2,
    backgroundColor: "rgb(2,123,67)",
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH,
  },
  btnView: {
    flex: 3,
    backgroundColor: "white",
    width: SCREEN_WIDTH,
  },
  btnView2: {
    flex: 3,
    backgroundColor: "white",
    width: SCREEN_WIDTH,
    justifyContent: "flex-end",
  },
  btn: {
    marginBottom: 15,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "rgb(2,123,67)",
    alignSelf: "center",
    justifyContent: "center",
  },
  btn2: {
    marginBottom: 100,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
  },
  btnTxt: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
  btnTxt2: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  img: {
    width: 242,
    height: 186,
  },
  txtView: {
    marginLeft: 15,
    marginTop: 42,
  },
});
