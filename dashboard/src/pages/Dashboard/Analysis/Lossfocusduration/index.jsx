import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';


const Lossfocusduration = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      asyncFetch();
    }, []);
    const asyncFetch = () => {
      fetch('http://13.229.155.101/user/2')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };

    const config = {
        title: {
          visible: true,
          text: 'Loss focus duration',
        },
        description: {
          visible: true,
          text: 'Duration of focus lost in every minute',
        },
        padding: 'auto',
        forceFit: true,
        data: data["lost_focus_duration_final"],
        xField: 'date',
        yField: 'value',
        // yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
        legend: { position: 'right-top' },
        seriesField: 'type',
        color: ['#1979C9', '#D62A0D', '#FAA219'],
        responsive: true,
      };

     return <Line {...config} />
        
};

export default Lossfocusduration;