import React, { useState } from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import PlaygroundEditor from './PlaygroundEditor';


const Playground = () => {
    const [filesAndFolders, setFilesAndFolders] = useState({
        folders: [],
        singleNotes: []
    });
    const [selectedFile, setSelectedFile] = useState(null);

    const updateSelectedFile = (newState) => {
        setSelectedFile(newState);
    }

    console.log(selectedFile);

    const updateFilesAndFoldersState = (newState) => {
        setFilesAndFolders(newState);
      };
    return (
        <section className='grid grid-cols-6 h-screen'>
            <PlaygroundAside updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders} updateFilesAndFoldersState={updateFilesAndFoldersState} />
            <PlaygroundEditor updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders} updateFilesAndFoldersState={updateFilesAndFoldersState} />
        </section>
    );
};

export default Playground;