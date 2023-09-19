import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ListTitle from '../ListTitle'

const ExpansionItem = () => {
  return (
    <View>
      <ListTitle
        contentViewAlign='Left'
        withMedia='Yes'
      ></ListTitle>
    </View>
  )
}

export default ExpansionItem

const styles = StyleSheet.create({})