import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';
import PropTypes from "prop-types";

ScrollBar.propTypes = {
  style: PropTypes.string,
  size: PropTypes.number,
}

ScrollBar.defaultProps = {
  style: 'Vertical',
  size: 70,
}

function ScrollBar(props)  {

    const {style, size} = props;

    const rotateStyle = {
        transform: [{rotate:(style === 'Vertical')? '0deg':'90deg'}],
    }

    const sizeStyle = {
      height: size,
    }

  return (
    <View style={[styles.container, rotateStyle]}>
      <View style={[styles.scrollBarStyle, sizeStyle]}></View>
    </View>
  )
}

export default ScrollBar

const styles = StyleSheet.create({
    container: {
        width: 14,
        height: 'auto',
        justifyContent: 'center',
    },

    scrollBarStyle: {
        width: 6,
        //height: 70,
        backgroundColor: ColorsSkin.Disable,
        borderRadius: 8,
    }
})