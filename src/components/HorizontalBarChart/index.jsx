// import { Colors } from "../../styles/theme";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const HorizontalBarChart = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }

    chartRef.current.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Count',
          data: data,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)', // trees
            'rgba(255, 206, 86, 0.2)'  // gardens
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)'  
          ],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y', 
        scales: {
          x: {
            beginAtZero: true,

            grid: {
              display: false
            }
            
          },
          y: {
            grid: {
              display: false
            }
          }

        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    });

    return () => {
      chartRef.current.chartInstance.destroy();
    };
  }, [data, labels]); // Dependency array to re-render chart on data/labels change

  return <canvas ref={chartRef}></canvas>;
};

export default HorizontalBarChart;
