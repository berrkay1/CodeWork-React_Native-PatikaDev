import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobDetail = ({ route }) => {

  const job = route.params.item

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerBody}>
        <Text style={styles.jobName}>{job.name}</Text>
        <Text style={styles.location}>
          <Text style={styles.titleHeader}>Locations:</Text>
          {job.name}
        </Text>
        <Text style={styles.jobLevel}>
          <Text style={styles.titleHeader}>Job Level:</Text>
          {job.name}
        </Text>
        <Text style={styles.jobTitle}></Text>
      </View>
      <View style={styles.descBody}>
        <Text style={styles.jobDesc}></Text>
      </View>
      <View style={styles.buttonBody}>
        
      </View>
    </ScrollView>
  )
}

export default JobDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  headerBody: {
    flex: 1
  },
  jobName: {
    color: '#6B767C',
    fontSize: 22,
    fontWeight: 'bold'
  },
  titleHeader: {
    fontSize: 15,
    color: '#EF5350'
  },
  location: {
    fontSize: 15,
    color: '#000'
  },
  jobLevel: {
    fontSize: 15,
    color: '#000'
  },
  jobTitle: {
    fontSize: 18,
    color: '#6B767C'
  },
  descBody: {
    height: 300,
    backgroundColor: '#fff',
    flex: 4
  },
  jobDesc: {
    fontSize: 15,
    color: '#000'
  },
  buttonBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  btn: {
    backgroundColor: '#EF5350',
    fontSize: 22,
    fontWeight: 'bold'
  }
})