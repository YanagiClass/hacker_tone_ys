import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';

function Setting({navigation}) {
    const GoodBye = () => {
        alert('그동안 즐거웠어요. 다음에 또 오세요!')
        navigation.popToTop();
    }
    return(
        <View style={styles.container}>
            <View style={styles.userinf}>
                <View style={styles.userInfo}>
                    <Text>디버깅</Text>
                    <Text>010-0000-1234</Text>
                </View>
                <View style={styles.userphoto}>
                  <Image style={styles.userphoto} source={require('./assets/temp/background.jpg')}></Image>
                </View>
            </View>
            <View style={styles.settinguser}>
                <TouchableOpacity><Text>개인정보 수정</Text></TouchableOpacity>
                <TouchableOpacity><Text>비밀번호 변경</Text></TouchableOpacity>
                <TouchableOpacity><Text>대여내역 확인</Text></TouchableOpacity>
                <TouchableOpacity><Text>포인트 조회</Text></TouchableOpacity>
            </View>
            <View style={styles.exit}>
                <TouchableOpacity><Text style={styles.logout} onPress={() => {Alert.alert("로그아웃", "로그아웃 하시겠습니까?", [{text:"예", onPress:() => {navigation.popToTop()}},{text: "아니오"}],{cancelable: false,onDismiss: () => {},},);}}>로그아웃</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.byebye} onPress={() => {Alert.alert("경고!", "회원 탈퇴를 진행합니다. \n회원 탈퇴를 진행하면 더 이상 해당 정보로 로그인을 진행할 수 없습니다. \n계속 할까요?", [{text:"네, 나갈래요", onPress:GoodBye},{text: "아니요, 좀 더 있을래요."}],{cancelable: false,onDismiss: () => {},},);}}>회원 탈퇴</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userinf:{
        flex:0.5,
        flexDirection:"row",
        alignItems:"center",
    },
    userphoto:{
        flex: 1,
        width: 55,
        height: 55,
        borderRadius: 40,
        resizeMode: 'cover',
        overflow:'hidden',
    },
    userInfo:{
        flex:1,
        alignItems:"flex-end",
    },
    settinguser:{
        flex:0.4,
        margin:16,
    },
    exit:{
        flex:0.4,
        margin:16,
    },
    logout:{
        fontWeight:"600",
        color:"blue",
    },
    byebye:{
        fontWeight:"600",
        color:"red",
    },
});
export default Setting