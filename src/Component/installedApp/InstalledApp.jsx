import { Download, Star } from 'lucide-react';
import { getInstalledApps } from '../../Utilities/storage';

const InstalledApp = ({ app, setInstalledApps }) => {

    const { id, image, title, description, downloads, ratingAvg, size } = app

    const handleUninstall = () => {
        const existingApps = getInstalledApps();
        const updatedApps = existingApps.filter(app => app.id !== id)
        localStorage.setItem("installed", JSON.stringify(updatedApps))
        setInstalledApps(updatedApps)
    }


    return (
        <div className='flex justify-between bg-white my-2 items-center gap-5 p-2 rounded-lg'>
            <div className='flex gap-5 items-center'>
                <figure className='w-20 border border-[#6273822f] rounded-lg shadow-sm'>
                    <img className='rounded-lg' src={image} alt="" />
                </figure>
                <div>
                    <h1><span className='font-bold'>{title}:</span> {description}</h1>
                    <div className='flex gap-8 items-center'>
                        <span className='flex text-[#00D390] items-center gap-1'><Download className='w-4' /> {downloads}M</span>
                        <span className='flex items-center gap-1 text-[#FF8811]'><Star className='w-4 stroke-3 ' /> {ratingAvg}</span>
                        <span className='text-[#627382]'>{size} MB</span>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUninstall()} className='btn btn-outline bg-[#00D390] text-white'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;