import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin';

const SliderBar = (props) => {
    return (
        <View style={styles.container}>
          <View style={styles.Divider}>   
          </View>
        </View>
      )
}
export default SliderBar

const styles = StyleSheet.create({
    container: {
      
    },
    Divider :{
        width : 382,
        height: 1,
        backgroundColor:ColorsSkin.Gray_3Background,
    }
        
})