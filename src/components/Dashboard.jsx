import React, { useEffect, useState } from 'react'
import UpArrow from "../assets/upArrow.svg"
import DownArrow from "../assets/downArrow.svg"
import filter from "../assets/filter.svg"
import growth from "../assets/growth.svg"
import Doughnut from './Charts/DoughnutChart'
import DoughnutChart from './Charts/DoughnutChart'
import StackedBarChart from './Charts/StackedBarChart'
import BidirectBarChart from './Charts/BidirectBarChart'
import AreaChart from './Charts/AreaChart'
// import { Doughnut } from 'react-chartjs-2'



const Dashboard = () => {

    const [apiData, setApiData] = useState(null);

    const fetchData = () => {
        fetch('https://mocki.io/v1/391a6df6-737e-400c-8c66-1ec7931c20ea')
            .then((response) => response.json())
            .then((data) => {
                setApiData(data); // Update the state with the fetched data
                console.log(data); // Update the state with the fetched data
            })
            .catch((error) => {
                console.error('API request error:', error);
            });
    }

    useEffect(() => {
        // Perform the API call here and update the state with the fetched data
        // Replace the fetch URL with your actual API endpoint
        fetchData();
    }, []);
    return (
        <>
            <main className='h-screen'>
                <section className='max-w-[1440px] mx-auto max-h-[1040px]  text-white'>
                    <div className='m-4  text-white'>
                        {/* header of the dashboard */}
                        <section>

                            <header className='heading flex flex-col items-start justify-start md:flex-row  gap-4 md:gap-0 md:items-center md:justify-between'>
                                {/* title of dashboard */}
                                <div className='left-side'>
                                    <h1 className='space-grotesk gradient font-bold text-[1.875rem] '>User Analytics</h1>
                                    <p>Lorem ipsum dolor sit consectetur.</p>
                                </div>

                                <div className='right-side'>
                                    <select className='w-[10.75rem] space-grotesk font-medium h-[3rem] bg-transparent border border-[#AEABD866] rounded-lg px-2' name="" id="">
                                        <option value="select">Select</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </header>
                        </section>

                        {/* grid containers having the all details */}
                        <section className='space-grotesk grid grid-cols-1 md:grid-cols-4 gap-6 my-4 mt-6 mb-6'>
                            <div className='col-span-4 flex flex-col gap-5 justify-center md:col-span-1 '>

                                <div className='custom-shadow px-4 py-0 h-[6.25rem] '>
                                    <div className='flex items-center  h-full justify-between'>
                                        <div className='flex gap-4'>
                                            <div className='svg-box w-[3rem] h-[3rem] flex items-center justify-center'>
                                                <img src={DownArrow} alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-[0.9375rem] text-[#8C89B4]'>Total Visits</h4>
                                                <p className='font-medium text-[1.5rem]'>{apiData?.total_visits}</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#02B15A26] text-[0.8rem] text-green-500 rounded-full flex items-center justify-center w-[4rem] h-[1.5rem]'>
                                            +1.29%
                                        </div>
                                    </div>
                                </div>
                                <div className='custom-shadow px-4 py-0 h-[6.25rem] '>
                                    <div className='flex items-center  h-full justify-between'>
                                        <div className='flex gap-4'>
                                            <div className='svg-box2 w-[3rem] h-[3rem] flex items-center justify-center'>
                                                <img src={UpArrow} alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-[0.9375rem] text-[#8C89B4]'>Total Subscribers</h4>
                                                <p className='font-medium text-[1.5rem]'>{apiData?.total_subscribers}</p>
                                            </div>
                                        </div>
                                        <div className='bg-[#b11f0226] text-[0.8rem] text-red-500 rounded-full flex items-center justify-center w-[4rem] h-[1.5rem]'>
                                            -1.29%
                                        </div>
                                    </div>
                                </div>
                                <div className='custom-shadow px-4 py-0 h-[6.25rem] '>
                                    <div className='flex items-center  h-full justify-between'>
                                        <div className='flex gap-4'>
                                            <div className='svg-box3 w-[3rem] h-[3rem] flex items-center justify-center'>
                                                <img src={filter} alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-[0.9375rem] text-[#8C89B4]'>Active Users</h4>
                                                <p className='font-medium text-[1.5rem]'>{apiData?.active_users}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='custom-shadow px-4 py-0 h-[6.25rem] '>
                                    <div className='flex items-center  h-full justify-between'>
                                        <div className='flex gap-4'>
                                            <div className='svg-box4 w-[3rem] h-[3rem] flex items-center justify-center'>
                                                <img src={growth} alt="" />
                                            </div>
                                            <div>
                                                <h4 className='text-[0.9375rem] text-[#8C89B4]'>Total Clicks</h4>
                                                <p className='font-medium text-[1.5rem]'>{apiData?.total_clicks}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-span-4 p-4 flex flex-col md:col-span-3  h-[28.75rem] custom-shadow'>

                                <div className='flex items-center justify-between'>
                                    <p className='space-grotesk text-[1.5rem] font-bold'>User Traffic</p>
                                    <div className='flex items-center justify-center gap-4'>

                                        <div className='flex items-center gap-5'>

                                            <div className='flex poppins text-[#909BBB] items-center text-[0.875rem]  gap-1'>
                                                <div className='w-[1rem] h-[1rem] bg-[#00F2DE] rounded-sm'></div>
                                                User SignUp
                                            </div>
                                            <div className='flex poppins text-[#909BBB] items-center text-[0.875rem]  gap-1'>
                                                <div className='w-[1rem] h-[1rem] bg-[#FB4540] rounded-sm'></div>
                                                Subscribed
                                            </div>
                                        </div>
                                        <div className='right-side'>
                                            <select className='w-[8.35rem] h-[2rem] text-[#909BBB]  text-[0.875rem] flex-shrink-0 space-grotesk font-medium bg-transparent border border-[#AEABD866] rounded-lg px-2' name="" id="">
                                                <option value="select">Select</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className='my-auto w-full h-[80%]'>
                                    <BidirectBarChart chartData={apiData?.bidirectBarChart} />
                                </div>


                            </div>

                            <div className='col-span-4 grid gap-6 grid-cols-1 md:grid-cols-3 mb-6'>
                                <div className='auto-cols-auto h-[24rem] dark-shadow flex flex-col p-4 bg-[#0918230D] '>
                                    <div className='flex items-center justify-between'>
                                        <p className='space-grotesk text-[1.5rem] font-bold'>Location</p>
                                        <div className='flex items-center gap-5'>

                                            <div className='flex items-center text-[0.875rem]  gap-1'>
                                                <div className='w-[0.6rem] h-[0.6rem] bg-[#00F2DE] rounded-full'></div>
                                                Country
                                            </div>
                                            <div className='flex items-center text-[0.875rem]  gap-1'>
                                                <div className='w-[0.6rem] h-[0.6rem] bg-[#FB4540] rounded-full'></div>
                                                City
                                            </div>
                                        </div>
                                    </div>

                                    <div className='my-auto'>
                                        <StackedBarChart chartData={apiData?.stackedBarChart} />
                                    </div>
                                </div>
                                <div className='auto-cols-auto h-fit min-h-[24rem] dark-shadow p-4 mt-0 bg-[#0918230D]  flex flex-col items-center '>
                                    <div className=' space-grotesk text-[24px] font-bold w-full '>Conversion rate</div>

                                    <div className=' w-full flex flex-col md:flex-row items-center my-auto justify-between  text-center gap-6 poppins'>
                                        <DoughnutChart chartData = {apiData?.doughnutChart} />
                                        <div className='flex flex-col items-center gap-6 justify-center'>
                                            <div className='flex  w-full justify-between gap-4'>
                                                <div className='w-[2.875rem] mt-1  h-[5px] rounded-full bg-[#3F46F7]'></div>
                                                <div className='flex flex-col text-left items-start  w-[100%]'>
                                                    <p className='text-[0.87rem] text-left text-[#EBEBF54D]'>Total User Visit</p>
                                                    <p className='font-bold'>3124213</p>
                                                </div>
                                            </div>
                                            <div className='flex  w-full justify-between gap-4'>
                                                <div className='w-[2.875rem] mt-1  h-[5px] rounded-full bg-[#5E5CE6]'></div>
                                                <div className='flex flex-col text-left items-start  w-[100%]'>
                                                    <p className='text-[0.87rem] text-left text-[#EBEBF54D]'>User SignUp</p>
                                                    <p className='font-bold'>1523151</p>
                                                </div>
                                            </div>
                                            <div className='flex  w-full justify-between gap-4'>
                                                <div className='w-[2.875rem] mt-1  h-[5px] rounded-full bg-[#5E5CE6]'></div>
                                                <div className='flex flex-col text-left items-start  w-[100%]'>
                                                    <p className='text-[0.87rem] text-left text-[#EBEBF54D]'>User Subscribed</p>
                                                    <p className='font-bold'>948123</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='auto-cols-auto p-4 flex flex-col min-h-[24rem] bg-[#0918230D] dark-shadow'>
                                    <div className='flex items-center justify-between'>
                                        <p className='space-grotesk text-[1.5rem] font-bold'> Website Analytics</p>

                                    </div>

                                    <p className='font-normal text-[#AEBBDA] text-[0.9em] opacity-80'>
                                        Based on your performance
                                    </p>

                                    <div className='flex py-6 px-10 text-[0.8rem] bg-[#290C51] justify-center rounded-lg items-center gap-4 w-[12.4rem] h-[2rem]'>
                                        <p className='cursor-pointer'>Weekly</p>
                                        <p className='bg-[#250442] p-2 rounded-lg'>Monthly</p>
                                        <p className='cursor-pointer'>Yearly</p>
                                    </div>

                                    <div className='my-auto'>
                                        <AreaChart chartData = {apiData?.areaChart} />
                                    </div>
                                </div>
                            </div>

                        </section>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Dashboard
