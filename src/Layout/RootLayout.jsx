import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const RootLayout = () => {
    return (
        <div className='inter flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;