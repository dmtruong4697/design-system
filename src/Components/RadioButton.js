import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';
import ColorsSkin from '../../Styles/ColorsSkin';
import ColorsStyle from '../../Styles/ColorsStyle';

const RadioButton = (props) => {

    const { size, check, label, labelPosition, state } = props;
    const [isChecked, setIsChecked] = useState(false);
    
    let stateColor = (state === 'Active')? ColorsSkin.PrimaryColor:ColorsSkin.DisableBackground;
    let backgroundColor = (check === 'Yes')? stateColor:null;
    if (state === 'Disable' && check === 'No') {backgroundColor = ColorsStyle.gray_3};

    let labelContent = '';
    if(state === 'Active' ){
        if(check === 'Yes') labelContent = 'Checked'
        else labelContent = 'Unchecked'
    } else{
        if(check === 'No') labelContent = 'Disable-Unchecked'
        else labelContent = 'Disable-Checked'
    }

    const containerStyle = {
        height: size,
        width: 'auto',
        flexDirection: 'row',
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
        backgroundColor:(state === 'Disable' && check === 'No')? ColorsSkin.Gray_4Background:null,
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
      <Pressable style={[sizeStyleRadioContainer]}>
        <View style={[radioStyle]}>
            { check === 'Yes' && <View style={[innerRadioStyle]}/>}
        </View>
      </Pressable>
      {(label === 'Yes' && labelPosition === 'Right') && <Text style={{labelStyle}}>{labelContent}</Text>}
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({

})