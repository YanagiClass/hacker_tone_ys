import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Alert,
  SafeAreaView,
} from "react-native";
import * as React from "react";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function Login(props) {
  const userInfo = {
    _id: props.route.params[0].userInfo.userInfo._id,
    _pw: props.route.params[0].userInfo.userInfo._pw,
    _name: props.route.params[0].userInfo.userInfo._name,
    _tel: props.route.params[0].userInfo.userInfo._tel,
  };
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnView}>
        <TextInput
          label="Email"
          fontSize={18}
          placeholder="이메일을 입력해주세요."
          onChangeText={(email) => setId(email)}
          style={styles.txtInId}
        ></TextInput>
        <TextInput
          label="PW"
          fontSize={18}
          placeholder="비밀번호를 입력해주세요."
          onChangeText={(pw) => setPw(pw)}
          style={styles.txtInPw}
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            if (id.length === 0 || pw.length === 0) {
              Alert.alert("ID와 비밀번호를 입력하세요.");
            } else if (
              id === props.route.params[0].userInfo.userInfo._id &&
              pw === props.route.params[0].userInfo.userInfo._pw
            ) {
              props.navigation.push("MainPage");
            } else {
              Alert.alert("ID와 비밀번호를 확인하세요.");
            }
          }}
        >
          <Text style={styles.btnTxt}>로그인하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnView: {
    flex: 1,
    alignItems: "center",
    width: SCREEN_WIDTH,
    justifyContent: "center",
    backgroundColor: "white",
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
  txtInId: {
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "rgb(237,237,237)",
    padding: 10,
  },
  txtInPw: {
    marginTop: 10,
    marginBottom: 30,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "rgb(237,237,237)",
    padding: 10,
  },
});
