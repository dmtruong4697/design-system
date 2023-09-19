import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MediaView from './MediaView'
import ContentText from './ContentText'
import CustomButton from './Button'
import ColorsSkin from '../../Styles/ColorsSkin'

const ListTitle = (props) => {

    const {style, contentViewAlign, withMedia, mediaUri} = props;
    let contentViewAlignStyle;
    const flexContent = (contentViewAlign === 'Center')? {flex: 0}:{flex: 1};

    switch (contentViewAlign) {
        case 'Left': {
            contentViewAlignStyle = {
                flexDirection: 'row',
                justifyContent: 'space-between',
            }
        }
        break;

        case 'Right': {
            contentViewAlignStyle = {
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
            }
        }
        break;

        case 'Center': {
            contentViewAlignStyle = {
                flexDirection: (withMedia === 'Yes')? 'row':null,
                justifyContent: 'space-between',
                padding: (withMedia === 'Yes')? null:5,
            }
        }
    }
    
  return (
    <View style={[styles.container, contentViewAlignStyle]}>

      {(withMedia === 'Yes') && <View style={[styles.media]}>  
        <MediaView
            style='BoundingBoxCircle'
            size={32}
        ></MediaView>
      </View>}

      <View style={[styles.content, contentViewAlignStyle, flexContent]}>
        <ContentText
            contentAlign={contentViewAlign}
            subTitle='No'
            body='No'
            titleContent='Title'
            subTitleContent='Sub title'
            bodyContent='Body content'
        ></ContentText>

        {!(contentViewAlign === 'Center') && <CustomButton
            style='TextAction'
            size={48}
            state='Primary'
            position='IconRight'
            content='Button'
            iconUri={mediaUri}
        ></CustomButton>}
      </View>

        {(withMedia === 'Yes') && (contentViewAlign === 'Center') && <View style={[styles.media]}>  
            <MediaView
                style='BoundingBoxCircle'
                size={32}
            ></MediaView>
        </View>}

    </View>
  )
}

export default ListTitle

const styles = StyleSheet.create({
    container: {
        backgroundColor: ColorsSkin.Gray_1Background,
        height: 'auto',
        width: '100%',
        alignItems: 'center',
        //backgroundColor: 'pink'
    },
    content: {
        alignItems: 'center',
    },
    media: {
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    }
})