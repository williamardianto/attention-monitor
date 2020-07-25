import { StackedColumn } from '@ant-design/charts';

const PlotFaceNotPresent = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 0.5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 0.5,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 0.3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 0.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 0.5,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
    {
      year: '1991',
      value: 1,
      type: 'Wiz',
    },
    {
      year: '1992',
      value: 2,
      type: 'Wiz',
    },
    {
      year: '1993',
      value: 5,
      type: 'Wiz',
    },
    {
      year: '1994',
      value: 4,
      type: 'Wiz',
    },
    {
      year: '1995',
      value: 6,
      type: 'Wiz',
    },
    {
      year: '1996',
      value: 2,
      type: 'Wiz',
    },
    {
      year: '1997',
      value: 10,
      type: 'Wiz',
    },
    {
      year: '1998',
      value: 12,
      type: 'Wiz',
    },
    {
      year: '1999',
      value: 3,
      type: 'Wiz',
    },
  ];
  const config = {
    forceFit: true,
    title: {
      visible: true,
      text: 'Face Not Present Duration',
    },
    description: {
      visible: true,
      text:
        '',
    },
    data,
    xField: 'year',
    yField: 'value',
    yAxis: { min: 0 },
    stackField: 'type',
    color: ['#ae331b', '#dadada', '#609db7', '#1a6179'],
    label: {
      visible: true,
      position: 'middle',
    },
  };
  return <StackedColumn {...config} />;
};

export default PlotFaceNotPresent;
