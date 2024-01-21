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

    // Chart.js setup
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar", // Set the chart type to horizontal bar
      data: {
        labels: props.labelsProp,
        datasets: [
          {
            label: "Neighbourhood Safety",
            data: props.dataProp,
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
