import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';

const ScrollBar = (props) => {

    const {style} = props;

    const rotateStyle = {
        transform: [{rotate:(style === 'Vertical')? '0deg':'90deg'}],
    }

  return (
    <View style={[styles.container, rotateStyle]}>
      <View style={[styles.scrollBarStyle]}></View>
    </View>
  )
}

export default ScrollBar

const styles = StyleSheet.create({
    container: {
        width: 14,
        height: 72,
        justifyContent: 'center',
    },

    scrollBarStyle: {
        width: 6,
        height: 64,
        backgroundColor: ColorsSkin.Disable,
        borderRadius: 8,
    }
})