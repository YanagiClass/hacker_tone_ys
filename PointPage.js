import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native-web';

function PointPage() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.point_view}>
                    <View style={styles.point_and_gain}>
                        <View style={styles.whatsyourpoint}>
                            <View>
                                <Image style={styles.star_point} source={require('./assets/Point.png')} />
                            </View>
                            <View>
                                <Text style={styles.mypoint_text}>내 포인트</Text>
                                <Text style={styles.mypoint}>1000P</Text>
                            </View>
                        </View>
                        <View style={styles.btn_space}>
                            <TouchableOpacity style={styles.gainbtn}>
                                <Text style={styles.btn_text}>획득하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.yourtotalpoint}>
                        <TouchableOpacity></TouchableOpacity>
                        <View style={styles.whatsyourtotal}>
                            <Text style={styles.yourtotalpointis}>총 포인트는</Text>
                            <Text style={styles.pointnumber}>1,000p</Text>
                            <Text style={styles.isyourpoint}>입니다.</Text>
                        </View>
                        <TouchableOpacity></TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.bold_text}>포인트 사용 내역</Text>
                    </View>
                </View>
                <View style={styles.list}>
                    <Text style={styles.text}>아직 포인트 사용 내역이 없습니다.</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    point_view:{
        backgroundColor:"white",
    },
    point_and_gain:{
        marginTop:29,
        flex:0.3,
        flexDirection:"row",
    },
    star_point:{
        marginLeft:20,
        width:48,
        height:48,
    },
    whatsyourpoint:{
        flex:1,
        flexDirection:"row",
    },
    mypoint_text:{
        fontSize:16,
        fontWeight:"300",
    },
    mypoint:{
        fontSize:16,
        fontWeight:"600",
    },
    btn_space:{
        flex:0.5,
        alignItems:'center',
        justifyContent:"center",
    },
    gainbtn:{
        width:91,
        height:39,
        borderRadius:10,
        backgroundColor:"#027b43",
        alignItems:'center',
        justifyContent:"center",
    },
    btn_text:{
        color:"white",
        fontSize:16,
        fontWeight:"400",
    },
    yourtotalpoint:{
        alignItems:'center',
        marginTop:29,
        marginBottom:108,
    },
    whatsyourtotal:{
        flexDirection:"column",
        flex:1,
        width:320,
        height:173,
        borderRadius:20,
        backgroundColor:"#69dc75",
    },
    yourtotalpointis:{
        marginTop:20,
        marginLeft:16,
        color:"white",
        fontSize:16,
        fontWeight:"300",
        justifyContent:"center",
        alignItems:"flex-start",
    },
    pointnumber:{
        marginLeft:49,
        color:"white",
        fontSize:66,
        fontWeight:"600",
        justifyContent:"center",
        alignItems:"center",
    },
    isyourpoint:{
        marginBottom:20,
        marginLeft:255,
        marginRight:16,
        color:"white",
        fontSize:16,
        fontWeight:"300",
        justifyContent:"center",
    },
    bold_text:{
        fontSize:18,
        fontWeight:"600",
        justifyContent:"center",
    },
    list: {
        flex: 1,
        backgroundColor: "#e4e4e4",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize:16,
        fontWeight:"300",
    }
})

export default PointPage;