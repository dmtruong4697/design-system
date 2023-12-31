import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ColorsSkin from '../../Styles/ColorsSkin';
import ColorsStyle from '../../Styles/ColorsStyle';
import PropTypes from "prop-types";

RadioButton.propTypes = {
    size: PropTypes.number,
    check: PropTypes.bool,
    state: PropTypes.string,
    label: PropTypes.string,
    labelPosition: PropTypes.string,
    onPress: PropTypes.func,
}

RadioButton.defaultProps = {
    size: 24,
    check: false,
    state: "Active",
    label: "Yes",
    labelPosition: "Right",
    onPress: {},
}

function RadioButton(props) {

    const { size, check, label, labelPosition, state, onPress } = props;
    
    let stateColor = (state === 'Active')? ColorsSkin.PrimaryColor:ColorsSkin.DisableBackground;
    let backgroundColor = (check === true)? stateColor:null;
    if (state === 'Disable' && check === false) {backgroundColor = ColorsStyle.gray_3};

    let labelContent = '';
    if(state === 'Active' ){
        if(check === true) labelContent = 'Checked'
        else labelContent = 'Unchecked'
    } else{
        if(check === false) labelContent = 'Disable-Unchecked'
        else labelContent = 'Disable-Checked'
    }

    const containerStyle = {
        height: size,
        width: 120,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    }

    const labelStyle = {
        color: (state === 'Active')? ColorsSkin.PrimaryText:ColorsSkin.Disable,
    }

    const sizeStyleRadioContainer = {
        width: size,
        height: size,
        marginLeft: 5,
        marginRight: 5,
    }

    const radioStyle = {
        width: size - 4,
        height: size - 4,
        backgroundColor:(state === 'Disable' && check === false)? ColorsSkin.Gray_4Background:null,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: stateColor,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    }

    const innerRadioStyle = {
        width: size/2,
        height: size/2,
        backgroundColor: backgroundColor,
        borderRadius: 100,
        //borderWidth: 1,
        //borderColor: stateColor,
    }


  return (
    <View style={[containerStyle]}>
      {(label === 'Yes' && labelPosition === 'Left') && <Text style={{labelStyle}}>{labelContent}</Text>}
      <Pressable onPress={onPress} style={[sizeStyleRadioContainer]}>
        <View style={[radioStyle]}>
            { check === true && <View style={[innerRadioStyle]}/>}
        </View>
      </Pressable>
      {(label === 'Yes' && labelPosition === 'Right') && <Text style={{labelStyle}}>{labelContent}</Text>}
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({

})