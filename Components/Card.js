import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorsSkin from '../Styles/ColorsSkin';
import ColorsStyle from '../Styles/ColorsStyle';
import Button from './Button';

const Card = (props) => {

    const {actionView, mediaView, mediaPosition, contentAlign, mediaBG, mediaBGUri} = props;
    let contentMediaPositionStyle, contentAlignStyle;
    const uri = (mediaBG === 'Yes')? mediaBGUri:'';

    switch (mediaPosition) {
        case 'MediaAbove': {
            contentMediaPositionStyle = {
                flexDirection: 'column'
            }
        }
        break;

        case 'MediaBelow': {
            contentMediaPositionStyle = {
                flexDirection: 'column-reverse'
            }
        }
        break;

        case 'MediaLeft': {
            contentMediaPositionStyle = {
                flexDirection: 'row'
            }
        }
        break;

        case 'MediaRight': {
            contentMediaPositionStyle = {
                flexDirection: 'row-reverse'
            }
        }
        break;
    }

    switch (contentAlign) {
        case 'Left': {
            contentAlignStyle = {
                alignItems: 'flex-start'
            }
        }
        break;

        case 'Right': {
            contentAlignStyle = {
                alignItems: 'flex-end',
                //justifyContent: 'flex-start'
            }
        }
        break;

        case 'Center': {
            contentAlignStyle = {
                alignItems: 'center'
            }
        }
        break;
    }

  return (
    <ImageBackground source={{uri: uri}} style={[styles.container, contentAlignStyle]} imageStyle={{ borderRadius: 12}}>

      <View style={[styles.content, contentMediaPositionStyle, contentAlignStyle]}>
        {(mediaView === 'Yes') && <View style={[styles.mediaView]}></View>}
        <View style={[styles.contentText, contentAlignStyle]}>
            <View style={[styles.titleAndSub, contentAlignStyle]}>
                <Text style={styles.titleStyle}>TITLE</Text>
                <Text style={styles.subTitleStyle}>Sub</Text>
            </View>
            <View style={[styles.bodyContent, styles.bodyContentStyle]}>
                <Text>Body content</Text>
            </View>
        </View>
      </View>

    { (actionView === 'Yes') &&
      <View style={[styles.actionCombo]}>
        <Button
            style='Solid'
            size={32}
            state='Success'
            position='TextOnly'
            content='Button'
        ></Button>
                <Button
            style='Solid'
            size={32}
            state='Primary'
            position='TextOnly'
            content='Button'
        ></Button>
      </View>
    }

    </ImageBackground>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        //backgroundColor: ColorsStyle.lime_3,
        borderRadius:12,
        width: 'auto',
        height: 'auto',
        flexDirection: 'column',
        padding: 10,
    },
    content: {
        //backgroundColor: ColorsStyle.geekblue_3,
    },
    mediaView: {
        backgroundColor: ColorsSkin.Gray_3Background,
        height: 40,
        width: 40,
        borderRadius: 100,
        marginBottom: 5,
    },
    contentText: {
        //backgroundColor: ColorsStyle.blue_3,
        height: 90,
    },
    actionCombo: {
        //backgroundColor: ColorsStyle.cyan_3,
        height: 40,
        width: '100%',
        flexDirection: 'row',
        //alignSelf: 'baseline'
        //justifyContent: 'space-evenly',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        //alignSelf: 'flex-start'
    },
    titleAndSub: {
        height: 50,
        //backgroundColor: ColorsStyle.yellow_3,
    },
    bodyContent: {
        //flexDirection: 'column-reverse'
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: '500',
    },
    subTitleStyle: {
        fontSize: 12,
        fontWeight: '400',
        color: ColorsSkin.SecondaryText,
    },
    bodyContentStyle: {
        fontSize: 14,
        fontWeight: '400',
    }
})