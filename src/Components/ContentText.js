import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TypoSkin from '../../Styles/TypoSkin';

const ContentText = (props) => {

    const {subTitle, body, contentAlign, titleContent, subTitleContent, bodyContent} = props;
    let alignStyle = {};

    switch (contentAlign) {
        case 'Left': {
            alignStyle = {
                alignItems: 'flex-start',
                flexDirection: 'column',
            }
        }
        break;
        case 'Right': {
            alignStyle = {
                alignItems: 'flex-end',
                flexDirection: 'column',
            }
        }
        break;
        case 'Center': {
            alignStyle = {
                alignItems: 'center',
                flexDirection: 'column',
            }
        }
        break;
    }

  return (
    <View style={[alignStyle]}>
      <Text style={[TypoSkin.title3]}>{titleContent}</Text>
      {(subTitle === 'Yes') && <Text style={[TypoSkin.Subtitle3]}>{subTitleContent}</Text>}
      {(body === 'Yes') && <Text style={[TypoSkin.body]}>{bodyContent}</Text>}
    </View>
  )
}

export default ContentText

const styles = StyleSheet.create({})