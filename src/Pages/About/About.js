import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    const isUserSignedin = localStorage.getItem('isUserSignedin');
    return (
        <section>
            <Header />
            <div className='flex flex-col w-10/12 sm:w-9/12 md:w-7/12 items-center justify-center m-auto'>
                <div>
                    <div>
                    <h3 className='sulphur-20 text-blue-300'>WHAT ZYVA IS ABOUT?</h3>
                    <p className='poiret-15'>Well, Zyva is a speech note web-app. In day to day life, we need to take notes by writing it on some paper or typing in a note taking app. But using Zyva, you can do it without writing or typing. Just speak what you want to note, Zyva will do the rest for you.</p>
                    </div>

                    <div>
                        <h3 className='sulphur-20 text-blue-300'>WHAT CAN YOU USE IT FOR?</h3>
                        <ul className='list-disc ml-5'>
                        <li className='poiret-15'>Taking notes.</li>
                        <li className='poiret-15'>Writing a book.</li>
                        <li className='poiret-15'>Writing your personal journal.</li>
                        <li className='poiret-15'>Writing Articles.</li>
                        <li className='poiret-15'>Creating presentations.</li>
                        <li className='poiret-15'>Writing E-mails and more.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='sulphur-20 text-blue-300'>KEY FEATURES</h3>
                        <ul className='list-disc ml-5'>
                        <li className='poiret-15'>Use keywords to create headings, graphs, images, videos, paragraphs etc.</li>
                        <li className='poiret-15'>Edit, change or delete note contents manually.</li>
                        <li className='poiret-15'>Style texts using text-editor.</li>
                        <li className='poiret-15'>Create, save, delete or update multiple notes for each chapter or subject.</li>
                        <li className='poiret-15'>Download PDF of any note.</li>
                        </ul>
                    </div>
                </div>
                <div className='m-3'>
                <Link to={isUserSignedin === 'true' ? '/playground' : '/get-access'} className='bg-slate-800 w-40 m-auto sulphur-20 rounded hover:bg-slate-700 text-blue-400 p-2'>Try it out!</Link>
                </div>
            </div>
            <Footer />
        </section> 
    );
};

export default About;