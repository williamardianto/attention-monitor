import React, { useState, useEffect } from 'react';
import { RangeBar } from '@ant-design/charts';
const AttentionSummary = () => {
  const data = [
    {
      type: 'Lucy',
      values: [0, 10],
    },
    {
        type: 'Lucy',
        values: [15, 24],
      },
      {
        type: 'Lucy',
        values: [42, 50],
      },
    {
      type: 'Bob',
      values: [0, 23],
    },
    {
        type: 'Bob',
        values: [40, 60],
      },
    {
      type: 'Jack',
      values: [0, 24],
    },
      {
        type: 'Jack',
        values: [30, 40],
      },
      {
        type: 'Jack',
        values: [50, 60],
      }
  ];
  const config = {
    title: {
      visible: true,
      text: 'Attention Summary',
    },
    data,
    xField: 'values',
    yField: 'type',
  };
  return <RangeBar {...config} />;
};
export default AttentionSummary;
