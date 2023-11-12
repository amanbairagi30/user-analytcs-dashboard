import React from 'react';
import { Bar,Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const BidirectBarChart = ({chartData}) => {
  

  // Data
  const data = {
    labels: chartData?.labels,
    datasets: [
      {
        label: chartData?.datasets[0]?.label,
        data: chartData?.datasets[0]?.barData,
        backgroundColor: chartData?.datasets[0]?.barBackgroundColor,
        borderColor: chartData?.datasets[0]?.barBackgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        gap: 10,
        barPercentage: 0.85,
        order: 2,
      },
      {
        label: chartData?.datasets[1]?.label,
        data: chartData?.datasets[1]?.barData,
        backgroundColor: chartData?.datasets[1]?.barBackgroundColor,
        borderColor: chartData?.datasets[1]?.barBackgroundColor,
        borderWidth: 1,
        borderRadius: 5,
        gap: 10,
        barPercentage: 0.85,
        order: 2,
      },
      {
        label: chartData?.datasets[0]?.label + ' (Line)',
        data: chartData?.datasets[0]?.lineData,
        borderColor: chartData?.datasets[0]?.lineBorderColor,
        borderWidth: 2,
        type: 'line',
        order: 1,
        borderDash: [5, 5],
      },
    ],
  };

  // Chart options
  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        stacked: true
    },
    y: {
          stacked :true,
        beginAtZero: true,
        // max: 200,  // Set the maximum value for the Y-axis
        // min: -200,
        ticks: {
          stepSize:100, // Set the step size to control the gap between digits
        },
      },
    },
    plugins: {
        legend: {
            display: false, // Hide the legend for this example
        },
        // title: {
        //     display: false,
        //     text: 'Center Text', // Your text here
        //     position: 'top',
        //     align: 'center',
        //     font: {
        //         size: 16,
        //     },
        // },
    },
    interaction: {
        mode: 'nearest',
      },
      indexAxis: 'x',
  };

  return (
    <div>
      <div className="chartCard">
        <div className="chartBox"  style={{ height: '350px'}}>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default BidirectBarChart;
