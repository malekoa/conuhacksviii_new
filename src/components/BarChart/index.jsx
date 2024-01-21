import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  let labelsProp = props.labelsProp;
  let dataProp = props.dataProp;

  console.log(labelsProp);

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
        labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"],
        datasets: [
          {
            label: "Bar Chart Example",
            data: [12, 19, 3, 5, 2],
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
              display: false
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: false
            }
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