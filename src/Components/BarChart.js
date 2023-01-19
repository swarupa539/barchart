import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
);

function BarChart() {
     const options = {
         responsive: true,         
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            verticalAlignment:"bottom",   
          },
          title: {
            display: true,
            text: 'Actual',
            position: 'top',
          },
        },
       };
      const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
      const data = {
        labels,
        datasets: [            
          {
            type: 'bar',
            label: 'thm Actual',
            data:[15,25,35,45,55,65],            
            backgroundColor: 'rgba(96,96,98,255)',
            order: 1
          },
          {
            type: 'bar',
            label: 'thm Baseline',
            data:[10,20,30,40,50,60],
            backgroundColor: 'rgba(19,114,178,255)',
            order:1
          },   
          {
            type: 'line',
            label: 'Baseline',
            label: '$ Baseline Cost',
            data:[18,18,15,12,18,17],
            backgroundColor: 'rgb(152, 123, 63)',                
            borderWidth: 1,
            fill: false,
            order: 2,
            borderColor: 'rgb(152, 123, 63)',  
          },  
          {
            type: 'line',
            label: '$ Actual Cost',
            data:[15,15,18,20,18,15],
            backgroundColor: 'rgb(229, 170, 70)',                
            borderWidth: 2,
            fill: false,
            order: 2,
            borderColor: 'rgb(229, 170, 70)',  
          },      
        ],
      };
      Chart.options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Gas Performance'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                display: true
            }
        }
    };
  return (
    <>
    <div style={{width:"980px", margin:"auto"}}> 
    <h4 style={{ textAlign: "left" , width:"980px"}}>Gas Performance</h4>   
  <Chart options={options} type='bar' data={data}>
  </Chart>
  </div>
  </>
  );
}

export default BarChart;
