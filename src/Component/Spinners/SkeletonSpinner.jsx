import React from 'react';

const SkeletonSpinner = ({ count = 8 }) => {
    return (
        <div className='max-w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2'>
            {
                Array.from({ length: count }).map((_, i) => <div key={i} className="flex w-80 h-112 flex-col gap-4">
                    <div className="skeleton h-64 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>)
            }
        </div>
    );
};

export default SkeletonSpinner;