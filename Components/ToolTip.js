import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToolTipArrow from './ToolTipArrow'
import Button from './Button'

const ToolTip = (props) => {

    const {arrowPosition, Align, message} = props;

    const arrowPositionStyle = {
        top: 0.73,
        left: 19,
    }

  return (
    <View style={styles.container}>
      <ToolTipArrow style={styles.arrow}></ToolTipArrow>
      <Button
        style='Solid'
        size={32}
        state='Primary'
        position='TextOnly'
        content={message}
      ></Button>
    </View>
  )
}

export default ToolTip

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 'auto',
        backgroundColor: 'green',
        flexDirection: 'column'
    },
    arrow: {
        left: 10,
    }
})