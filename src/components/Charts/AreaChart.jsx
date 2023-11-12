import React from 'react';
import { Line } from 'react-chartjs-2';

const AreaChart = ({chartData}) => {


      
      const data = {
        labels: chartData?.labels,
        datasets: [
          {
            label: chartData?.datasets[0]?.label,
            backgroundColor: chartData?.datasets[0]?.backgroundColor,
            borderColor: chartData?.datasets[0]?.borderColor,
            data: chartData?.datasets[0]?.data,
            tension : 0.4,

          },
          {
            label: chartData?.datasets[1]?.label,
            backgroundColor: chartData?.datasets[1]?.backgroundColor,
            borderColor: chartData?.datasets[1]?.borderColor,
            data: chartData?.datasets[1]?.data,
            tension : 0.4,
          },
        ],
      };

    const options = {
        maintainAspectRatio: false,

        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                    borderColor: "white",
                }

            },
            y: {
                beginAtZero: true,
                display: false,
                grid: {
                    display: false,
                }
            },
        },
        plugins: {
            legend: {
                display: false, // Hide the legend for this example
            },

        },
    };

    return (
        <div style={{ height: '250px' }}>
            {/* <h2>Area Chart Example</h2> */}
            <Line data={data} options={options} />
        </div>
    );
};

export default AreaChart;
