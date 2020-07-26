import React, { useState, useEffect } from 'react';
import { Bullet } from '@ant-design/charts';
const FacePresentDuration= () => {
  const config = {
    data: [
      {
        title: 'Lucy',
        measures: [83],
        targets: [70],
      },
      {
        title: 'Bob',
        measures: [95],
        targets: [70],
      },
      {
        title: 'Jack',
        measures: [90],
        targets: [70],
      }
    ],
    rangeMax: 100,
    title: {
      visible: true,
      text: 'Face Present Duration',
    },
    description: {
      visible: true,
      text: '',
    },
  };
  return <Bullet {...config} />;
};
export default FacePresentDuration;