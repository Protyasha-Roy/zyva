import React, { useEffect, useState } from 'react';
import './Playground.css';
import PlaygroundAside from './PlaygroundAside';
import PlaygroundEditor from './PlaygroundEditor';
import axios from 'axios';


const Playground = () => {
    const [filesAndFolders, setFilesAndFolders] = useState([]);
    const [selectedFile, setSelectedFile] = useState({customId:null, parentId: null});
    const [selectedFileData, setSelectedFileData] = useState([]);
    const [showEditor, setShowEditor] = useState(false);
      
      const updateSelectedFile = (noteId, noteParentId) => {
        setSelectedFile({ customId: noteId, parentId: noteParentId });
        setShowEditor(true);
      };

      
      useEffect(() => {
          const fetchSelectedFileData = async () => {
            if(selectedFile.customId !== null && selectedFile.parentId !== null) {
                try {
                  const response = await axios.get(`https://zyva-server.onrender.com/note/${selectedFile.customId}/${selectedFile.parentId}`);
                  setSelectedFileData(response.data);
                } catch (error) {
                  console.error('Error fetching documents:', error);
                }
            }
          };
        fetchSelectedFileData();
      }, [selectedFile]);
      

      const updateSetShowEditor = (newState) => {
        setShowEditor(newState);
      }
    return (
        <section className='flex flex-col md:grid md:grid-cols-6 h-screen'>
            <PlaygroundAside updateSetShowEditor={updateSetShowEditor} updateSetEditor={updateSetShowEditor} updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders}  />
            <PlaygroundEditor showEditor={showEditor} updateSetShowEditor={updateSetShowEditor} selectedFileData={selectedFileData} />
        </section>
    );
};

export default Playground;