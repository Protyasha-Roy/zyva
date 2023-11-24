import React from 'react';
import instructionDemoImage from '../../assets/images/Instruction-images/instructions-thumbnail.png';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Instructions = () => {
    return (
        <section>
            <Header />
            <div className='m-auto mt-10 mb-10 w-7/12 flex flex-cold justify-center'>
            <div className='flex flex-col justify-center items-center w-full gap-4'>
                <p className='sulphur-30'>WATCH THIS INSTRUCTIONAL VIDEO</p>
                <div className='w-full'>
                    <img className='w-full' src={instructionDemoImage} alt=''></img>
                </div>
            </div>
            </div>

            <Footer />
        </section>
    );
};

export default Instructions;