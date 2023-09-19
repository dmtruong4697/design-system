import React, {useState} from 'react';
import {PieChart} from 'react-native-gifted-charts';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

ChartPie.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  size: PropTypes.number,
  centerLabelComponent: PropTypes.func,
};

ChartPie.defaultProps = {
  data: [],
  size: 100,
  centerLabelComponent: () => {},
};

function ChartPie(props) {
  const {data, size, centerLabelComponent} = props;
  const [selected, setSelected] = useState({});
  return (
    <PieChart
      innerRadius={(65 * size) / 100}
      focusOnPress
      toggleFocusOnPress
      radius={size}
      centerLabelComponent={() => centerLabelComponent(selected)}
      onPress={data => {
        setSelected(data);
      }}
      data={data}
    />
  );
}

export default ChartPie;
