import React from 'react';
import { StackedArea } from '@ant-design/charts';
import { LossFocusCountData } from './Data/LossFocusCountData';

const PlotLossFocusCount = (props) => {
  const data = props.data

  const config = {
    title: {
      visible: true,
      text: 'Loss Focus Count',
    },
    description: {
      visible: true,
      text: '',
    },
    data,
    xField: 'date',
    yField: 'value',
    stackField: 'student',
    color: ['#F49097', '#DFB2F4', '#F5E960', '#F2F5FF', '#55D6C2'],
    // xAxis: {
    //   type: 'date',
    //   tickCount: 5,
    // },
    label: {
      visible: true,
      type: 'line',
    },
    legend: { visible: false },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

export default PlotLossFocusCount;
