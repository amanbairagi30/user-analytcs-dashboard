import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS?.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const StackedBarChart = ({chartData}) => {

    // const chartData = {
    //     "labels": ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    //     "datasets": [
    //       {
    //         "label": "City",
    //         "data": [1, 2, 3, 4, 5, 6, 7],
    //         "backgroundColor": "#FB4540",
    //       },
    //       {
    //         "label": "Country",
    //         "data": [1, 2, 3, 4, 5, 6, 7],
    //         "backgroundColor": "#00F2DE",
    //       }
    //     ]
    //   }

      const data = {
        labels: chartData?.labels,
        datasets: [
          {
            label: chartData?.datasets[0]?.label,
            data: chartData?.datasets[0]?.data,
            backgroundColor: chartData?.datasets[0]?.backgroundColor,
            borderWidth: 0,
            barPercentage: -0.21,
            borderRadius: 20,
          },
          {
            label: chartData?.datasets[1]?.label,
            data: chartData?.datasets[1]?.data,
            backgroundColor: chartData?.datasets[1]?.backgroundColor,
            barPercentage: -0.21,
            borderWidth: 0,
          },
        ],
      };


    const options = {
    maintainAspectRatio: false,

        scales: {
            x:{
                stacked : true,
                  beginAtZero: true,
            },
            y: {
            //   beginAtZero: true,
              stacked : true,
            },
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
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

    }

    return (
        <div style={{ height: '300px'}}>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}


export default StackedBarChart
