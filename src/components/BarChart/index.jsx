import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const BarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  let labelsProp = props.labelsProp;
  let dataProp = props.dataProp;

  console.log(labelsProp);
  console.log(dataProp);

  useEffect(() => {
    // Check if a chart instance already exists, and destroy it if it does
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart.js setup
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labelsProp,
        datasets: [
          {
            label: "Bar Chart Example",
            data: dataProp,
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
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <canvas ref={chartRef} width="250" height="250"></canvas>
    </div>
  );
};

export default BarChart;
