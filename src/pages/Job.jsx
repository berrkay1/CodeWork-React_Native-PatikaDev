import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import JobCart from '../components/JobCart'

const Job = ({ navigation }) => {

    const goToDetail = () => {
        navigation.navigate('JobDetail')
    }

    return (
        <View style={styles.container}>
            <JobCart onPress={goToDetail} />

        </View>
    )
}

export default Job

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    }
})