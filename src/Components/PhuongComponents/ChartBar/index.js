import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart, yAxisSides} from 'react-native-gifted-charts';
import PropTypes from 'prop-types';

ChartBar.propTypes = {
  width: PropTypes.number,
};

ChartBar.defaultProps = {
  width: undefined,
};

function ChartBar(props) {
  const {width} = props;
  const data = [
    {value: 50, label: 'T2'},
    {value: 80, label: 'T3'},
    {value: 90, label: 'T4'},
    {value: 50, label: 'T5'},
    {value: 50, label: 'T6'},
    {value: 50, label: 'T7'},
    {value: 50, label: 'CN'},
  ];

  const widthScreen = Dimensions.get('screen').width;

  return (
    <BarChart
      width={width}
      yAxisLabelContainerStyle={{backgroundColor: 'red'}}
      barWidth={15}
      yAxisSide={yAxisSides.RIGHT}
      barBorderTopLeftRadius={2}
      isAnimated
      spacing={10}
      barBorderTopRightRadius={2}
      frontColor={'#1890FF'}
      yAxisLabelTexts={['0', '10tr', '20tr', '30tr', '40tr']}
      noOfSections={3}
      data={data}
    />
  );
}

export default ChartBar;
