import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';

const Switch = (props) => {

    const {label, Switch, state, labelPosition, onPress} = props;
    let onColor, offColor, labelContent;
    const size = (label === 'Yes' && labelPosition === 'Contain')? 60:44;
    switch (state) {
        case 'Active': {
            onColor = ColorsSkin.PrimaryColor;
            offColor = ColorsSkin.Gray_3Background;
            labelContent = (Switch === true)? 'ON':'OFF';
        }
        break;
        case 'Disable': {
            onColor = ColorsSkin.PrimaryColorBorderColor;
            offColor = ColorsSkin.Disable;
            labelContent = (Switch === true)? 'On - Disable':'Off - Disable';
        }
    }

    if (label === 'Yes' && labelPosition === 'Contain'){
        labelContent = (Switch === true)? 'ON':'OFF';
    }

    const switchStyle = {
        width: size,
        height: 24,
        backgroundColor: (Switch === true)? onColor:offColor,
        //justifyContent: (Switch === 'Yes')? 'flex-end':'flex-start',
        borderRadius: 24,
    }

    const innerSwitchStyle = {
        width: 20,
        height: 20,
        backgroundColor: (state === 'Disable' && Switch === false)? ColorsSkin.Gray_3Background:ColorsSkin.Gray_1Background,
        top: 2,
        left: (Switch === true)? (size -22):2,
        borderRadius: 100,
    }

    const labelStyle = {
        color: (state === 'Active')? ColorsSkin.PrimaryText:ColorsSkin.Disable,
        marginLeft: 5,
        marginRight: 5,
    }

    const containLabelStyle = {
        color: ColorsSkin.OnColorBackground,
        height: 22,
        top: -18,
        left: (Switch === true)? 14:26,
    }

  return (
    <View style={styles.container}>
      {(label === 'Yes' && labelPosition === 'Left') && <Text style={labelStyle}>{labelContent}</Text>}
      <Pressable style={switchStyle} onPress={onPress}>
        <View style={innerSwitchStyle}></View>
        {(label === 'Yes' && labelPosition === 'Contain') && <Text style={containLabelStyle}>{labelContent}</Text>}
      </Pressable>
      {(label === 'Yes' && labelPosition === 'Right') && <Text style={labelStyle}>{labelContent}</Text>}
    </View>
  )
}

export default Switch

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

    }
})