import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';

const ProgressBar = (props) => {

    const { status, percentage } = props;
    let statusColor = '';

    switch (status) {
        case 'Default': 
            statusColor = ColorsSkin.PrimaryColor;
            break;
        case 'Success':
            statusColor = ColorsSkin.SuccessPrimary;
            break;
        case 'Error':
            statusColor = ColorsSkin.ErrorPrimary;
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