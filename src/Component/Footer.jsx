import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="inter">
            <div className='bg-linear-to-br from-[#9e62f2c4] to-[#642ee3c4] py-5'>
                <div className='max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='space-y-2 col-span-2'>
                        <h1 className='text-2xl font-semibold text-white'>About Us</h1>
                        <p className='text-white'>At Hero.IO, we are passionate about helping you make the most of your time. Our curated collection of productivity apps is designed to simplify tasks, boost efficiency, and keep you organized—whether you're managing projects, tracking goals, or staying on top of your daily routines. We believe in working smarter, not harder, and our platform connects you with the tools to do just that.</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-2xl font-semibold text-white'>Legal</h1>
                            <div className='text-white'>
                                <p><a href='/'>Services</a></p>
                                <p><a href='/'>Privacy Policy</a></p>
                                <p><a href='/'>Terms and Conditions</a></p>
                            </div>
                        </div>
                        <div className='text-2xl font-semibold space-y-5 text-white'>
                            <p>Social Links</p>
                            <div className='flex justify-center items-center gap-5'>
                                <Facebook className='stroke-2' />
                                <Instagram className='stroke-2' />
                                <Twitter className='stroke-2' />
                                <Youtube className='stroke-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-white bg-linear-to-br from-[#9e62f2] to-[#642ee3]'>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;