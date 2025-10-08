import React from 'react';
import Banner from '../Component/HomeElements/Banner';
import FeaturedApps from '../Component/FeaturedApps/FeaturedApps';

const Home = () => {
    return (
        <div className='bg-[#F5F5F5] inter'>
            <Banner></Banner>
            <FeaturedApps></FeaturedApps>
        </div>
    );
};

export default Home;