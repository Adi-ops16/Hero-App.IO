import React, { useState } from 'react';
import { getInstalledApps } from '../Utilities/storage';
import InstalledApp from '../Component/installedApp/InstalledApp';
import { ChevronDown } from 'lucide-react';
import useApps from '../Hooks/useApps';
import { RingLoader } from 'react-spinners';

const Installation = () => {
    const { loading } = useApps()
    const [installedApps, setInstalledApps] = useState(() => getInstalledApps() || [])
    const [sort, setSort] = useState('none')
    const sortedApps = [...installedApps].sort((a, b) => {
        if (sort === "asc") { return Number(a.downloads) - Number(b.downloads) }
        if (sort === "desc") { return Number(b.downloads) - Number(a.downloads) }
        return 0;
    })

    return (
        <div className='bg-[#F5F5F5] pt-20 pb-10 inter'>
            <div className='text-center space-y-5 mb-10'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center max-w-11/12 mx-auto'>
                <div className='flex gap-2 font-bold'>
                    <span>{installedApps.length}</span>
                    <p>Apps Found</p>
                </div>
                <button className="btn btn-outline border-[#D2D2D2] text-[#627382]" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" }}>
                    Sort By Downloads <ChevronDown />
                </button>
                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                    <li><a onClick={() => { setSort("asc"); document.getElementById("popover-1")?.hidePopover(); }}>Low to High</a></li>
                    <li><a onClick={() => { setSort("desc"); document.getElementById("popover-1")?.hidePopover(); }}>High to Low</a></li>
                </ul>
            </div>
            <div className='max-w-11/12 mx-auto'>
                {loading ? <div className='flex justify-center items-center h-screen'>
                    <RingLoader></RingLoader>
                </div> :
                    sortedApps.map(app => <InstalledApp key={app.id} app={app} setInstalledApps={setInstalledApps} ></InstalledApp>)
                }
            </div>
        </div>
    );
};

export default Installation;