import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function AdPage() {
  return (
    <Stack.Navigator
      initialRouteName="RewardAdView"
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="리워드" component={Reward} />
      <Stack.Screen name="내 차 보험료 확인하기" component={FirstDetailAd} />
      <Stack.Screen name="삼성 화재 가입하기" component={SecondDetailAd} />
      <Stack.Screen name="NH멤버스 회원가입" component={ThirdDetailAd} />
      <Stack.Screen name="조광일 V앱 응원하기" component={FourthDetailAd} />
      <Stack.Screen name="자박 차박 설치하기" component={FifthDetailAd} />
    </Stack.Navigator>
  );
}

function Reward({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.adlist}>
        <View style={styles.rewardcheck}>
          <View style={styles.userreward}>
            <Text style={styles.reward_text}>나의 리워드</Text>
          </View>
          <View style={styles.usernumber}>
            <Text style={styles.reward_text}>0 pt</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.ad_one}
          onPress={() => navigation.navigate("내 차 보험료 확인하기")}
        >
          <View style={styles.image_area}>
            <Image
              style={styles.camper_image}
              source={require("./assets/camper.png")}
            ></Image>
          </View>
          <View style={styles.text_onearea}>
            <Text style={styles.ad_text}>내 차 보험료 확인만</Text>
            <Text style={styles.ad_text}>해도 500포인트</Text>
            <Text style={styles.ad_text}>바로 지급!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ad_two}
          onPress={() => navigation.navigate("삼성 화재 가입하기")}
        >
          <View style={styles.image_area}>
            <Image
              style={styles.samsung_image}
              source={require("./assets/samsung.png")}
            ></Image>
          </View>
          <View style={styles.text_twoarea}>
            <Text style={styles.ad_text}>삼성 화재</Text>
            <Text style={styles.ad_text}>다이렉트</Text>
            <Text style={styles.ad_text}>800포인트 지급</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ad_three}
          onPress={() => navigation.navigate("NH멤버스 회원가입")}
        >
          <View style={styles.text_and_art}>
            <Text style={styles.ad_text}>지금 NH멤버스 회원가입하면</Text>
            <Text style={styles.ad_text}>포인트 즉시 지급</Text>
          </View>
          <View style={styles.art_and_text}>
            <Image
              style={styles.fruitart}
              source={require("./assets/nh.png")}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ad_four}
          onPress={() => navigation.navigate("조광일 V앱 응원하기")}
        >
          <View style={styles.text_fourarea}>
            <Text style={styles.ad_text}>조광일 응원만 해도</Text>
            <Text style={styles.ad_text}>1,000 포인트 지급</Text>
          </View>
          <View style={styles.image_jgiarea}>
            <Image
              style={styles.jgi_image}
              source={require("./assets/jgi.png")}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ad_five}
          onPress={() => navigation.navigate("자박 차박 설치하기")}
        >
          <View style={styles.image_area}>
            <Image
              style={styles.jabak_image}
              source={require("./assets/jabak.png")}
            ></Image>
          </View>
          <View style={styles.text_fivearea}>
            <Text style={styles.ad_text}>자박 차박만</Text>
            <Text style={styles.ad_text}>설치해도</Text>
            <Text style={styles.ad_text}>500포인트 지급</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function FirstDetailAd({ navigation }) {
  const [watch, setWatch] = useState(false);
  const [reward, AddReward] = useState(0);

  const Add_Reward = () => {
    if (!watch) {
      setWatch(!watch);
      AddReward(reward + 500);
      alert("적립 완료! \n정상적으로 리워드가 적립되었습니다.");
    } else {
      alert("이미 참여하셨습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ad_fullimage}>
          <Image
            style={styles.ad_fullimage}
            source={require("./assets/temp/boyfriend.jpg")}
          />
        </View>
        <View style={styles.adfulldesc}>
          <Text style={styles.ad_style}>설치형</Text>
          <Text>애인 사귀기 어플 '사기어'</Text>
          <Text style={styles.ad_desc}>애인 만남, 소개, 주선</Text>
          <Text style={styles.ad_reward}>+500 reward</Text>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_event} onPress={Add_Reward}>
            <Text>광고 시청하고 리워드 받기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ad_alert}>
          <Text style={styles.ad_alerttext}>[광고설명]</Text>
          <Text style={styles.ad_alerttext}>사기어 앱 설치 이벤트</Text>
          <Text></Text>
          <Text style={styles.ad_alerttext}>[주의사항]</Text>
          <Text style={styles.ad_alerttext}>
            -설치 이력이 있을 경우, 참여가 제한됩니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -부정 참여가 적발될 경우, 이용에 제한이 있을 수 있습니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function SecondDetailAd({ navigation }) {
  const [watch, setWatch] = useState(false);
  const [reward, AddReward] = useState(0);

  const Add_Reward = () => {
    if (!watch) {
      setWatch(!watch);
      AddReward(reward + 300);
      alert("적립 완료! \n정상적으로 리워드가 적립되었습니다.");
    } else {
      alert("이미 참여하셨습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ad_fullimage}>
          <Image
            style={styles.ad_fullimage}
            source={require("./assets/temp/chipmunk_boy.jpg")}
          />
        </View>
        <View style={styles.adfulldesc}>
          <Text style={styles.ad_style}>설치형</Text>
          <Text>애완동물 어플 '펫미'</Text>
          <Text style={styles.ad_desc}>애완동물 입양, 애완동물 물품 구매</Text>
          <Text style={styles.ad_reward}>+300 reward</Text>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_event} onPress={Add_Reward}>
            <Text>광고 시청하고 리워드 받기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ad_alert}>
          <Text style={styles.ad_alerttext}>[광고설명]</Text>
          <Text style={styles.ad_alerttext}>펫미 앱 설치 이벤트</Text>
          <Text></Text>
          <Text style={styles.ad_alerttext}>[주의사항]</Text>
          <Text style={styles.ad_alerttext}>
            -설치 이력이 있을 경우, 참여가 제한됩니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -부정 참여가 적발될 경우, 이용에 제한이 있을 수 있습니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function ThirdDetailAd({ navigation }) {
  const [watch, setWatch] = useState(false);
  const [reward, AddReward] = useState(0);

  const Add_Reward = () => {
    if (!watch) {
      setWatch(!watch);
      AddReward(reward + 500);
      alert("적립 완료! \n정상적으로 리워드가 적립되었습니다.");
    } else {
      alert("이미 참여하셨습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ad_fullimage}>
          <Image
            style={styles.ad_fullimage}
            source={require("./assets/temp/agent_boy.jpg")}
          />
        </View>
        <View style={styles.adfulldesc}>
          <Text style={styles.ad_style}>참여형</Text>
          <Text>삼삼보험 가입하기</Text>
          <Text style={styles.ad_desc}>
            1등 자동차 보험, 삼삼보험에 가입하고 혜택받기
          </Text>
          <Text style={styles.ad_reward}>+1200 reward</Text>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_event} onPress={Add_Reward}>
            <Text>광고 시청하고 리워드 받기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ad_alert}>
          <Text style={styles.ad_alerttext}>[광고설명]</Text>
          <Text style={styles.ad_alerttext}>삼삼보험 가입 이벤트</Text>
          <Text></Text>
          <Text style={styles.ad_alerttext}>[주의사항]</Text>
          <Text style={styles.ad_alerttext}>
            -가입 이력이 있을 경우, 참여가 제한됩니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -부정 참여가 적발될 경우, 이용에 제한이 있을 수 있습니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -가입 후 확인까지 30분 이상이 소요될 수 있으며, 그 전에 해지 시
            리워드 지급이 취소됩니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function FourthDetailAd({ navigation }) {
  const [watch, setWatch] = useState(false);
  const [reward, AddReward] = useState(0);

  const Add_Reward = () => {
    if (!watch) {
      setWatch(!watch);
      AddReward(reward + 500);
      alert("적립 완료! \n정상적으로 리워드가 적립되었습니다.");
    } else {
      alert("이미 참여하셨습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ad_fullimage}>
          <Image
            style={styles.ad_fullimage}
            source={require("./assets/temp/idol_boy.jpg")}
          />
        </View>
        <View style={styles.adfulldesc}>
          <Text style={styles.ad_style}>참여형</Text>
          <Text>자박차박 유튜브 구독하기</Text>
          <Text style={styles.ad_desc}>
            자박차박 유튜브 구독하고 보너스 리워드 받기
          </Text>
          <Text style={styles.ad_reward}>+600 reward</Text>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_event} onPress={Add_Reward}>
            <Text>광고 시청하고 리워드 받기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ad_alert}>
          <Text style={styles.ad_alerttext}>[광고설명]</Text>
          <Text style={styles.ad_alerttext}>자박차박 유튜브 구독 이벤트</Text>
          <Text></Text>
          <Text style={styles.ad_alerttext}>[주의사항]</Text>
          <Text style={styles.ad_alerttext}>
            -구독 이력이 있을 경우, 참여가 제한됩니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -부정 참여가 적발될 경우, 이용에 제한이 있을 수 있습니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -유튜브 구독 확인까지 30분이 소요될 수 있으며, 그 전에 구독 취소시
            리워드 지급이 취소될 수 있습니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

function FifthDetailAd({ navigation }) {
  const [watch, setWatch] = useState(false);
  const [reward, AddReward] = useState(0);

  const Add_Reward = () => {
    if (!watch) {
      setWatch(!watch);
      AddReward(reward + 500);
      alert("적립 완료! \n정상적으로 리워드가 적립되었습니다.");
    } else {
      alert("이미 참여하셨습니다.");
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.ad_fullimage}>
          <Image
            style={styles.ad_fullimage}
            source={require("./assets/temp/strawberry_boy.jpg")}
          />
        </View>
        <View style={styles.adfulldesc}>
          <Text style={styles.ad_style}>참여형</Text>
          <Text>젹이요 첫 주문 이벤트</Text>
          <Text style={styles.ad_desc}>
            배달앱 1등 젹이요에서 첫 주문하고 보너스 리워드 받기
          </Text>
          <Text style={styles.ad_reward}>+2500 reward</Text>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_event} onPress={Add_Reward}>
            <Text>광고 시청하고 리워드 받기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ad_alert}>
          <Text style={styles.ad_alerttext}>[광고설명]</Text>
          <Text style={styles.ad_alerttext}>젹이요 첫 주문 이벤트</Text>
          <Text></Text>
          <Text style={styles.ad_alerttext}>[주의사항]</Text>
          <Text style={styles.ad_alerttext}>
            -첫 주문자에 한해 리워드가 지급됩니다.
          </Text>
          <Text style={styles.ad_alerttext}>
            -부정 참여가 적발될 경우, 이용에 제한이 있을 수 있습니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4e4e4",
  },
  adlist: {
    marginLeft: 20,
    marginRight: 20,
  },
  ad_one: {
    backgroundColor: "#c7f8ff",
    weight: 320,
    height: 158,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  image_area: {
    flex: 1,
    justifyContent: "center",
  },
  camper_image: {
    width: 123,
    height: 123,
    marginTop: 18,
    marginLeft: 10,
    marginBottom: 17,
    marginRight: 16,
  },
  text_onearea: {
    flex: 1,
    width: 150,
    height: 74,
    marginTop: 42,
    marginBottom: 42,
    marginRight: 21,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ad_text: {
    color: "#222222",
    fontSize: 18,
    fontWeight: "400",
  },
  ad_two: {
    flex: 1,
    backgroundColor: "#ffffff",
    weight: 320,
    height: 158,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  samsung_image: {
    width: 139,
    height: 140,
    marginBottom: 9,
    marginTop: 9,
    marginLeft: 10,
    marginRight: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  text_twoarea: {
    flex: 1,
    marginTop: 36,
    marginRight: 32,
    marginBottom: 48,
    width: 118,
    height: 74,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  ad_three: {
    flex: 1,
    backgroundColor: "#ffbdf0",
    weight: 320,
    height: 158,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  text_and_art: {
    marginTop: 12,
    marginLeft: 15,
  },
  art_and_text: {
    marginTop: 37,
    marginRight: 21,
    marginBottom: 11,
  },
  fruitart: {
    width: 110,
    height: 110,
  },
  ad_four: {
    flex: 1,
    backgroundColor: "#ffffff",
    weight: 320,
    height: 158,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  text_fourarea: {
    flex: 1,
    marginTop: 45,
    marginLeft: 18,
    marginBottom: 63,
    marginRight: 16,
    width: 142,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image_jgiarea: {
    flex: 0.75,
  },
  jgi_image: {
    marginTop: 15,
    width: 144,
    height: 144,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  ad_five: {
    flex: 1,
    backgroundColor: "#76fc80",
    weight: 320,
    height: 158,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
  },
  jabak_image: {
    marginTop: 2,
    marginLeft: 10,
    marginBottom: 14,
    marginRight: 29,
    width: 142,
    height: 142,
  },
  text_fivearea: {
    flex: 1,
    marginTop: 36,
    marginBottom: 48,
    marginRight: 21,
    width: 118,
    height: 74,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  adbtn: {
    flex: 0.5,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  ad_image: {
    width: 360,
    height: 120,
  },
  ad_style: {
    width: 37,
    borderWidth: 1,
    backgroundColor: "yellow",
    fontSize: 12,
    fontWeight: "100",
  },
  ad_desc: {
    fontSize: 14,
    fontWeight: "400",
  },
  ad_reward: {
    fontSize: 12,
    fontWeight: "300",
  },
  btn_adgo: {
    backgroundColor: "skyblue",
    width: 60,
    height: 24,
    borderWidth: 1,
  },
  rewardcheck: {
    width: 320,
    height: 52,
    marginTop: 18,
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    flexDirection: "row",
  },
  userreward: {
    flex: 1,
    color: "#222222",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  usernumber: {
    flex: 1,
    color: "#222222",
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 10,
  },
  reward_text: {
    fontSize: 18,
    fontWeight: "400",
  },
  ad_fullimage: {
    flex: 1,
    margin: 4,
    width: "98%",
    height: 360,
    resizeMode: "cover",
  },
  adfulldesc: {
    flex: 0.1,
    justifyContent: "flex-start",
  },
  btn_container: {
    justifyContent: "center",
  },
  btn_event: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue",
    width: "98%",
    height: 36,
    borderRadius: 15,
    borderWidth: 1,
  },
  ad_alert: {
    backgroundColor: "lightgray",
  },
  ad_alerttext: {
    margin: 4,
    fontSize: 8,
    fontWeight: "100",
  },
});

export default AdPage;
