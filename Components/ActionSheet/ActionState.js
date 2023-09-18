import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin'
import text_styles from '../../Styles/TextStyle'
import TypoSkin from '../../Styles/TypoSkin'
import Button from '../Button/Button'

const ActionState = (props) => {

    const {state, content} = props;

    const stateStyle = {
        color:(state === 'PositiveState')? ColorsSkin.InfoPrimary:ColorsSkin.ErrorPrimary,

    }

  return (
    <Pressable style={styles.container}>
        <Text style={[stateStyle, TypoSkin.title4]}>{content}</Text>
    </Pressable>
  )
}

export default ActionState

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 46,
        backgroundColor: ColorsSkin.Gray_1Background,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})