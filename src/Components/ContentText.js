import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TypoSkin from '../../Styles/TypoSkin';
import PropTypes from "prop-types";

ContentText.propTypes = {
    contentAlign: PropTypes.string,
    titleContent: PropTypes.string,
    subTitleContent: PropTypes.string,
    bodyContent: PropTypes.string,
}

ContentText.defaultProps = {
    contentAlign: 'center',
    titleContent: 'Title',
    subTitleContent: '',
    bodyContent: '',
}

function ContentText(props) {

    const {contentAlign, titleContent, subTitleContent, bodyContent} = props;
    let alignStyle = {};

    switch (contentAlign) {
        case 'left': {
            alignStyle = {
                alignItems: 'flex-start',
                flexDirection: 'column',
            }
        }
        break;
        case 'right': {
            alignStyle = {
                alignItems: 'flex-end',
                flexDirection: 'column',
            }
        }
        break;
        case 'center': {
            alignStyle = {
                alignItems: 'center',
                flexDirection: 'column',
            }
        }
        break;
    }

  return (
    <View style={[styles.container, alignStyle]}>
      <Text style={[TypoSkin.title3, {textAlign: contentAlign}]}>{titleContent}</Text>
      {(subTitleContent) && <Text style={[TypoSkin.Subtitle3, {textAlign: contentAlign}]}>{subTitleContent}</Text>}
      {(bodyContent) && <Text style={[TypoSkin.body, {textAlign: contentAlign}]}>{bodyContent}</Text>}
    </View>
  )
}

export default ContentText

const styles = StyleSheet.create({
    container: {
        // height: 'auto',
        // width: 'auto',
    }
})