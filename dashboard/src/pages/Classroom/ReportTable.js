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
  { key: 0, userMetrics: 'Total Presence Time', value: "52 mins" },
  { key: 1, userMetrics: 'Average Attention Span', value: "49.5 mins" },
  { key: 2, userMetrics: 'Notable Focus Timestamp', value: '[0-22] [30-40] [45-58]' },
];

const ReportTable = props => {
  return <Table columns={columns} bordered dataSource={data} pagination={false} />;
};

export default ReportTable;
