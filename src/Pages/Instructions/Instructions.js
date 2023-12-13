import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import ReactPlayer from 'react-player/lib';
import './instructions.css';

const Instructions = () => {
    return (
        <section>
            <Header />
            <div className='m-auto mt-10 mb-10 w-11/12 md:w-9/12 lg:w-7/12 flex flex-cold justify-center'>
            <div className='flex flex-col justify-center items-center w-full gap-4'>
                <p className='sulphur-20'>WATCH THIS INSTRUCTIONAL VIDEO</p>
                <div className='w-full border video-container'>
                    <ReactPlayer
                    className='h-screen border'
                        url="https://youtu.be/_b0z1SeZhBE"
                        controls
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            </div>

            <Footer />
        </section>
    );
};

export default Instructions;