import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useRef } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export const options = {
  responsive: true,
  plugins: {},
};

export const Chart = ({ data }) => {
  const chart = useRef();

  useEffect(() => {
    chart.current.update();
  }, [data]);

  return <Line ref={chart} options={options} data={data} w="100%" />;
};
