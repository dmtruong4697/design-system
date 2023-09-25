import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../../Styles/ColorsSkin';
import ColorsStyle from '../../Styles/ColorsStyle';
import PropTypes from "prop-types"
import CustomButton from './CustomButton';
import MediaView from './MediaView';
import ContentText from './ContentText';

ListTitle.propTypes = {
  leftMedia: PropTypes.string,
  rightMedia: PropTypes.string,
  buttonContent: PropTypes.string,
  titleContent: PropTypes.string,
  subTitleContent: PropTypes.string,
  contentAlign: PropTypes.string,
  buttonIconUri: PropTypes.string,
  buttonText: PropTypes.string,
}

ListTitle.defaultProps = {
  leftMedia: '',
  rightMedia: '',
  buttonContent: '',
  titleContent: 'Title',
  subTitleContent: '',
  contentAlign: 'Left',
  buttonIconUri: '',
  buttonText: 'Change action view'
}

function ListTitle(props) {

  const {  
    leftMedia,
    rightMedia,
    buttonContent,
    titleContent,
    subTitleContent,
    contentAlign,
    buttonIconUri,
    buttonText,
  } = props;

  return (
    <View style={[styles.container]}>
      {(leftMedia) && <View style={styles.leftMedia}>
        <MediaView
          size={30}
          style={'BoundingBoxCircle'}
          mediaUri={leftMedia}
        />
      </View>}

      <View style={[styles.content, {justifyContent: (contentAlign === 'center')? 'center':'space-between'}]}>
        {(contentAlign === 'right') && <CustomButton
            style='TextAction'
            size={24}
            state='Primary'
            position='IconRight'
            content={buttonText}
            iconUri={buttonIconUri}
        ></CustomButton> }

        <ContentText
          contentAlign={contentAlign}
          titleContent={titleContent}
          subTitleContent={subTitleContent}
        />

        {(contentAlign === 'left') && <CustomButton
            style='TextAction'
            size={24}
            position='IconRight'
            content={buttonText}
            iconUri={buttonIconUri}
        ></CustomButton>}
      </View>

      {(rightMedia) && <View style={styles.rightMedia}>
        <MediaView
          size={30}
          style={'BoundingBoxCircle'}
          mediaUri={rightMedia}
        />
      </View>}
    </View>
  )
}

export default ListTitle

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        backgroundColor: ColorsSkin.Gray_1Background,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,

    },
    content: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftMedia: {
      width: '10%',
      alignItems: 'center',
      flex: 0,
      paddingRight: 5,
    },
    rightMedia: {
      width: '10%',
      alignItems: 'center',
      alignContent: 'center',
      flex: 0,
      paddingLeft: 5,
    }

})