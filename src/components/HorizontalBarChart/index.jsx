import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

// add props "labels" and "data" to this component
const HorizontalBarChart = (props) => {
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
      category === "homicides" ||
      category === "breaking and enterings" ||
      category === "thefts inside motor vehicle" ||
      category === "thefts of motor vehicles" ||
      category === "robberies" ||
      category === "bedbug exterminations" ||
      category === "collisions involving pedestrians" ||
      category === "collisions involving cyclists"
    ) {
      filteredLabels.push(label);
      filteredData.push(props.dataProp[index]);
    }
  });

  // Chart.js setup
  const ctx = chartRef.current.getContext("2d");
  chartInstance.current = new Chart(ctx, {
    type: "bar", // Set the chart type to horizontal bar
    data: {
      labels: filteredLabels,
      datasets: [
        {
          label: "Neighbourhood Safety",
          data: filteredData,
          backgroundColor: [Colors.lightNavyBlue],
          borderColor: Colors.navyBlue,
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        y: {
          grid: {
            display: false,
          },
        },
        x: {
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
}, [props.labelsProp, props.dataProp]); // Empty dependency array to run the effect only once

  return (
    <div>
      <canvas ref={chartRef} width="400" height="300"></canvas>
    </div>
  );
};

export default HorizontalBarChart;