import React from 'react';
import folderIcon from '../../assets/images/Icon-images/folder.png';
import fileIcon from '../../assets/images/Icon-images/document.png';

const PlaygroundAside = () => {
    return (
        <aside className='col-span-1 bg-black overflow-hidden'>
                <div className='p-1 text-blue-400 flex flex-row justify-around sulphur-20border-white'>
                    <p>Instructions</p>
                    <p className='text-white'>|</p>
                    <p>Keywords</p>
                </div>

                <div className='flex flex-row justify-around border-white poiret-20 items-center'>
                    <p>Create Note:</p>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <img className='w-5 h-5' alt='' src={folderIcon} />
                        <img className='w-5 h-5' alt='' src={fileIcon} />
                    </div>

                </div>

                <div>
                    <div className='flex flex-col'>
                        <div className='flex items-center p-1 bg-slate-900'>
                            <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
                            <p className='ml-1 sulphur-20'>Dream Note</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='flex w-full p-2 items-center'>
                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                <p className='ml-1 sulphur-15'>night dreaming</p>
                            </div>
                            <div className='flex w-full p-2 items-center'>
                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                <p className='ml-1 text-blue-400 sulphur-15'>Day Dreaming</p>
                            </div>
                            <div className='flex w-full p-2 items-center'>
                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                <p className='ml-1 sulphur-15'>afternoon dreaming and y..</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col'>
                        <div className='flex items-center p-1 bg-slate-900'>
                            <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
                            <p className='ml-1 sulphur-20'>Noway notes for..</p>
                        </div>

                        <div className='flex flex-col items-center'>
                            <div className='flex w-full p-2 items-center'>
                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                <p className='ml-1 sulphur-15'>now note for the dead en..</p>
                            </div>
                            <div className='flex w-full p-2 items-center'>
                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                <p className='ml-1 sulphur-15'>No cheating</p>
                            </div>
                            <div className='flex w-full p-2 items-center'>
                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                <p className='ml-1 sulphur-15'>afternoon dreaming</p>
                            </div>
                        </div>
                    </div>


                </div>

            </aside>
    );
};

export default PlaygroundAside;