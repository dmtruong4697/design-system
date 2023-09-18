import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin'
import ColorsStyle from '../Styles/ColorsStyle'

const SliderBar = (props) => {

    const { status, percentage } = props;
    let statusColor = '';

    switch (status) {
        case 'Default': 
            statusColor = ColorsSkin.PrimaryColor;        
            break;
        case 'Pressed-Active':
            statusColor = ColorsSkin.PrimaryColor;    
            break;
        case 'Disable':
            statusColor = ColorsSkin.Disable;
            break;
    } 

    const colorBarStyle = {
        backgroundColor: ColorsSkin.Gray_3Background,
        borderRadius: 8,
        width: '100%',
        height: 8,
    }

    const valueRangeBarStyle = {
        backgroundColor: statusColor,
        borderRadius: 8,
        width: percentage,
        height: 8,
    }

  return (
    <View style={styles.container}>
      <View style={[colorBarStyle]}>
        <View style={[valueRangeBarStyle]}></View>
      </View>
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
    container: {
        width: 320,
        height: 20,
    }
})