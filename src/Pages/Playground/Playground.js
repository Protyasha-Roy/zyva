import React from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';

const Playground = () => {
    return (
        <section className='grid grid-cols-6 h-screen'>
            <PlaygroundAside/>
            
            <section className='col-span-5 p-5'>
                <div>
                    <h1>Zyva</h1>
                </div>

                <div>
                    <div>
                        <h1>Day Dreaming title</h1>
                    </div>

                    <div>
                        <h1>Play here</h1>
                    </div>

                    <div>
                        <h1>THe play button</h1>
                    </div>
                </div>
            </section>

        </section>
    );
};

export default Playground;