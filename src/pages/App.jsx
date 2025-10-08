import { Download, Star } from 'lucide-react';
import React from 'react';

const App = ({ app }) => {
    const { title, image, description, downloads, ratingAvg } = app
    return (
        <div className='inter flex flex-col justify-between bg-white p-4 py-4 px-2 rounded-md space-y-3 hover:scale-105 duration-500 cursor-pointer'>
            <figure className='flex justify-center items-center py-5 rounded-lg'>
                <img className='w-64 max-h-[300px]' src={image} alt="" />
            </figure>
            <h1 className='font-medium'><span>{title} :</span>{description}</h1>
            <div className='flex items-center justify-between'>
                <div className=" bg-[#F1F5E8] text-[#00D390] py-1 px-2 rounded-md">
                    <span className='flex items-center gap-1'><Download className='w-4' /> {downloads}</span>
                </div>
                <div className=" bg-[#F1F5E8] py-1 px-2 rounded-md">
                    <span className='flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1]'><Star className='w-4 stroke-3 ' /> {ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default App;