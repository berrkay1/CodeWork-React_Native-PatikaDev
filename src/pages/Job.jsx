import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import JobCart from '../components/JobCart'

const Job = () => {
  return (
    <View style={styles.container}>
        <JobCart />
        <JobCart />
        <JobCart />
    </View>
  )
}

export default Job

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F2F2F2',
        margin:10
    }
})