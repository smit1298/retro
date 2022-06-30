import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const Graph = () => {
  const [data, setData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        Label: "First Dataset",
        data: [30, 31, 17, 29, 32, 15, 17, 20, 21, 20, 32, 5],
        tension: 0.4,
        backgroundColor: "rgb(87, 105, 242, 0.1)",
        borderColor: "rgb(87, 105, 242)",
        fill: true
      },
      {
        Label: "First Dataset",
        data: [21, 15, 23, 32, 22, 20, 22, 20, 16, 21, 23, 20, 27],
        tension: 0.4,
        backgroundColor: "rgb(245, 39, 142, 0.1)",
        borderColor: "rgb(245, 39, 142)",
        fill: true
      }
    ]
  });
  return (
    <div className="bg-white" style={{height: "300px"}}>
      <Line data={data} style={{height: "100%"}}/>
    </div>
  );
};

export default Graph;
