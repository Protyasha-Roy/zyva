import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <section>
            <Header />
            <div className='flex flex-col w-7/12 items-center justify-center m-auto'>
                <div>
                    <div>
                    <h3 className='sulphur-25 text-blue-300'>WHAT ZYVA IS ABOUT?</h3>
                    <p className='poiret-20'>Well, Zyva is a speech note web-app. In day to day life, we need to take notes by writing it on some paper or typing in a note taking app. But using Zyva, you can do it without writing or typing. Just speak what you want to note, Zyva will do the rest for you.</p>
                    </div>

                    <div>
                        <h3 className='sulphur-25 text-blue-300'>WHAT CAN YOU USE IT FOR?</h3>
                        <ul className='list-disc ml-5'>
                        <li className='poiret-20'>Taking notes.</li>
                        <li className='poiret-20'>Writing a book.</li>
                        <li className='poiret-20'>Writing your personal journal.</li>
                        <li className='poiret-20'>Writing Articles.</li>
                        <li className='poiret-20'>Creating presentations.</li>
                        <li className='poiret-20'>Writing E-mails and more.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='sulphur-25 text-blue-300'>KEY FEATURES</h3>
                        <ul className='list-disc ml-5'>
                        <li className='poiret-20'>Use keywords to create headings, graphs, images, videos, paragraphs etc.</li>
                        <li className='poiret-20'>Edit, change or delete note contents manually.</li>
                        <li className='poiret-20'>Style texts using text-editor.</li>
                        <li className='poiret-20'>Create, save, delete or update multiple notes for each chapter or subject.</li>
                        <li className='poiret-20'>Download PDF of any note.</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className='sulphur-30 text-center'>So, what are you waiting for? <span className='text-blue-500'> Try it out</span></p>
                </div>
            </div>
            <Footer />
        </section> 
    );
};

export default About;