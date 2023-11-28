import React, { useState } from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import PlaygroundEditor from './PlaygroundEditor';


const Playground = () => {
    const [filesAndFolders, setFilesAndFolders] = useState({
        folders: [],
        singleNotes: []
    });

    const updateFilesAndFoldersState = (newState) => {
        setFilesAndFolders(newState);
      };
    return (
        <section className='grid grid-cols-6 h-screen'>
            <PlaygroundAside filesAndFolders={filesAndFolders} updateFilesAndFoldersState={updateFilesAndFoldersState} />
            <PlaygroundEditor filesAndFolders={filesAndFolders} updateFilesAndFoldersState={updateFilesAndFoldersState} />
        </section>
    );
};

export default Playground;