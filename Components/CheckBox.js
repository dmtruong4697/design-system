import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Icons from '../Icons/Icons';
import ColorsSkin from '../Styles/ColorsSkin';
import ColorsStyle from '../Styles/ColorsStyle';

const CheckBox = (props) => {

    const { size, check, label, labelPosition, state } = props;
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

    const sizeStyleCheckboxContainer = {
        width: size,
        height: size,
        marginLeft: 5,
        marginRight: 5,
    }

    const sizeStyle = {
        width: size - 4,
        height: size - 4,
        backgroundColor: backgroundColor,
        borderRadius: 4,
        borderWidth: (check === 'No')? 1:0,
        borderColor: ColorsStyle.gray_4,
    }


  return (
    <View style={[containerStyle]}>
      {(label === 'Yes' && labelPosition === 'Left') && <Text style={{labelStyle}}>{labelContent}</Text>}
      <Pressable style={[sizeStyleCheckboxContainer]}>
        <View style={[sizeStyle]}>
            { check === 'Yes' && <Icons size={10} uri='https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e'></Icons>}
        </View>
      </Pressable>
      {(label === 'Yes' && labelPosition === 'Right') && <Text style={{labelStyle}}>{labelContent}</Text>}
    </View>
  )
}

export default CheckBox

const styles = StyleSheet.create({

})