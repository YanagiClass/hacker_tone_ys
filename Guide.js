import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

function GuidePage() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.first}>
                    <Image style={styles.one_photo} source={require('./assets/noji.png')}></Image>
                    <Text style={styles.title_text}>노지 찾아보기</Text>
                    <Text style={styles.sub_text}>노지 빌릴 장소를</Text>
                    <Text style={styles.sub_text}>검색합니다.</Text>
                </View>
                <View style={styles.second}>
                    <Image style={styles.two_photo} source={require('./assets/time.png')}></Image>
                    <Text style={styles.title_text}>대여 시간 설정하기</Text>
                    <Text style={styles.sub_text}>대여시간, 반납시간을</Text>
                    <Text style={styles.sub_text}>설정합니다.</Text>
                </View>
                <View style={styles.third}>
                    <Image style={styles.three_photo} source={require('./assets/reserve.png')}></Image>
                    <Text style={styles.title_text}>위치 클릭하기</Text>
                    <Text style={styles.sub_text}>검색 결과에 따른</Text>
                    <Text style={styles.sub_text}>표시된 위치를 클릭 시</Text>
                    <Text style={styles.sub_text}>자세한 위치 정보가 나옵니다.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title_text: {
        color:"#222222",
        fontSize:18,
        fontWeight:"600",
    },
    sub_text: {
        color:"#222222",
        fontSize:16,
        fontWeight:"300",
    },
    first: {
        marginTop: 40,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 164,
        alignItems: "center",
        justifyContent: "center",
    },
    one_photo: {
        marginBottom: 8,
        width: 320,
        height: 70,
    },
    second: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 164,
        alignItems: "center",
        justifyContent: "center",
    },
    two_photo: {
        marginBottom: 8,
        width: 320,
        height: 55,
    },
    third: {
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 225,
        alignItems: "center",
        justifyContent: "center",
    },
    three_photo: {
        marginBottom: 8,
        width: 320,
        height: 352,
    },
});

export default GuidePage;