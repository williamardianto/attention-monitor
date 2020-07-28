import { Table } from 'antd';

const columns = [
  {
    title: 'User Metrics',
    dataIndex: 'userMetrics',
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
];

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push( {key: i, userMetrics: "attention", value: 32});
// }

const data = [
  { key: 0, userMetrics: 'Yawn Count', value: "11" },
  { key: 1, userMetrics: 'Average Blink Count Per 10 Minutes', value: "23" },
  { key: 2, userMetrics: 'Eye Aspect Ratio', value: "0.31" },
];

const TirednessTable = props => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default TirednessTable;
