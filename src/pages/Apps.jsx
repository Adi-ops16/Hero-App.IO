import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import App from './App';
import NoAppsFound from '../Errors/NoAppsFound';
import SkeletonSpinner from '../Component/Spinners/SkeletonSpinner';
import { RingLoader } from 'react-spinners';

const Apps = () => {
    const { apps, loading } = useApps()
    const [search, setSearch] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const userSearch = search.trim().toLowerCase()
    const searchResult = apps.filter(app => userSearch ? app.title.toLowerCase().includes(userSearch) : apps)
    useEffect(() => {
        if (search.trim() === "") {
            setIsSearching(false)
            return
        };
        setIsSearching(true)
        const timer = setTimeout(() => { setIsSearching(false) }, 400)
        return () => clearTimeout(timer)
    }, [search])
    return (
        <div className='bg-[#F5F5F5] inter py-10'>
            <div className='text-center py-10 space-y-5'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='max-w-11/12 mx-auto flex justify-between items-center'>
                <p className='font-bold'><span>({searchResult.length}) </span>Apps Found</p>
                <label className="input bg-[#F5F5F5] focus-within:border-none">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} className='' type="search" required placeholder="Search" />
                </label>
            </div>
            {loading ? <SkeletonSpinner count={16} /> : isSearching ?
                (<div className='flex justify-center items-center h-screen'>
                    <RingLoader></RingLoader>
                </div>) :
                <div className='max-w-11/12 mx-auto my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-2'>
                    {
                        searchResult.length > 0 ? searchResult.map(app => <App key={app.id} app={app}></App>) : <NoAppsFound />
                    }
                </div>}
        </div>

    );
};

export default Apps;