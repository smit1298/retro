import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        display: false
      }
    }
  },
  responsive: true,
  // maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem) {
          return tooltipItem.yLabel;
        }
      }
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

export function CardBarGraph(props) {
  console.log(props.data)
  return (
    <div>
      <Bar data={props.data} options={options}  />
    </div>
  )

}