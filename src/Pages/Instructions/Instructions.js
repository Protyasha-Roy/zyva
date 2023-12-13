import React from 'react';
import instructionDemoImage from '../../assets/images/Instruction-images/instructions-thumbnail.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import instructionVideo from '../../assets/videos/instructions.mp4';

const Instructions = () => {
    return (
        <section>
            <Header />
            <div className='m-auto mt-10 mb-10 w-11/12 md:w-9/12 lg:w-7/12 flex flex-cold justify-center'>
            <div className='flex flex-col justify-center items-center w-full gap-4'>
                <p className='sulphur-20'>WATCH THIS INSTRUCTIONAL VIDEO</p>
                <div className='w-full'>
                <video width="100%" height="auto" controls poster={instructionDemoImage}>
                <source src={instructionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
                </div>
            </div>
            </div>

            <Footer />
        </section>
    );
};

export default Instructions;