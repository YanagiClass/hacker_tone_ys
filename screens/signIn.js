import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as React from "react";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function NameNumber({ navigation }) {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [pwAgain, setPwAgain] = React.useState("");
  const [suggest, setSuggest] = React.useState("");
  const userInfo = {
    _name: name,
    _id: id,
    _tel: tel,
    _pw: pw,
    _pwAgain: pwAgain,
    _suggest: suggest,
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, width: SCREEN_WIDTH }}>
        <ScrollView
          contentContainerStyle={{
            flexGrows: 1,
            backgroundColor: "white",
          }}
        >
          <Text style={styles.txtLabel}>이름</Text>
          <TextInput
            label="Name"
            placeholder="이름을 입력해주세요."
            style={styles.txtInName}
            onChangeText={(name) => setName(name)}
            autoComplete="name"
            onEndEditing={() => {
              if (name.length === 0) {
                Alert.alert("이름을 입력해주세요.");
              }
            }}
            value={name}
          ></TextInput>
          <Text style={styles.txtLabel}>메일주소 (아이디로도 사용됩니다.)</Text>
          <TextInput
            label="Email"
            placeholder="이메일을 입력해주세요."
            style={styles.txtInEmail}
            onChangeText={(id) => setId(id)}
            autoComplete="email"
            onEndEditing={() => {
              if (id.length === 0) {
                Alert.alert("이메일을 입력해주세요.");
              }
            }}
            value={id}
          ></TextInput>
          <Text style={styles.txtLabel}>전화번호</Text>
          <TextInput
            label="Tel"
            placeholder="전화번호를 입력해주세요."
            style={styles.txtInTel}
            onChangeText={(tel) => setTel(tel)}
            autoComplete="tel"
            keyboardType="number-pad"
            onEndEditing={() => {
              if (tel.length === 0) {
                Alert.alert("전화번호를 입력해주세요.");
              }
            }}
            value={tel}
          ></TextInput>
          <Text style={styles.txtLabel}>비밀번호</Text>
          <TextInput
            label="SetPw"
            placeholder="비밀번호를 입력해주세요."
            secureTextEntry={true}
            style={styles.txtInPw}
            onChangeText={(pw) => setPw(pw)}
            autoComplete="password"
            maxLength={10}
            onEndEditing={() => {
              if (pw.length === 0) {
                Alert.alert("비밀번호를 입력해주세요.");
              }
            }}
            value={pw}
          ></TextInput>
          <Text style={styles.txtLabel}>비밀번호 재입력</Text>
          <TextInput
            label="SetPwAgain"
            placeholder="비밀번호 재입력해주세요."
            secureTextEntry={true}
            style={styles.txtInPwAgain}
            onChangeText={(pwA) => setPwAgain(pwA)}
            autoComplete="password"
            maxLength={10}
            onEndEditing={() => {
              if (pwAgain.length === 0) {
                Alert.alert("비밀번호를 한 번 더 입력해주세요.");
              } else if (pw !== pwAgain) {
                Alert.alert("비밀번호를 똑같이 입력해주세요.");
              }
            }}
            value={pwAgain}
          ></TextInput>
          <Text style={styles.txtLabel}>추천인 (선택사항)</Text>
          <TextInput
            label="Suggest"
            placeholder="추천인 아이디가 있으시면 입력해주세요."
            style={styles.txtInSuggest}
            onChangeText={(suggest) => setSuggest(suggest)}
            value={suggest}
          ></TextInput>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              name.length === 0 ||
              id.length === 0 ||
              tel.length === 0 ||
              pw.length === 0 ||
              pwAgain.length === 0
                ? Alert.alert(
                    "필수 항목 입력 확인",
                    "필수 항목을 모두 입력해주세요."
                  )
                : Alert.alert("회원가입 완료", "회원가입이 완료되었습니다!", [
                    {
                      text: "확인",
                      onPress: () => {
                        navigation.push("Login", [{ userInfo: { userInfo } }]);
                        setName("");
                        setId("");
                        setTel("");
                        setPw("");
                        setPwAgain("");
                        setSuggest("");
                      },
                    },
                  ])
            }
          >
            <Text style={styles.btnTxt}>회원가입</Text>
          </TouchableOpacity>
        </ScrollView>
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
  headerTxt: {
    fontSize: 30,
    marginLeft: 15,
    fontWeight: "900",
  },
  subHeaderTxt: {
    fontSize: 20,
    paddingTop: 10,
    marginLeft: 15,
  },
  txtInName: {
    marginTop: 10,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    backgroundColor: "rgb(237,237,237)",
  },
  txtInEmail: {
    marginTop: 10,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    backgroundColor: "rgb(237,237,237)",
  },
  txtInTel: {
    marginTop: 10,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    backgroundColor: "rgb(237,237,237)",
  },
  txtInPw: {
    marginTop: 10,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    backgroundColor: "rgb(237,237,237)",
  },
  txtInPwAgain: {
    marginTop: 10,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    backgroundColor: "rgb(237,237,237)",
  },
  txtInSuggest: {
    marginTop: 10,
    marginBottom: 10,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "white",
    padding: 10,
    alignSelf: "center",
    backgroundColor: "rgb(237,237,237)",
  },
  txtLabel: {
    marginTop: 30,
    marginLeft: 20,
    color: "black",
    fontWeight: "800",
    fontSize: 20,
  },
  btn: {
    marginTop: 20,
    marginBottom: 15,
    width: SCREEN_WIDTH - 30,
    height: 54,
    backgroundColor: "rgb(2,123,67)",
    alignSelf: "center",
    justifyContent: "center",
  },
  btnTxt: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
