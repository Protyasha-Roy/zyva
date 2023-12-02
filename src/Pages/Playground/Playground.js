import React, { useEffect, useState } from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import PlaygroundEditor from './PlaygroundEditor';
import axios from 'axios';


const Playground = () => {
    const [filesAndFolders, setFilesAndFolders] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/allFilesAndFolders');
            setFilesAndFolders(response.data.reverse());
          } catch (error) {
            console.error('Error fetching documents:', error);
          }
        };

        const intervalId = setInterval(fetchData, 500); 
      
        return () => clearInterval(intervalId);
      }, []);
      

    const updateSelectedFile = (newState) => {
        setSelectedFile(newState);
    }

    const updateFilesAndFoldersState = (newState) => {
        setFilesAndFolders(newState);
      };
    return (
        <section className='grid grid-cols-6 h-screen'>
            <PlaygroundAside updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders}  />
            <PlaygroundEditor updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders} />
        </section>
    );
};

export default Playground;