import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ImageBackground } from 'react-native';
import ColorsStyle from './Styles/ColorsStyle';
import ColorsSkin from './Styles/ColorsSkin';
import Button from './Components/Button/Button';
import CheckBox from './Components/CheckBox';
import ProgressBar from './Components/ProgressBar';
import RadioButton from './Components/RadioButton';
import Switch from './Components/Switch';
import ToolTip from './Components/ToolTip';
import Icons from './Icons/Icons';
import Tag from './Components/Tag';
import ScrollBar from './Components/ScrollBar';
import DateElement from './Components/DateElement';
import NumberPicker from './Components/NumberPicker';
import PaginationItems from './Components/PaginationItems';
import Card from './Components/Card';
import ActionState from './Components/ActionSheet/ActionState';
import ActionSheet from './Components/ActionSheet/ActionSheet';
import MediaView from './Components/MediaView';
import ContentText from './Components/ContentText';
import ListTitle from './Components/ListTitle';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        style='Dash'
        size={48}
        state='Error'
        position='IconLeft'
        content='Button'
      ></Button>

      {/* <CheckBox 
        size={24}
        check='Yes'
        state='Active'
        label='Yes'
        labelPosition='Right'
      ></CheckBox>  */}
      {/* <ProgressBar
        status='Default'
        percentage='90%'
      ></ProgressBar>

      <RadioButton
        size={24}
        check='No'
        state='Active'
        label='Yes'
        labelPosition='Right'
      ></RadioButton> */}

      {/* <Switch
        label='No'
        labelPosition='Right'
        Switch='No'
        state='Disable'
      ></Switch> */}

      {/* <ToolTip
        arrowPosition='Bottom'
        align='Center'
        message='Message Message Message '
      ></ToolTip> */}

      {/* <Image style={styles.image} source={{uri: 'https://reactnative.dev/img/tiny_logo.png',}}/> */}

      {/* <Tag
        size={48}
        position='IconRight'
        content='Tag'
      ></Tag> */}

      {/* <ScrollBar
        style='Horizontal'
      ></ScrollBar> */}

      {/* <DateElement
        state='Present'
        eventBadge='Yes'
        content='7'
      ></DateElement> */}

      {/* <NumberPicker
        style='Ghost'
        size={24}
      ></NumberPicker> */}

      {/* <PaginationItems
        status='Active'
        content={1}
      ></PaginationItems> */}

      {/* <Card
        mediaPosition='MediaAbove'
        contentAlign='Right'
        actionView='Yes'
        mediaView='Yes'
        mediaBG="Yes"
        mediaBGUri='https://th.bing.com/th?id=ORMS.a66c2ad904c01fdb845a2704758a26df&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0'
      ></Card> */}

      {/* <ActionState
        state='PositiveState'
        content='Action'
      ></ActionState> */}

      <ActionSheet
        WithSubtitle='No'
      ></ActionSheet>

      {/* <MediaView
        style='oundingBoxCircle'
        size={183}
      ></MediaView> */}

      {/* <ContentText
        contentAlign='Center'
        subTitle='Yes'
        body='Yes'
        titleContent='Title'
        subTitleContent='Sub title'
        bodyContent='Body content'
      ></ContentText> */}

      <ListTitle
        contentViewAlign='Left'
        withMedia='Yes'
      ></ListTitle>

      {/* <Image style={styles.image} source={{uri: 'https://icons.veryicon.com/png/o/miscellaneous/mlxc-public-icon-library/right-direction-1.png'}}></Image> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsStyle.lime_3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  }
});
