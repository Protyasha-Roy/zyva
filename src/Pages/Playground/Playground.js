import React from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import PlaygroundEditor from './PlaygroundEditor';


const Playground = () => {
    return (
        <section className='grid grid-cols-6 h-screen'>
            <PlaygroundAside/>
            <PlaygroundEditor/>
        </section>
    );
};

export default Playground;