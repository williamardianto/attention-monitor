import React, { useState } from 'react';

import PlotYPR from './PlotYawPitchRoll';
import PlotBlink from './PlotBlink';
import PlotFaceNotPresent from './PlotFaceNotPresent';
import PlotLossFocusCount from './PlotLossFocusCount';
import PlotLossFocusDuration from './PlotLossFocusDuration';
import PlotYawnCount from './PlotYawn';
import AttentionSummary from './PlotAttentionSummary';
import TotalAndAverageAttention from './PlotTotalAndAverageAttention';
import FacePresentDuration from './PlotFacePresentDuration';

import { LossFocusCountData } from './Data/LossFocusCountData';
import { YPRData } from './Data/YPRData';
import { YawnData } from './Data/YawnData';

import ReportTable from './ReportTable';
import LostAttentionTable from './LostAttentionTable';
import TirednessTable from './TirednessTable';

import { Card, Row, Col, Typography, Button, Select } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

const { Option } = Select;
const { Text, Link } = Typography;
// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

function fetchData(student) {
  if (student === 'All') {
    const lossFocusCountData = LossFocusCountData['Lucy'].concat(
      LossFocusCountData['Jack'],
      LossFocusCountData['Bob'],
    );

    const yawnData = YawnData['Lucy'].concat(YawnData['Jack'], YawnData['Bob']);

    return {
      lossFocusCount: lossFocusCountData,
      yawn: yawnData,
    };
  } else {
    const lossFocusCountData = LossFocusCountData[student];
    const yprData = YPRData[student];
    return {
      lossFocusCount: lossFocusCountData,
      ypr: yprData,
    };
  }
}

function Classroom() {
  const [student, setStudent] = useState('All');

  const data = fetchData(student);

  // console.log('inside if');
  console.log(data);

  return (
    <div className="classroom">
      <Card title="Students" style={{ marginBottom: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Select defaultValue="All" style={{ width: 200 }} onChange={value => setStudent(value)}>
              <Option value="All">All</Option>
              <Option value="Jack">Jack</Option>
              <Option value="Bob">Bob</Option>
              <Option value="Lucy">Lucy</Option>
            </Select>
          </Col>
          <Col style={{ textAlign: 'right' }} span={12}>
            <Button type="primary" icon={<PoweroffOutlined />} size={'large'}>
              Export as PDF
            </Button>
          </Col>
        </Row>
      </Card>

      {student != 'All' ? (
        <div>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <p>Class ID</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>101000</h1>
              </Col>
              <Col span={6}>
                <p>Session ID</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>001</h1>
              </Col>
              <Col span={6}>
                <p>Session Duration</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>60 Min</h1>
              </Col>
              <Col span={6}>
                <p>Num of Participant</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>{student}</h1>
              </Col>
            </Row>
          </Card>

          <Card title="General Statistic" style={{ marginTop: '10px' }}>
            <ReportTable />
          </Card>
          <Card title="Lost Attention Indicators" style={{ marginTop: '10px' }}>
            <LostAttentionTable />
          </Card>
          <Card title="Tiredness/drowsiness Indicators" style={{ marginTop: '10px' }}>
            <TirednessTable />
          </Card>
          {/* <Card title="Stress Indicators Indicators" style={{ marginTop: '10px' }}>
            <ReportTable />
          </Card> */}
        </div>
      ) : (
        <div>
          <Card>
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <p>Class ID</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>101000</h1>
              </Col>
              <Col span={6}>
                <p>Session ID</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>001</h1>
              </Col>
              <Col span={6}>
                <p>Session Duration</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>60 Min</h1>
              </Col>
              <Col span={6}>
                <p>Num of Participant</p>
                <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>3</h1>
              </Col>
            </Row>
          </Card>

          <Card title="Attention Analysis">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <AttentionSummary />
              </Col>
            </Row>
          </Card>

          <Card>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <TotalAndAverageAttention />
              </Col>
              <Col span={12}>
                <FacePresentDuration />
              </Col>
            </Row>
          </Card>

          <Card title="Tiredness Indicator">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <PlotLossFocusCount data={data['lossFocusCount']} />
              </Col>
              <Col span={12}>
                <PlotYawnCount data={data['yawn']} />
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Classroom;
