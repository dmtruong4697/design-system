import React, {useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import FormContainer from '../components/FormContainer';
import {InputType} from '../constants/constants';
import CustomStepIndicator, {
  CustomStepIndicatorUtils,
} from '../components/StepIndicator';
import Rating from '../components/Rating';
import Divider from '../components/Divider';
import CustomSlider from '../components/CustomSlider';
import SliderContainer from '../components/SliderContainer';
import TableTitle from '../components/TableItem/TableTitle';
import ChartBar from '../components/ChartBar';
import ChartPie from '../components/ChartPie';
import {AppColors} from '../constants/AppStyle';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Payment Method',
  'Track',
];

const PhuongScreen = () => {
  const insets = useSafeAreaInsets();

  const [currentPosition, setCurrentPosition] = useState(0);
  const [isLoading, setLoading] = useState(true);
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{height: insets.top, backgroundColor: 'grey'}}></View>
          <View style={{flex: 1, padding: 20}}>
            <FormContainer
              fields={[
                {
                  name: 'name',
                  label: 'Name',
                  placeholder: 'Type your name',
                  rules: {
                    minLength: {value: 5, message: 'too short'},
                    required: {value: true, message: 'Name field is required'},
                  },
                },
                {
                  name: 'city',
                  label: 'City',
                  placeholder: 'Type your name',
                  rules: {
                    required: {value: true, message: 'City field is required'},
                  },
                },
                {
                  name: 'work',
                  label: 'Work',
                  placeholder: 'Type your work',
                  rules: {
                    minLength: {value: 3, message: 'too short'},
                    required: {value: true, message: 'Work field is required'},
                  },
                },
                {
                  type: InputType.checkBox,
                  name: 'check',
                  label: 'Please check this box',
                  required: {
                    value: true,
                    message: 'Checkbox field is required',
                  },
                },
              ]}
              onSubmitting={result => {
                console.log('result', result);
              }}
              onChangeForm={(field, value) => {
                console.log(field, value);
              }}
              customSubmitButton={handleResult => {
                return (
                  <Button
                    title="Custom Button"
                    onPress={() => {
                      handleResult();
                    }}
                  />
                );
              }}
            />
            <Text>Checkpoint</Text>
            <CustomStepIndicator
              labels={labels}
              currentPosition={currentPosition}
              isLoading={isLoading}
              nextTo={po => {
                setCurrentPosition(po);
              }}
            />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                title="Next Step"
                onPress={() => {
                  setLoading(true);
                  console.log(currentPosition, labels.length - 1);
                  if (currentPosition < labels.length - 1) {
                    setCurrentPosition(currentPosition + 1);
                  } else {
                    setCurrentPosition(0);
                    CustomStepIndicatorUtils.clear();
                  }
                }}
              />
              <Button
                title="Set Success"
                onPress={() => {
                  setLoading(false);
                  CustomStepIndicatorUtils.setSuccess(currentPosition);
                }}
              />
              <Button
                title="Set Failed"
                onPress={() => {
                  setLoading(false);
                  CustomStepIndicatorUtils.setFailed(currentPosition);
                }}
              />
            </View>
            {/* Components */}
            <Rating
              numberStar={5}
              containerStyle={{borderWidth: 0}}
              onSelect={number => {
                console.log('Number star : ', number);
              }}
            />

            <Text>Divider</Text>
            <Divider />
            <Text>CustomSlider</Text>
            <CustomSlider
              // disabled={true}
              // value={0}
              onValueChange={() => {
                console.log('change');
              }}
            />
            <Text>Range Slider</Text>
            <SliderContainer
              sliderValue={[6, 18]}
              onValueChange={value => {
                console.log('change', value);
              }}>
              <CustomSlider
                animateTransitions
                maximumValue={20}
                minimumValue={4}
                step={1}
                onValueChange={value => {
                  console.log(value);
                }}
              />
            </SliderContainer>
            <Text>Video Slider</Text>
            <CustomSlider
              animateTransitions
              maximumValue={20}
              minimumValue={4}
              step={1}
              trackStyle={{height: 2}}
              renderThumbComponent={disabled => {
                return (
                  <View
                    style={{
                      height: 16,
                      aspectRatio: 1,
                      backgroundColor: disabled
                        ? AppColors.disable
                        : AppColors.primary,
                      borderRadius: 1000,
                    }}></View>
                );
              }}
              onValueChange={value => {
                console.log(value);
              }}
            />
            <TableTitle />
            <View
              style={{height: 100, width: '100%', backgroundColor: 'red'}}
            />
          </View>
          <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              alignItems: 'center',
            }}>
            <View>
              <ChartBar />
            </View>
            <View style={{height: 50, width: 10, backgroundColor: 'red'}} />
            {/* <LineChart
              data={[{value: 50}, {value: 80}, {value: 90}, {value: 70}]}
            /> */}
            <ChartPie
              centerLabelComponent={data =>
                data && data.value ? (
                  <Text>{data.value}%</Text>
                ) : (
                  <Text>Value</Text>
                )
              }
              data={[
                {
                  value: 40,
                  strokeWidth: 2,
                  strokeColor: 'white',
                  color: '#1890FF',
                },
                {
                  value: 30,
                  strokeWidth: 2,
                  strokeColor: 'white',
                  color: '#2EB553',
                },
                {
                  value: 10,
                  strokeWidth: 2,
                  strokeColor: 'white',
                  color: '#13C2C2',
                },
                {
                  value: 10,
                  strokeWidth: 2,
                  strokeColor: 'white',
                  color: '#FA8C16',
                },
                {
                  value: 10,
                  strokeWidth: 2,
                  strokeColor: 'white',
                  color: '#FFC53D',
                },
              ]}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default PhuongScreen;
