import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import down from '../../assets/icon-downloads.png'
import star from '../../assets/icon-ratings.png'
import like from '../../assets/icon-review.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Swal from 'sweetalert2';
import { getInstalledApps, setInstalledApp } from '../../Utilities/storage';
import { RingLoader } from 'react-spinners';

const AppDetails = () => {
    const [clicked, setClicked] = useState(false)

    const { Id } = useParams()
    const { apps, loading } = useApps()

    const idConverted = parseInt(Id)
    const clickedApp = apps.find(app => app.id === idConverted)

    useEffect(() => {
        const installedApps = getInstalledApps()
        if (installedApps.some(app => Number(app.id) === idConverted)) {
            setClicked(true)
        }
    }, [idConverted])


    if (loading) return (<div className='flex h-screen justify-center items-center'>
        <RingLoader></RingLoader>
    </div>)

    const { title, companyName, image, description, downloads, ratingAvg, detailedDescription, reviews, size, ratings } = clickedApp

    const reversedRating = [...ratings].reverse()

    const handleInstall = (clickedApp) => {
        const existingApps = getInstalledApps()
        const isInstalled = existingApps.some(app => app.id === clickedApp.id)
        if (isInstalled) {
            setClicked(true)
            Swal.fire({
                title: "App Installed!",
                icon: "success"
            })
            return
        } else {
            setInstalledApp(clickedApp)
            setClicked(true)
            Swal.fire({
                title: "App Installed!",
                icon: "success"
            })
        }

    }
    return (
        <div className='inter bg-[#F5F5F5] py-10'>
            {/* basic details */}
            <div className='max-w-11/12 mx-auto flex flex-col md:flex-row gap-5'>
                <div className='flex justify-center'>
                    <img className='w-80' src={image} alt="" />
                </div>
                <div className='flex-1 flex flex-col justify-between'>
                    <div className='pb-5 border-b border-[#00193144] space-y-3'>
                        <h1 className='text-2xl font-bold'>{title} : {description}</h1>
                        <p className='text-[#627382]'>Developed By: <span className='text-[#9F62F2]'>{companyName}</span></p>
                    </div>
                    <div className='flex items-center justify-between gap-10'>
                        <div className='space-y-1 my-5'>
                            <img src={down} alt="" />
                            <p className='text-[#001931]'>Downloads</p>
                            <p className='text-4xl font-bold'>{downloads}M</p>
                        </div>
                        <div className='space-y-1 my-5'>
                            <img src={star} alt="" />
                            <p className='text-[#001931]'>Average Rating</p>
                            <p className='text-4xl font-bold'>{ratingAvg}</p>
                        </div>
                        <div className='space-y-1 my-5'>
                            <img src={like} alt="" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <p className='text-4xl font-bold'>{reviews}</p>
                        </div>
                    </div>
                    <button onClick={() => handleInstall(clickedApp)} disabled={clicked} className='bg-[#00D390] cursor-pointer text-white py-2 w-48 rounded-sm disabled:bg-gray-500 disabled:cursor-default'>{clicked ? "Installed" : `Install Now (${size}MB)`}</button>
                </div>
            </div>
            {/* chart */}
            <div className='max-w-11/12 mx-auto py-10 my-10 border-y border-[#00193144]'>
                <h1 className='text-2xl text-[#001931] font-semibold'>Ratings</h1>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={reversedRating} layout='vertical'>
                        <XAxis axisLine={false} type='number'></XAxis>
                        <YAxis axisLine={false} dataKey="name" type='category'></YAxis>
                        <Bar fill='#FF8811' barSize={30} dataKey="count"></Bar>
                        <Tooltip cursor={{ fill: "transparent" }}></Tooltip>
                    </BarChart>

                </ResponsiveContainer>
            </div>
            {/* description */}
            <div className='max-w-11/12 mx-auto space-y-5'>
                <h1 className='text-2xl text-[#001931] font-semibold'>Description</h1>
                <p className='text-[#627382]'>{detailedDescription}</p>
            </div>
        </div>
    );
};

export default AppDetails;