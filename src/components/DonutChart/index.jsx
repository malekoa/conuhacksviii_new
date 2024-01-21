import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const DonutChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  let labelsProp = props.labelsProp;
  let dataProp = props.dataProp;

  useEffect(() => {
    // Check if a chart instance already exists, and destroy it if it does
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart.js setup
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut", // Set the chart type to doughnut
      data: {
        labels: labelsProp,
        datasets: [
          {
            label: "Donut Chart Example",
            data: dataProp,
            backgroundColor: [
              Colors.lightNavyBlue,
              Colors.navyBlue,
              Colors.lightPink,
              Colors.pink,
            ],
            borderColor: Colors.white,
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutout: "60%",
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
      <canvas ref={chartRef} width="250" height="150"></canvas>
    </div>
  );
};

export default DonutChart;
