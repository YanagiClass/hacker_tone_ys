import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import styled from "styled-components";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { createContext, useState, useContext } from "react";

const Context = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

const Select = ({ navigation: { navigate } }) => {
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
  const [InitialRegion, SetRegion] = useState({
    latitude: 36.8337,
    longitude: 127.1792,
    latitudeDelta: 0.005,
    longitudeDelta: 0,
  });

  return (
    <Container>
      <View
        style={{
          flex: 1,
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
      >
        <MapView
          initialRegion={InitialRegion}
          style={{ height: "100%" }}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            coordinate={{ latitude: 36.8337, longitude: 127.1792 }}
            title="차박명소"
            description="이곳은 차박명소 상명대학교입니다."
            onPress={() => navigate("Selected", { screen: "Selected" })}
          />
        </MapView>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            width: 320,
            height: 40,
            top: 450,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
          }}
        >
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={{ color: "#8d8a8a" }}>대여일자</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View
          style={{
            backgroundColor: "white",
            width: 320,
            height: 40,
            top: 350,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
          }}
        >
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={{ color: "#8d8a8a" }}>반납일자</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 320,
            height: 40,
            top: -20,
            elevation: 3,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 9,
            flexDirection: "row",
          }}
        >
          <View style={{ right: 60 }}>
            <Image source={require("../assets/search.png")} />
          </View>
          <TouchableOpacity
            onPress={() => navigate("Location", { screen: "Location" })}
          >
            <Text style={{ color: "#8d8a8a" }}>노지 빌릴 장소 검색하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
const Container = styled.View`
  background-color: none;
  flex: 1;
`;
const Header = styled.View`
  height: 80px;
  margin: auto;
  padding-top: 37px;
  background-color: white;
  display: flex;
`;
const Map = styled.View`
  flex: 1;
`;
const Bottom = styled.View`
  flex: 2;
`;
const Search = styled.View`
  background-color: teal;
  flex: 1;
`;
const Date = styled.View`
  background-color: teal;
  flex: 1;
`;
const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
`;
const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
export default Select;
