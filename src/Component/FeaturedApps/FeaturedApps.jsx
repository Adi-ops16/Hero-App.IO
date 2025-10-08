import React from 'react';
import useApps from '../../Hooks/useApps';
import FeaturedApp from './FeaturedApp';
import { Link } from 'react-router';

const FeaturedApps = () => {
    const { apps } = useApps()
    const FeaturedApps = apps.slice(0, 8)
    return (
        <div className='space-y-10 inter'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-bold'>Trending Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='max-w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2'>
                {
                    FeaturedApps.map(featuredApps => <FeaturedApp key={featuredApps.id} featuredApps={featuredApps}></FeaturedApp>)
                }
            </div>
            <div className='flex justify-center pt-5 pb-10'>
                <Link to='/apps' className='text-white px-10 py-3 font-semibold rounded-sm bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>Show All</Link>
            </div>
        </div>
    );
};

export default FeaturedApps;