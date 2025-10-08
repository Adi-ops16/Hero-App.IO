import React from 'react';
import AppError from '../assets/App-Error.png'
import { Link, Navigate } from 'react-router';
const NoAppsFound = () => {
    return (
        <div className='col-span-full space-y-5 py-5'>
            <figure className='flex justify-center items-center'>
                <img src={AppError} alt="" />
            </figure>
            <div className='text-center space-y-5 py-5'>
                <h1 className='text-3xl font-bold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link onClick={() => Navigate(-1)} className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-8 py-2 rounded-sm font-medium'>Go Back!</Link>
            </div>
        </div>
    );
};

export default NoAppsFound;