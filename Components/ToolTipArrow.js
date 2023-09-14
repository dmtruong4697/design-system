import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin'

const ToolTipArrow = (props) => {

    const {rotate} = props;

    const transformStyle = {
        transform: [{ rotate: rotate }],
    }

  return (
        <View style={[styles.arrow, transformStyle]}>
        </View>
  )
}

export default ToolTipArrow

const styles = StyleSheet.create({
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 7,
        borderRightWidth: 7,
        borderBottomWidth: 9,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: ColorsSkin.PrimaryColor,
    }
})