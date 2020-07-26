import React, { useState, useEffect } from 'react';
import { GroupedBar } from '@ant-design/charts';
const TotalAndAverageAttention = () => {
  const data = [
    {
      label: 'Lucy',
      type: 'Total',
      value: 27,
    },
    {
      label: 'Lucy',
      type: 'Average',
      value: 9,
    },
    {
      label: 'Bob',
      type: 'Total',
      value: 43,
    },
    {
      label: 'Bob',
      type: 'Average',
      value: 21,
    },
    {
        label: 'Jack',
        type: 'Total',
        value: 44,
      },
      {
        label: 'Jack',
        type: 'Average',
        value: 14.6,
      },
  ];
  const config = {
    title: {
      visible: true,
      text: 'Total and Average Attention',
    },
    data,
    xField: 'value',
    yField: 'label',
    groupField: 'type',
    color: ['#1383ab', '#c52125'],
    label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) },
  };
  return <GroupedBar {...config} />;
};
export default TotalAndAverageAttention;