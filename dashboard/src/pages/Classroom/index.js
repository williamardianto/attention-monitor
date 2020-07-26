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

import { Card, Row, Col, Typography, Space, Select } from 'antd';

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
        <Select defaultValue="All" style={{ width: 200 }} onChange={value => setStudent(value)}>
          <Option value="All">All</Option>
          <Option value="Jack">Jack</Option>
          <Option value="Bob">Bob</Option>
          <Option value="Lucy">Lucy</Option>
        </Select>
      </Card>

      <Card title="Session Duration">
        <Row gutter={[16, 16]}>
          <h1 style={{ fontSize: '40px', marginLeft: '10px' }}>60 Minutes</h1>
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

      {/* <Card title="Loss Focus">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <PlotLossFocusCount data={data['lossFocusCount']} />
          </Col>
          <Col span={12}>
            <PlotLossFocusDuration />
          </Col>
        </Row>
      </Card> */}

      <Card title="Tiredness Metrics">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <PlotLossFocusCount data={data['lossFocusCount']} />
          </Col>
          <Col span={12}>
            <PlotYawnCount data={data['yawn']} />
          </Col>
        </Row>
      </Card>

      {student != 'All' ? (
        <Card title="Face Yaw Pitch Roll">
          <PlotYPR data={data['ypr']} />
        </Card>
      ) : (
        <Card title=""></Card>
      )}
    </div>
  );
}

export default Classroom;
