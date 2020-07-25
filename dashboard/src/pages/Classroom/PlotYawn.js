import React, { useState, useEffect } from 'react';
import { StackedArea } from '@ant-design/charts';

const PlotYawn = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/A%26Bp9uKRb2/oil.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    title: {
      visible: true,
      text: 'Yawn Count',
    },
    description: {
      visible: true,
      text: '',
    },
    data,
    xField: 'date',
    yField: 'value',
    stackField: 'country',
    color: ['#6897a7', '#8bc0d6', '#60d7a7', '#dedede', '#fedca9', '#fab36f', '#d96d6f'],
    xAxis: {
      type: 'dateTime',
      tickCount: 5,
    },
    label: {
      visible: true,
      type: 'line',
    },
    legend: { visible: false },
    responsive: true,
  };
  return <StackedArea {...config} />;
};

export default PlotYawn;
