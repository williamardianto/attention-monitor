import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';
import router from 'umi/router';

const button = {
//   border: '2px',
//   borderRadius: '4px',
//   background: '#1890af',
//   color: '#fff',
//   fontSize: '14px',
//   cursor: 'pointer',
//   transition: '.3s background',
//   '&:hover': {
//     background: '#40a9ff',
//   },
  width: '100%',
  height: '150px',
};

class Dashboard extends Component {
  handleClick = () => {
    console.log('this is:', this);
    router.push('/classroom');
  };

  render() {
    return (
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Button style={button} type="primary" onClick={this.handleClick}>
              Classroom 1
            </Button>
          </Col>
          <Col span={6}>
          <Button style={button} type="primary" onClick={this.handleClick}>
              Classroom 2
            </Button>
          </Col>
          <Col span={6}>
          <Button style={button} type="primary" onClick={this.handleClick}>
              Classroom 3
            </Button>
          </Col>
          <Col span={6}>
          <Button style={button} type="primary" onClick={this.handleClick}>
              Classroom 4
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
          <Button style={button} type="primary" onClick={this.handleClick}>
              Classroom 5
            </Button>
          </Col>
          <Col span={6}>
          <Button style={button} type="primary" onClick={this.handleClick}>
              Classroom 6
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
