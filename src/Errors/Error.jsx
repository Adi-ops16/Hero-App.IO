import React from 'react';
import errorImg from '../assets/error-404.png'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className='inter flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 flex flex-col justify-center items-center space-y-5 py-10'>
                <figure>
                    <img src={errorImg} alt="" />
                </figure>
                <div className='text-center space-y-3'>
                    <h1 className='text-4xl font-bold'>Oops, page not found!</h1>
                    <p className='text-[#627382]'>The page you are looking for is not available.</p>
                </div>
                <Link to="/" className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-8 py-2 rounded-sm font-medium'>Go Home!</Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;