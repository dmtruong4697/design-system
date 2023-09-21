import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ColorsSkin from '../../../Styles/ColorsSkin';
import TypoSkin from '../../../Styles/TypoSkin';
import PropTypes from "prop-types";

ActionState.PropTypes = {
    state: PropTypes.string,
    content: PropTypes.string,
}

ActionState.defaultProps = {
    state: 'PositiveState',
    content: 'Action',
}

function ActionState(props) {

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
        height: 'auto',
        padding: 10,
        backgroundColor: ColorsSkin.Gray_1Background,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})