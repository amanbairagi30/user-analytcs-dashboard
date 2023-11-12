import React from 'react'

import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJs?.register(
    ArcElement,
    Tooltip,
    Legend
);

const pie_labels = ["User Visit", "User SignUp", "User Subscribed"];

const pieData = {
    user_visit: 3124213,
    user_signup: 1523151,
    user_subscribed: 948213
}

const DoughnutChart = () => {

    const labels = ['User Visit', 'User Signup', 'User Subscribed'];
    const chartData = {
        "labels": ["User Visit", "User Signup", "User Subscribed"],
        "data": [3124213, 1523151, 948213],
        "backgroundColor": ["#3f46f7", "#3e3091", "#28155a"]
    }

    // Create the chartData object
    const data = {
        labels: chartData?.labels,
        datasets: [
            {
                label: 'User Data',
                data: chartData?.data,
                backgroundColor: chartData?.backgroundColor,
                borderColor: chartData?.backgroundColor, // Match the border color with the background color for a solid appearance
                borderRadius: 25
            },
        ],
    };
    const options = {
        cutout: '80%',
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide the legend for this example
            },
            title: {
                display: false,
                text: 'Center Text', // Your text here
                position: 'top',
                align: 'center',
                font: {
                    size: 16,
                },
            },
        },

        rotation: 0.8 * 250,// Adjust this value to control the thickness of the Doughnut
    }

    return (
        <div style={{ width: '180px', height: '180px' }} className=''>
            <Doughnut
                data={data}
                options={options}
            ></Doughnut>
        </div>
    )
}

export default DoughnutChart
