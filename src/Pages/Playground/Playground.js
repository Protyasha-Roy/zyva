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
    const [loading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');

    const userId = localStorage.getItem('signedinId');
      
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

      useEffect(() => {
        setLoading(true)
        setLoadingMessage('Loading notes..');
            axios.get(`https://zyva-server.onrender.com/allFilesAndFolders/${userId}`)
            .then((response) => {
                setFilesAndFolders(response.data.reverse());
                setLoading(false);
                setLoadingMessage('');
            })
            .catch((error) => {
             console.log(error);
            })
    },[userId])
      
      const updateSelectedFileData = async () => {
        if(selectedFile.customId !== null && selectedFile.parentId !== null) {
        try {
          const response = await axios.get(`https://zyva-server.onrender.com/note/${selectedFile.customId}/${selectedFile.parentId}`);
          setSelectedFileData(response.data);
        } catch (error) {
          console.error('Error fetching documents:', error);
        }
    }
  }

  const fetchNotes = () => {
    axios.get(`https://zyva-server.onrender.com/allFilesAndFolders/${userId}`)
        .then((response) => {
            setFilesAndFolders(response.data.reverse());
        })
        .catch((error) => {
         console.log(error);
        })
}


      const updateSetShowEditor = (newState) => {
        setShowEditor(newState);
      }

    return (
        <section className='flex flex-col md:grid md:grid-cols-6 h-screen'>
            <PlaygroundAside loading={loading} setLoading={setLoading} loadingMessage={loadingMessage} setLoadingMessage={setLoadingMessage} updateSetShowEditor={updateSetShowEditor} updateSetEditor={updateSetShowEditor} updateSelectedFile={updateSelectedFile} filesAndFolders={filesAndFolders} setFilesAndFolders={setFilesAndFolders} fetchNotes={fetchNotes} />
            <PlaygroundEditor updateSelectedFileData={updateSelectedFileData} showEditor={showEditor} updateSetShowEditor={updateSetShowEditor} selectedFileData={selectedFileData} fetchNotes={fetchNotes} />
        </section>
    );
};

export default Playground;