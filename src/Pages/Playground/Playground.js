import React from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import profileIcon from '../../assets/images/Icon-images/account.png';
import editIcon from '../../assets/images/Icon-images/edit.png';
import deleteIcon from '../../assets/images/Icon-images/delete.png';
import downloadPdfIcon from '../../assets/images/Icon-images/download-pdf.png';
import playButton from '../../assets/images/Icon-images/play.png';


const Playground = () => {
    return (
        <section className='grid grid-cols-6 h-screen'>
            <PlaygroundAside/>

            <section className='col-span-5 flex flex-col items-center p-2'>
                <div className='flex justify-between w-11/12 items-center'>
                    <p className='sulphur-30'>zyva</p>
                    <img className='w-10 h-10' src={profileIcon} alt="" />
                </div>

                <div className='rounded playground p-3 mt-2'>
                    <div className='flex justify-between items-center'>
                        <p className='sulphur-15 file-title'>Day Dreaming</p>
                        <div className='flex gap-2'>
                            <img className='w-5 h-5' src={editIcon} alt="" />
                            <img className='w-5 h-5' src={deleteIcon} alt="" />
                            <img className='w-5 h-5' src={downloadPdfIcon} alt="" />
                        </div>
                    </div>

                    <div className='speech-container mt-2 rounded p-3 sulphur'>
                        <h1 className='text-center sulphur-40'>Day Dreaming</h1>
                        <h2 className='sulphur-30'>Nightmares</h2>
                        <p>Ever wondered about the fascinating world of bioluminescent organisms? Picture this: deep in the ocean, where sunlight struggles to reach, creatures like the anglerfish use bioluminescence to lure prey. It's like a natural, underwater light show! These creatures produce light through a chemical reaction involving luciferin and oxygen, a process called bioluminescence. The light not only attracts unsuspecting prey but also helps them communicate in the dark depths. Imagine the ocean floor illuminated by these living lanterns. Nature is indeed full of wonders!</p>
                        
                        <h2 className='sulphur-30'>Ride Alongs</h2>
                        <p>Ever wondered about the fascinating world of bioluminescent organisms? Picture this: deep in the ocean, where sunlight struggles to reach, creatures like the anglerfish use bioluminescence to lure prey. It's like a natural, underwater light show! These creatures produce light through a chemical reaction involving luciferin and oxygen, a process called bioluminescence. The light not only attracts unsuspecting prey but also helps them communicate in the dark depths. Imagine the ocean floor illuminated by these living lanterns. Nature is indeed full of wonders! Ever wondered about the fascinating world of bioluminescent organisms? Picture this: deep in the ocean, where sunlight struggles to reach, creatures like the anglerfish use bioluminescence to lure prey. It's like a natural, underwater light show! These creatures produce light through a chemical reaction involving luciferin and oxygen, a process called bioluminescence. The light not only attracts unsuspecting prey but also helps them communicate in the dark depths. Imagine the ocean floor illuminated by these living lanterns. Nature is indeed full of wonders!Ever wondered about the fascinating world of bioluminescent organisms? Picture this: deep in the ocean, where sunlight struggles to reach, creatures like the anglerfish use bioluminescence to lure prey. It's like a natural, underwater light show! These creatures produce light through a chemical reaction involving luciferin and oxygen, a process called bioluminescence. The light not only attracts unsuspecting prey but also helps them communicate in the dark depths. Imagine the ocean floor illuminated by these living lanterns. Nature is indeed full of wonders! Ever wondered about the fascinating world of bioluminescent organisms? Picture this: deep in the ocean, where sunlight struggles to reach, creatures like the anglerfish use bioluminescence to lure prey. It's like a natural, underwater light show! These creatures produce light through a chemical reaction involving luciferin and oxygen, a process called bioluminescence. The light not only attracts unsuspecting prey but also helps them communicate in the dark depths. Imagine the ocean floor illuminated by these living lanterns. Nature is indeed full of wonders!
                        </p>
                    </div>

                    <div className='p-2  flex justify-center items-center'>
                        <button className=''>
                            <img src={playButton} alt="" />
                        </button>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default Playground;