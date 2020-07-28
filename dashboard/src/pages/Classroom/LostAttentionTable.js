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
  { key: 0, userMetrics: 'Face Absent Duration', value: "4 mins" },
  { key: 1, userMetrics: 'Look Outside the Screen Count', value: "40" },
];

const LostAttentionTable = props => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default LostAttentionTable;
