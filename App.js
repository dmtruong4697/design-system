import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import ColorsStyle from './Styles/ColorsStyle';
import Button from './Components/Button';
import CheckBox from './Components/CheckBox';
import ProgressBar from './Components/ProgressBar';
import RadioButton from './Components/RadioButton';
import Switch from './Components/Switch';
import ToolTip from './Components/ToolTip';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button
        style='Solid'
        size={48}
        state='Disable'
        position='IconLeft'
      ></Button>

      <CheckBox 
        size={24}
        check='Yes'
        state='Active'
        label='Yes'
        labelPosition='Right'
      ></CheckBox> */}
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

      <Switch
        label='No'
        labelPosition='Right'
        Switch='No'
        state='Disable'
      ></Switch>

      <ToolTip
        arrowPosition='Top'
        align='Left'
        message='Message'
      ></ToolTip>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorsStyle.lime_5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
