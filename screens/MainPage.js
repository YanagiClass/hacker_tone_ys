import React from "react";
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Platform,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Swiper from "react-native-swiper";

// variable
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Stack = createNativeStackNavigator();

// function
function MainPage({ navigation: { navigate } }) {
  const siteList = [];
  const Site = [
    {
      imgsrc: require("../Image/Tent1.jpg"),
      title: "감성충만한 곳을 원해?",
      passage: "경기 고양시 덕양구 서삼름길 107-62",
    },
    {
      imgsrc: require("../Image/Tent2.jpg"),
      title: "감성충만한 곳을 원해?",
      passage: "경기 고양시 덕양구 서삼름길 107-62",
    },
    {
      imgsrc: require("../Image/Tent3.jpg"),
      title: "감성충만한 곳을 원해?",
      passage: "경기 고양시 덕양구 서삼름길 107-62",
    },
    {
      imgsrc: require("../Image/Tent4.jpg"),
      title: "감성충만한 곳을 원해?",
      passage: "경기 고양시 덕양구 서삼름길 107-62",
    },
  ];

  for (let i = 0; i < 4; i++) {
    siteList.push(
      <View style={{ width: 300 }}>
        <View>
          <Image source={Site[i].imgsrc} style={{ width: 270, height: 180 }} />
        </View>
        <View style={{ margin: 5 }}>
          <Text style={styles.mainScrolTitle}>{Site[i].title}</Text>
          <Text style={styles.mainScrolText}>{Site[i].passage}</Text>
        </View>
      </View>,
    );
  }

  const Review = [];
  const reviewList = [
    {
      imgsrc: require("../Image/Car.png"),
      author: "조광일",
      passage: "만족스럽습니다.. 맥주 한 캔 들고 스크린으로 영화틀면 게임 끝..",
      rate: 4,
    },
    {
      imgsrc: require("../Image/Car.png"),
      author: "양홍원",
      passage: "만족스럽습니다.. 맥주 한 캔 들고 스크린으로 영화틀면 게임 끝..",
      rate: 4,
    },
    {
      imgsrc: require("../Image/Car.png"),
      author: "조성우",
      passage: "만족스럽습니다.. 맥주 한 캔 들고 스크린으로 영화틀면 게임 끝..",
      rate: 4,
    },
  ];

  for (let i = 0; i < 3; i++) {
    let star = [];

    for (let j = 0; j < reviewList[i].rate; j++) {
      star.push(
        <Image source={require("../Icon/Star.png")} style={styles.stars} />,
      );
    }

    Review.push(
      <View
        style={{
          flexDirection: "row",
          paddingTop: 5.1,
          paddingBottom: 1.4,
          marginVertical: 9,
          ...Platform.select({ android: { elevation: 3 } }),
        }}
      >
        <View>
          <Image
            source={reviewList[i].imgsrc}
            style={{ width: 107, height: 87 }}
          />
        </View>
        <View style={{ marginHorizontal: 18, justifyContent: "center" }}>
          <Text style={{ fontSize: 11, lineHeight: 20, color: "#0a0a0a" }}>
            작성자: {reviewList[i].author}
          </Text>
          <Text
            style={{
              fontSize: 11,
              lineHeight: 16,
              color: "#0a0a0a",
              width: windowWidth - 180,
            }}
          >
            후기: {reviewList[i].passage}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {star}
          </View>
        </View>
      </View>,
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.slideContainer}>
        <Swiper
          loop={true}
          autoplay={true}
          activeDot={
            <View
              style={{
                backgroundColor: "#017B43",
                width: 30,
                height: 8,
                borderRadius: 100,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          dotColor={"rgb(220,220,220)"}
        >
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "rgb(255, 255, 190)",
              height: 95,
              paddingLeft: 50,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20, lineHeight: 30 }}>
              지금 조광일 응원하면
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 20, lineHeight: 24 }}>
              자박 차박 포인트가 두 배로
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "rgb(210, 190, 180)",
              height: 95,
              paddingLeft: 50,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20, lineHeight: 30 }}>
              지금 조광일 응원하면
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 20, lineHeight: 24 }}>
              자박 차박 포인트가 세 배로
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "rgb(190, 230, 170)",
              height: 95,
              paddingLeft: 50,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20, lineHeight: 30 }}>
              지금 조광일 응원하면
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 20, lineHeight: 24 }}>
              자박 차박 포인트가 네 배로
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "rgb(200, 200, 250)",
              height: 95,
              paddingLeft: 50,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 20, lineHeight: 30 }}>
              지금 조광일 응원하면
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 20, lineHeight: 24 }}>
              자박 차박 포인트가 열 배로
            </Text>
          </View>
        </Swiper>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View style={styles.subButtonContainer}>
          <TouchableOpacity
            style={styles.subButtonStyle}
            onPress={() => navigate("GuidePage", { screen: "GuidePage" })}
          >
            <Image
              source={require("../Icon/Barbecue.png")}
              style={styles.subButtonImage}
            />
            <Text style={styles.subButtonText}>이용가이드</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subButtonStyle}
            onPress={() => navigate("ReservedPage", { screen: "ReservedPage" })}
          >
            <Image
              source={require("../Icon/Bus.png")}
              style={styles.subButtonImage}
            />
            <Text style={styles.subButtonText}>빌린 내역</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.subButtonStyle}
            onPress={() => navigate("PointPage", { screen: "PointPage" })}
          >
            <Image
              source={require("../Icon/Fire.png")}
              style={styles.subButtonImage}
            />
            <Text style={styles.subButtonText}>포인트 조회</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subButtonStyle}>
            <Image
              source={require("../Icon/Tent.png")}
              style={styles.subButtonImage}
            />
            <Text style={styles.subButtonText}>회원 정보</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 40 }} />
        <View style={styles.mainButtonContainer}>
          <View>
            <Text style={styles.mainButtonTitle}>공간 대여</Text>
          </View>
          <TouchableOpacity
            style={styles.mainButtonStyle}
            onPress={() => navigate("Select", { screen: "Select" })}
          >
            <ImageBackground
              source={require("../Image/Outdoor.png")}
              imageStyle={{ borderRadius: 8 }}
              style={styles.mainButtonImage}
            >
              <Text style={styles.mainButtonText}>노지 찾아보기</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.mainButtonStyle}>
            <ImageBackground
              source={require("../Image/Parking.png")}
              imageStyle={{ borderRadius: 8 }}
              style={styles.mainButtonImage}
            >
              <Text style={styles.mainButtonText}>주차장 찾아보기</Text>
            </ImageBackground>
          </TouchableOpacity>
          <View style={{ marginBottom: 60 }} />
        </View>
        <View>
          <View>
            <Text style={styles.mainButtonTitle}>뜨고 있는 부지</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {siteList}
          </ScrollView>
          <View style={{ marginBottom: 60 }} />
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity
            onPress={() => navigate("AdPage", { screen: "AdPage" })}
            style={{
              backgroundColor: "#daff73",
              paddingLeft: 46,
              height: 80,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "500", fontSize: 20, lineHeight: 24 }}>
              다른 회사 광고 보고
            </Text>
            <Text style={{ fontWeight: "300", fontSize: 20, lineHeight: 24 }}>
              자박 차박 포인트 받아가세요
            </Text>
          </TouchableOpacity>
          <View style={{ marginBottom: 60 }} />
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <View>
          <Text style={styles.mainButtonTitle}>다른 고객의 후기</Text>
        </View>
        <View>{Review}</View>
        <View style={{ marginBottom: 60 }} />
      </View>
      <View style={{ backgroundColor: "#eeeeee", height: 164 }}>
        <View style={{ marginTop: 22, marginLeft: 20 }}>
          <Text style={styles.footerText}>(주) 보노보노와 친구들</Text>
          <Text style={styles.footerText}>대표이사 유용상</Text>
          <Text style={styles.footerText}>주소 상명대학교</Text>
          <Text style={styles.footerText}>이메일 @sangmyung</Text>
          <Text style={styles.footerText}>
            인스타그램 · 이용약관 · 개인정보 처리방침
          </Text>
        </View>
      </View>
      <View style={{ height: 25 }} />
    </ScrollView>
  );
}

export { MainPage };

// style
const styles = StyleSheet.create({
  slideContainer: {
    height: 140,
    justifyContent: "center",
  },
  subButtonContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 90,
  },
  subButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  subButtonImage: {
    width: 36,
    height: 36,
  },
  subButtonText: {
    fontSize: 11,
    fontWeight: "500",
  },
  mainButtonContainer: {},
  mainButtonTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 12,
  },
  mainButtonStyle: {
    backgroundColor: "white",
    height: 105,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 8,
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  mainButtonImage: {
    height: 85,
    justifyContent: "center",
    width: windowWidth - 60,
  },
  mainButtonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    marginLeft: 12,
  },
  mainScrolTitle: {
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 24,
  },
  mainScrolText: {
    fontSize: 14,
    lineHeight: 20,
  },
  footerText: {
    fontSize: 12,
    lineHeight: 24,
    color: "#0a0a0a",
  },
  stars: {
    width: 13,
    height: 13,
  },
});
