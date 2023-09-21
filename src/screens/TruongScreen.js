import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import CustomButton from "../Components/CustomButton";
import CheckBox from "../Components/CheckBox";
import ProgressBar from "../Components/ProgressBar";
import RadioButton from "../Components/RadioButton";
import Switch from "../Components/Switch";
import ToolTip from "../Components/ToolTip";
import Tag from "../Components/Tag";
import ScrollBar from "../Components/ScrollBar";
import DateElement from "../Components/DateElement";
import NumberPicker from "../Components/NumberPicker";
import PaginationItems from "../Components/PaginationItems";
import Card from "../Components/Card";
import MenuItems from "../Components/MenuItems";
import Pagination from "../Components/Pagination/Pagination";
import Popup from "../Components/Popup/Popup";
import ActionState from "../Components/ActionSheet/ActionState";
import ActionSheet from "../Components/ActionSheet/ActionSheet";
import MediaView from "../Components/MediaView";
import ContentText from "../Components/ContentText";
import ListTitle from "../Components/ListTitle";
import ColorsStyle from "../../Styles/ColorsStyle";
import ExpansionItem from "../Components/ExpansionPanel/ExpansionItem";
import TestButton from "../Components/TestButton";
import { AppIcons } from "../constants/AppResource";
import ColorsSkin from "../../Styles/ColorsSkin";
import ScrollViewIndicator from 'react-native-scroll-indicator';

export default function TruongScreen() {
  const [isSwitch, setIsSwitch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedRadio, setIsCheckedRadio] = useState(false);

  const actionStateData = [
    {
      state: "PositiveState",
      content: "Action1",
    },
    {
      state: "PositiveState",
      content: "Action2",
    },
    {
      state: "PositiveState",
      content: "Action3",
    },
  ];
  return (
    <ScrollView
      //horizontal={true}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        backgroundColor: ColorsStyle.lime_3,
      }}
    >
      {/* <View style={{marginVertical:50}}>
           <TestButton
          style={{aspectRatio:1, backgroundColor:'transparent', borderWidth:1, borderColor:ColorsSkin.Gray_3Background}}
           prefixIcon={AppIcons.success}
           />
           </View> */}
      {/* <CustomButton
        style="Solid"
        size={48}
        state="Primary"
        position="IconLeft"
        content="Button"
        iconUri="https://mobiledevtutorials.com/content/images/size/w1000/2022/12/Green-and-White-Illustration-Science-Class-Education-Presentation--33-.png?ezimgfmt=ng:webp/ngcb1"
      /> */}

      {/* <CheckBox
        size={24}
        check={isChecked}
        state="Active"
        label="Yes"
        labelPosition="Right"
        onPress={() => {setIsChecked(!isChecked)}}
      ></CheckBox> */}

      {/* <ProgressBar status="Default" percentage="90%"></ProgressBar> */}

      {/* <RadioButton
        size={24}
        check={isCheckedRadio}
        state="Active"
        label="Yes"
        labelPosition="Right"
        onPress={() => {setIsCheckedRadio(!isCheckedRadio)}}
      ></RadioButton> */}

      {/* <Switch
        label="No"
        labelPosition="Right"
        Switch={isSwitch}
        state="Active"
        onPress={() => setIsSwitch(!isSwitch)}
      ></Switch> */}

      {/* <ToolTip
        arrowPosition="Bottom"
        align="Left"
        message="Message"
      ></ToolTip> */}

      {/* <Tag 
        size={48} 
        position="IconRight" 
        content="Tag"
        iconUri='https://avatars.githubusercontent.com/u/6078720?s=200&v=4'
        iconSize={20}/> */}

      {/* <ScrollBar 
        style="Horizontal"
        size={100}
      /> */}

      {/* <DateElement state="Present" eventBadge="Yes" content="7"></DateElement> */}

      {/* <NumberPicker style="Ghost" size={24}></NumberPicker> */}

      {/* <PaginationItems status="Active" content={1}></PaginationItems> */}

      {/* <Card
        mediaPosition="MediaAbove"
        contentAlign="Right"
        actionView="Yes"
        mediaView="Yes"
        mediaBG="No"
        mediaBGUri="https://th.bing.com/th?id=ORMS.a66c2ad904c01fdb845a2704758a26df&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
        title="Title"
        subTitle="Sub Title"
        bodyContent="Body Content"
      ></Card> */}

      {/* <Popup></Popup> */}

      {/* <ActionState state="PositiveState" content="Action"></ActionState> */}

      {/* <ActionSheet
        WithSubtitle="Yes"
        titleContent='Title'
        actionStateData={actionStateData}
      ></ActionSheet> */}

      {/* <MediaView 
        style="BoundingBoxCircle" 
        size={180}
        mediaUri="https://th.bing.com/th?id=ORMS.f08f5dd6566a4b9f4387257e558ac94a&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
      ></MediaView> */}

      {/* <ContentText
        contentAlign="Left"
        subTitle="Yes"
        body="Yes"
        titleContent="Title"
        subTitleContent="Sub title Sub titleSub titleSub titleSub titleSub titleSub titleSub titleSub titleSub titleSub titleSub title"
        bodyContent="Body content Body contentBody contentBody contentBody contentBody contentBody contentBody contentBody content"
      ></ContentText>  */}

      <ListTitle  
        contentViewAlign="Center" 
        withMedia="Yes"
      ></ListTitle>

      {/* <ExpansionItem></ExpansionItem> */}

      {/* <NumberPicker
        size={24}
        style='Solid'
      /> */}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    //paddingTop:100,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
