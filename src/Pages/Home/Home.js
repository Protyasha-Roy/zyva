import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import "./Home.css";
import appImage from '../../assets/images/Home-images/playground-image.png';
import { Link } from 'react-router-dom';

const Home = () => {
    const isUserSignedin = localStorage.getItem('isUserSignedin');

    return (
        <section>
            <Header/>
            <div className='flex flex-col text-center items-center intro-container'>
                <div className='flex flex-col w-100'>
                    <h1 className='fairplay-30 sm:text-3xl md:text-4xl'>Zyva is a speech note web-application</h1>
                    <p className='poiret-15 sm:text-2xl md:text-3xl'>Make notes, books, and personal journal without typing.</p>
                    <Link to={isUserSignedin === 'true' ? '/playground' : '/get-access'} className='bg-slate-800 w-40 m-auto sulphur-20 rounded hover:bg-slate-700 text-blue-400 mt-3'>Try it out!</Link>
                </div>
                <div className='w-full overflow-hidden mt-5 sm:w-11/12 md:w-10/12 lg:w-7/12'>
                    <img className='app-image' src={appImage}alt='The application demo'></img>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Home;