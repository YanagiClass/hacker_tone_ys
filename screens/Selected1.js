import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, ImageBackground } from "react-native";
import styled from "styled-components";

const Selected1 = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <Mapstage>
        <MapView
          initialRegion={{
            latitude: 37.6013,
            longitude: 126.8147,
            latitudeDelta: 0.005,
            longitudeDelta: 0,
          }}
          style={{ height: "100%" }}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{ latitude: 37.6013, longitude: 126.8147 }}
            title="행주산성 나루터 노지"
            description="야경이 아름다운 서울근교 차박."
            onPress={() => navigate("Selected", { screen: "Selected" })}
          />
        </MapView>
      </Mapstage>
      <Des>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                width: "100%",
                padding: 10,
              }}
            >
              <Text>행주산성 나루터 노지</Text>
              <Text style={{ color: "#8d8a8a" }}>
                경기도 고양시 덕양구 행주동 행주산성로 171
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "white",
                flex: 1,
                width: "100%",
                padding: 10,
              }}
            >
              <Text>이용 안내</Text>
              <Text style={{ color: "#8d8a8a" }}>
                이용 후 쓰레기는 가져갈 것.
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Image source={require("../assets/1.png")} />
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            padding: 10,
            width: "100%",
          }}
        >
          <Text>총 24시간 이용</Text>
          <View style={{ width: "50%" }}>
            <Button
              title="예약하기"
              onPress={() => Alert.alert("캠핑장으로 전화연결을 하겠습니다.")}
            />
          </View>
          <Text style={{ color: "#8d8a8a" }}>오늘 16:00 ~ 내일 16:00</Text>
        </View>
      </Des>
    </Container>
  );
};
export default Selected1;

const Container = styled.View`
  background-color: none;
  flex: 1;
`;
const Mapstage = styled.View`
  flex: 1;
`;
const Des = styled.View`
  flex: 1;
`;
