import React, { useEffect, useState } from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import PlaygroundEditor from './PlaygroundEditor';
import axios from 'axios';


const Playground = () => {
    const [filesAndFolders, setFilesAndFolders] = useState([]);
    const [selectedFile, setSelectedFile] = useState({customId:null, parentId: null});
    const [selectedFileData, setSelectedFileData] = useState([]);
    const [isDeleted, setIsDeleted] = useState(true);
    
    const signedInEmail = localStorage.getItem('signedInEmail');


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:5000/allFilesAndFolders/${signedInEmail}`);
            setFilesAndFolders(response.data.reverse());
          } catch (error) {
            console.error('Error fetching documents:', error);
          }
        };

        fetchData();
      }, [filesAndFolders, signedInEmail]);
      
      
      const updateSelectedFile = (noteId, noteParentId) => {
        setSelectedFile({ customId: noteId, parentId: noteParentId });
      };

      
      useEffect(() => {
          const fetchSelectedFileData = async () => {
            if(selectedFile.customId !== null && selectedFile.parentId !== null) {
                try {
                  const response = await axios.get(`http://localhost:5000/note/${selectedFile.customId}/${selectedFile.parentId}`);
                  setSelectedFileData(response.data);
                } catch (error) {
                  console.error('Error fetching documents:', error);
                }
            }
          };
        fetchSelectedFileData();
      }, [selectedFile]);
      
      
    const updateFilesAndFoldersState = (newState) => {
        setFilesAndFolders(newState);
      };

    return (
        <section className='flex flex-col md:grid md:grid-cols-6 h-screen'>
            <PlaygroundAside updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders}  />
            <PlaygroundEditor selectedFileData={selectedFileData} />
        </section>
    );
};

export default Playground;