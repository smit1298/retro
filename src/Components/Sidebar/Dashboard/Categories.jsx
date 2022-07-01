import { useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  RadialLinearScale,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  RadarController
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  RadarController,RadialLinearScale
);

const Categories = () => {
  const [data, setData] = useState({
    labels: [
      "Shoes",
      "Jean",
      "Accessories",
      "Watch",
      "T-Shirt",
      "Outwear"
    ],
    datasets: [
      {
        Label: "First Dataset",
        data: [45, 44, 41, 45, 45, 45],
        tension: 0.01,
        backgroundColor: "rgb(87, 105, 242, 0.1)",
        borderColor: "rgb(87, 105, 242)",
        fill: true
      },
      {
        Label: "second Dataset",
        data: [40, 42, 48, 40, 39, 20],
        tension: 0.01,
        backgroundColor: "rgb(245, 39, 142, 0.1)",
        borderColor: "rgb(245, 39, 142)",
        fill: true
      }
    ]
  });
  return (
    <div className="bg-white" style={{height: "180px"}}>
      <Radar data={data} style={{height: "100%"}}/>
    </div>
  );
};

export default Categories;
