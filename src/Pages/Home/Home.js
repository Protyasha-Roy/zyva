import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./Home.css";
import appImage from '../../assets/images/Home-images/app-image.jpg';

const Home = () => {
    return (
        <section>
            <Header/>
            <div className='flex flex-col text-center justify-center items-center intro-container p-4'>
                <div className='flex flex-col w-100'>
                    <h1 className='fairplay-50'>Zyva is a speech note web-application</h1>
                    <p className='poiret-30'>Make notes, books, and personal journal without typing</p>
                </div>
                <div className='image-container mt-5'>
                    <img className='app-image' src={appImage}alt='The application demo'></img>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Home;