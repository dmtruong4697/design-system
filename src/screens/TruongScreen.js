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
import CustomButton from "../Components/Button";
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

export default function TruongScreen() {
  const [isSwitch, setIsSwitch] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
      <CustomButton
        style="Solid"
        size={48}
        state="Error"
        position="IconLeft"
        content="Button"
        iconUri="https://mobiledevtutorials.com/content/images/size/w1000/2022/12/Green-and-White-Illustration-Science-Class-Education-Presentation--33-.png?ezimgfmt=ng:webp/ngcb1"
      ></CustomButton>

      <CheckBox
        size={24}
        check={isChecked}
        state="Active"
        label="Yes"
        labelPosition="Right"
        onPress={() => {setIsChecked(!isChecked)}}
      ></CheckBox>

      <ProgressBar status="Default" percentage="90%"></ProgressBar>

      <RadioButton
        size={24}
        check="No"
        state="Active"
        label="Yes"
        labelPosition="Right"
      ></RadioButton>

      <Switch
        label="No"
        labelPosition="Right"
        Switch={isSwitch}
        state="Active"
        onPress={() => setIsSwitch(!isSwitch)}
      ></Switch>

      <ToolTip
        arrowPosition="Bottom"
        align="Center"
        message="Message Message Message "
      ></ToolTip>

      <Tag size={48} position="IconRight" content="Tag"></Tag>

      <ScrollBar style="Horizontal"></ScrollBar>

      <DateElement state="Present" eventBadge="Yes" content="7"></DateElement>

      <NumberPicker style="Ghost" size={24}></NumberPicker>

      <PaginationItems status="Active" content={1}></PaginationItems>

      <Card
        mediaPosition="MediaAbove"
        contentAlign="Right"
        actionView="Yes"
        mediaView="Yes"
        mediaBG="Yes"
        mediaBGUri="https://th.bing.com/th?id=ORMS.a66c2ad904c01fdb845a2704758a26df&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.25&p=0"
      ></Card>

      {/* <MenuItems
        data={[
          {
            title: "Phuong",
            action: () => {
              console.log("asdas");
            },
          },
          {
            title: "Phuong",
            action: () => {
              console.log("asdas");
            },
          },
          {
            title: "Phuong",
            action: () => {
              console.log("asdas");
            },
          },
          {
            title: "Phuong",
            action: () => {
              console.log("asdas");
            },
          },
          {
            title: "Phuong",
            action: () => {
              console.log("asdasdsfvds");
            },
          },
        ]}
      /> */}

      {/* <Pagination
        Pags={[
          {
            id: 1,
            action: () => {
              console.log("asdas");
            },
          },
          {
            id: 2,
            action: () => {
              console.log("asdas");
            },
          },
          {
            id: 3,
            action: () => {
              console.log("asdas");
            },
          },
          {
            id: 4,
            action: () => {
              console.log("asdas");
            },
          },
        ]}
      ></Pagination> */}
      {/* <Popup></Popup> */}

      <ActionState state="PositiveState" content="Action"></ActionState>

      <ActionSheet
        WithSubtitle="Yes"
        actionStateData={actionStateData}
      ></ActionSheet>

      <MediaView style="oundingBoxCircle" size={183}></MediaView>

      <ContentText
        contentAlign="Center"
        subTitle="Yes"
        body="Yes"
        titleContent="Title"
        subTitleContent="Sub title"
        bodyContent="Body content"
      ></ContentText>

      <ListTitle contentViewAlign="Left" withMedia="Yes"></ListTitle>
      <Image
        style={styles.image}
        source={{
          uri: "https://icons.veryicon.com/png/o/miscellaneous/mlxc-public-icon-library/right-direction-1.png",
        }}
      ></Image>
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
