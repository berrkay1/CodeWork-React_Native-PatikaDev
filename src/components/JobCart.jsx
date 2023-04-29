import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const JobCart = ({ onPress, job }) => {

    return (
        <Pressable style={styles.container} onPress={onPress}  >
            <Text style={styles.title}>{job.name}</Text>
            <Text style={styles.smallTitle}>{job.company.name}</Text>
            <Text style={styles.locationDesc}>{job.locations[0].name}</Text>
            <Text style={styles.level}>{job.levels[0].name}</Text>
        </Pressable>
    )
}

export default JobCart

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 1.05,
        height: Dimensions.get('window').height / 3.8,
        borderColor: '#BDBDBD',
        borderWidth: 1,
        backgroundColor: '#fff',
        padding: 5,
        margin: 10,
        borderRadius: 10,

    },
    title: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    smallTitle: {
        fontSize: 17,
        fontWeight: '400'
    },
    locationDesc: {
        backgroundColor: '#EF5350',
        padding: 8,
        borderRadius: 30,
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 5,
        width: 195
    },
    level: {
        fontSize: 20,
        color: '#EF5350',
        fontWeight: 'bold',
        textAlign: 'right'

    }
})