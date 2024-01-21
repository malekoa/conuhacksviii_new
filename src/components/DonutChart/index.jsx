import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const DonutChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Define the categories you want to display
  const desiredCategories = [
    "Thefts inside motor vehicle",
    "Robberies",
    "Collisions involving pedestrians",
    "Breaking and entering",
  ];

  // Check if labelsProp is an array before filtering
  const filteredLabels =
    Array.isArray(props.labelsProp) &&
    props.labelsProp.filter((label) => desiredCategories.includes(label));

  // Check if dataProp is an array before filtering
  const filteredData =
    Array.isArray(props.dataProp) &&
    props.dataProp.filter((data, index) =>
      filteredLabels.includes(props.labelsProp[index])
    );

  useEffect(() => {
    // Check if a chart instance already exists, and destroy it if it does
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart.js setup
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: filteredLabels,
        datasets: [
          {
            label: "Donut Chart Example",
            data: filteredData || [1,2,3,4],
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
  }, [filteredLabels, filteredData]);

  return (
    <div>
      <canvas ref={chartRef} width="250" height="150"></canvas>
    </div>
  );
};

export default DonutChart;
