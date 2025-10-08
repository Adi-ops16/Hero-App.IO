import React from 'react';
import PlayStore from '../../assets/playstore.png'
import appStore from '../../assets/appstore.png'
import banner from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='py-10 inter'>
            <div className='text-center space-y-5 px-2'>
                <h1 className='text-4xl lg:text-7xl font-bold'>We Build</h1>
                <h2 className='text-4xl lg:text-7xl font-extrabold'>
                    <span className='text-[#9F62F2]'>Productive  </span>
                    Apps
                </h2>
                <p className='text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-5'>
                    <button className='btn btn-outline border-[#0019314d]'><img src={PlayStore} /> Google Play</button>
                    <button className='btn btn-outline border-[#0019314d]'><img src={appStore} /> App Store</button>
                </div>
            </div>
            <div className='flex justify-center mt-10 px-2'>
                <img src={banner} alt="" />
            </div>
            {/* trusted section */}
            <div className='space-y-5 bg-linear-to-b from-[#632EE3] to-[#9F62F2] text-white text-center py-10'>
                <h1 className='text-4xl font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center gap-5 md:gap-10 lg:gap-20 flex-wrap'>
                    <div className='space-y-8'>
                        <p className='text-sm'>Total Downloads</p>
                        <h1 className='text-5xl font-bold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='space-y-8'>
                        <p className='text-sm'>Total Reviews</p>
                        <h1 className='text-5xl font-bold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='space-y-8'>
                        <p className='text-sm'>Active Apps</p>
                        <h1 className='text-5xl font-bold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;