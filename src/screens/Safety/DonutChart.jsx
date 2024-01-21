import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Colors } from "../../styles/theme"; 

const DonutChart = ({ data, labels }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Donut Chart",
            data: data,
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

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, labels]); 

  return <canvas ref={chartRef}></canvas>;
};

export default DonutChart;
