import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const BarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);


  useEffect(() => {
  // Check if a chart instance already exists, and destroy it if it does
  if (chartInstance.current) {
    chartInstance.current.destroy();
  }

  // Filter data for specific categories
  const filteredLabels = [];
  const filteredData = [];

  props.labelsProp.forEach((label, index) => {
    const category = label.toLowerCase();
    if (
      category === "pedestrian traffic lights" ||
      category === "number of public trees" ||
      category === "electric vehicle chargers" ||
      category === "collisions involving pedestrians" ||
      category === "coyote sightings"
    ) {
      filteredLabels.push(label);
      filteredData.push(props.dataProp[index]);
    }
  });

  // Chart.js setup
  const ctx = chartRef.current.getContext("2d");
  chartInstance.current = new Chart(ctx, {
    type: "bar",
    data: {
      labels: filteredLabels,
      datasets: [
        {
          label: "Services Provided",
          data: filteredData,
          backgroundColor: Colors.lightNavyBlue,
          borderColor: Colors.navyBlue,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
      },
    },
  });

  // Cleanup the chart instance when the component unmounts
  return () => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
  };
}, [props.labelsProp, props.dataProp]);


  return (
    <div>
      <canvas ref={chartRef} width="300" height="280"></canvas>
    </div>
  );
};

export default BarChart;
