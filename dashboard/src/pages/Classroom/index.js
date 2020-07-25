import PlotYPR from './PlotYawPitchRoll';
import PlotBlink from './PlotBlink';
import PlotFaceNotPresent from './PlotFaceNotPresent';
import PlotLossFocusCount from './PlotLossFocusCount';
import PlotLossFocusDuration from './PlotLossFocusDuration';
import PlotYawn from './PlotYawn';

import { Card, Row, Col, Input, Button, Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function Classroom() {
  return (
    <div className="classroom">
      <Card title="Students" style={{ marginBottom: '20px' }}>
        <Select defaultValue="All" style={{ width: 200 }} onChange={handleChange}>
          <Option value="All">All</Option>
          <Option value="Jack">Jack</Option>
          <Option value="Bob">Bob</Option>
          <Option value="Lucy">Lucy</Option>
        </Select>
      </Card>

      <Card title="Loss Focus">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <PlotLossFocusCount />
          </Col>
          <Col span={12}>
            <PlotLossFocusDuration />
          </Col>
        </Row>
      </Card>

      <Card title="Tiredness Metrics">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <PlotBlink />
          </Col>
          <Col span={12}>
            <PlotYawn />
          </Col>
        </Row>
      </Card>

      <Card title="Face Not Present Duration">
        <PlotFaceNotPresent />
      </Card>

      <Card title="Face Yaw Pitch Roll">
        <PlotYPR />
      </Card>
    </div>
  );
}

export default Classroom;
