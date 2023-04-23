import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobCart = () => {
    return (
        <View styles={styles.container}>
            <Text style={styles.title}>JobCart</Text>
            <Text style={styles.smallTitle}>JobCart</Text>
            <Text style={styles.locationDesc}>JobCart</Text>
            <Text style={styles.level}>JobCart</Text>
        </View>
    )
}

export default JobCart

const styles = StyleSheet.create({
    container:{
        width:Dimensions.get('window').width/1.05,
        height:Dimensions.get('window').height/6,
        borderColor:'#BDBDBD',
        borderWidth:1,
        backgroundColor:'red',

    },
    title:{
        fontSize:22,
        fontWeight:'bold'
    },
    smallTitle:{
        fontSize:17,
        fontWeight:'400'
    },
    locationDesc:{
        backgroundColor:'#EF5350',
        padding:8,
        borderRadius:30,
        color:'#fff',
        fontSize:19,
        fontWeight:'bold',
        marginBottom:5
    },
    level:{
        fontSize:20,
        color:'#EF5350',
        fontWeight:'bold',
        textAlign:'right'
        
    }
})