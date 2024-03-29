import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const BarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Convert labels and data to arrays if they are not already
    const labels = Array.isArray(props.labelsProp)
      ? props.labelsProp
      : [props.labelsProp];
    const data = Array.isArray(props.dataProp)
      ? props.dataProp
      : [props.dataProp];

    // Check if a chart instance already exists, and destroy it if it does
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart.js setup
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.labelsProp,
        datasets: [
          {
            label: "Services Provided",
            data: props.dataProp,

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
  }, [props.labelsProp, props.dataProp]); // Empty dependency array to run the effect only once

  return (
    <div>
      <canvas ref={chartRef} width="300" height="280"></canvas>
    </div>
  );
};

export default BarChart;
