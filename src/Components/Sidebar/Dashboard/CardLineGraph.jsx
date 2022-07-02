import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
    },
  },
};

const labels = ['January', 'February', 'March', 'April'];

export const data = {
  labels,
  datasets: [
    {
      tension: 0.4,
      data: [50, 100, 50, 70],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function CardLineGraph(props) {
  return (
    <div>
      <Line data={props.data} options={options} />
    </div>
  )

}