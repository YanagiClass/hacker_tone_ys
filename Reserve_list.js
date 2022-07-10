import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';

function ReservedPage(){
    return(
        <View style={styles.container}>
            <View style={styles.date}>

            </View>
            <View style={styles.reslist}>
                <Text style={styles.text}>아직 공간을 빌린 내역이 없습니다.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    date:{
        flex:0.4,
        backgroundColor:"white",
    },
    reslist:{
        flex:1.5,
        backgroundColor:"#e4e4e4",
        alignItems:"center",
        justifyContent:"center",
    },
    text:{
        fontSize:16,
        fontWeight:"300",
    },
});

export default ReservedPage;