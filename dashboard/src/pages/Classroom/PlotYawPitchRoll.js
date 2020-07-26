import { Line } from '@ant-design/charts';

const PlotYPR = (props) => {
  const data = props.data
  const config = {
    data,
    title: {
      visible: true,
      text: 'Yaw Pitch Roll',
    },
    description: {
      visible: true,
      text: 'Change of Yaw, Pitch and Roll over time',
    },
    xField: 'date',
    yField: 'value',
    legend: { position: 'right-top' },
    seriesField: 'type',
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };
  return <Line {...config} />;
};

export default PlotYPR;
