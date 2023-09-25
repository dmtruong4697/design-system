import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin'
import ColorsStyle from '../../Styles/ColorsStyle'
import TypoSkin from '../../Styles/TypoSkin'
import ContentText from './ContentText'
import CustomButton from './CustomButton'
import PropTypes from "prop-types"

EmptyScreenView.propTypes = {
    imageUri: PropTypes.string,
    contentAlign: PropTypes.string,
    titleContent: PropTypes.string,
    subTitleContent: PropTypes.string,
    bodyContent: PropTypes.string,
    buttonStyle: PropTypes.string,
    buttonWidth: PropTypes.string,
    buttonSize: PropTypes.number,
    buttonState: PropTypes.string,
    buttonPosition: PropTypes.string,
    buttonContent: PropTypes.string,
    buttonIconUri: PropTypes.string,
    onPress:PropTypes.func
}

EmptyScreenView.defaultProps = {
    imageUri: '',
    contentAlign: 'center',
    titleContent: '',
    subTitleContent: '',
    bodyContent: '',
    buttonStyle: 'Ghost',
    buttonWidth: '90%',
    buttonSize: 48,
    buttonState: 'Primary',
    buttonPosition: 'TextOnly',
    buttonContent: 'Button',
    buttonIconUri: '',
    onPress:() => {}
}

function EmptyScreenView(props) {

    const {
        imageUri,
        contentAlign,
        titleContent,
        subTitleContent,
        bodyContent,
        buttonStyle,
        buttonWidth,
        buttonSize,
        buttonState,
        buttonPosition,
        buttonContent,
        buttonIconUri,
        onPress
    } = props;

  return (
    <View style={styles.container}>
      <View style={styles.cardDefault}>
        <Image style={styles.imageStyle} source={{uri: imageUri}}></Image>
        <ContentText
            contentAlign={contentAlign}
            titleContent={titleContent}
            subTitleContent={subTitleContent}
            bodyContent={bodyContent}
        />
      </View>

      <CustomButton
      onPress={onPress}
            style={buttonStyle}
            size={buttonSize}
            state={buttonState}
            position={buttonPosition}
            content={buttonContent}
            buttonWidth={buttonWidth}
            iconUri={buttonIconUri}

        />
    </View>
  )
}

export default EmptyScreenView

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: ColorsSkin.OnColorBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardDefault: {
        height: 'auto',
        width: '90%',
        //top: 220,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: ColorsStyle.lime_3,
        marginBottom: 20,
    },
    imageStyle: {
        height: 340,
        width: 340,
    }
})