import React, { useRef, useState } from 'react';
import folderIcon from '../../assets/images/Icon-images/folder.png';
import fileIcon from '../../assets/images/Icon-images/document.png';
import './Playground.css';
import checkedIcon from '../../assets/images/Icon-images/checked.png';
import deleteIcon from '../../assets/images/Icon-images/delete.png';
import cancelIcon from '../../assets/images/Icon-images/cancel.png';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlaygroundAside = ({filesAndFolders, updateSelectedFile}) => {

    const uniqueId = uuidv4();
    const inputRef = useRef(null);


    const [isCreateNoteClicked, setIsCreateNoteClicked] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const [fileTypeName, setFileTypeName] = useState("");
    const [selectedFolderId, setSelectedFolderId] = useState(null);
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const [alertText, setAlertText] = useState('');

    const userEmail = localStorage.getItem('signedInEmail');


    const handleCreateNotes = (name, folderId) => {
        switch (name) {
            case "createFolderButton":
                setPlaceholder("Enter Folder Name");
                setFileTypeName("folder");
                break;
            case "createNoteButton":
                setPlaceholder("Enter Note Name");
                setFileTypeName("singleNote");
                break;
            case "createNoteInsideFolder":
                setPlaceholder("Enter Note Name");
                setSelectedFolderId(folderId);
                setFileTypeName("noteInsideFolder");
                break;
            default:
                break;
        }
       
        setIsCreateNoteClicked(true);
    }


    const handleChecked = () => {
        const inputValue = inputRef.current.value.trim();
        
        if(inputValue === '') {
            setIsFieldEmpty(true);
        }
        else{
            if(fileTypeName === "folder") {
                const newFolder = {
                    email: userEmail,
                    fileType: fileTypeName,
                    isfolder: true,
                    isSingleNote: false,
                    isFileInsideFolder: false,
                    customId: uniqueId,
                    title: inputValue,
                    notes: []
                }
              
                axios.post('http://localhost:5000/createFilesAndFolders', newFolder)
                                .then(response => {
                                    setAlertText('Folder already exists');
                                    setTimeout(() => {
                                        setAlertText('');
                                    }, 1200);
                                    })
                                .catch(error => {
                                    console.error('Error:', error);
                                    
                                });
            }

            else if(fileTypeName === "singleNote") {
                    const newSingleNote = {
                    email: userEmail,

                    fileType: fileTypeName,
                        isfolder: false,
                        isSingleNote: true,
                        isFileInsideFolder: false,
                        customId: uniqueId,
                        title: inputValue,
                        content: ''
                    }
                    
                axios.post('http://localhost:5000/createFilesAndFolders', newSingleNote)
                            .then(response => {
                                setAlertText('File already exists');
                                setTimeout(() => {
                                    setAlertText('');
                                }, 2000);
                                
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                
                            });                 
            }
            
            else if(fileTypeName === "noteInsideFolder") {
                    const newNoteInsideFolder = {
                    email: userEmail,
                    fileType: fileTypeName,
                        isfolder: false,
                        isSingleNote: false,
                        isFileInsideFolder: true,
                        belongsToFolderId: selectedFolderId,
                        customId: uniqueId,
                        title: inputValue,
                        content: ''
                    }

                axios.post('http://localhost:5000/createFilesAndFolders', newNoteInsideFolder)
                            .then(response => {
                                setAlertText('Note already exists');
                                setTimeout(() => {
                                    setAlertText('');
                                }, 2000);
                            })
                            .catch(error => {
                                console.error('Error:', error);
                            });
                            
                }
                setIsFieldEmpty(false);
                setIsCreateNoteClicked(false);
        }
    }


    const handleCanceled = () => {
        setIsCreateNoteClicked(false);
        setIsFieldEmpty(false);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleChecked();
        }
    }

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength) + '...';
        }
    };


    const deleteFolder = (customId) => {
        axios.delete(`http://localhost:5000/deleteFolder/${customId}`)
        .then((response) => {
            setAlertText('Deleted Successfully');
            setTimeout(() => {
                setAlertText('');
            }, 2000);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    return (
        <aside className='bg-black aside-section h-60 p-2 md:col-span-2 md:h-screen lg:col-span-1'>
                <div className='p-1 text-blue-400 flex flex-row justify-around sulphur-15 border-white'>
                    <Link className='cursor-pointer hover:text-blue-300' to={'/instructions'}>Instructions</Link>
                    <p className='text-white'>|</p>
                    <p className='cursor-pointer hover:text-blue-300'>Keywords</p>
                </div>

                <div className='flex flex-col'>
                    <div className='flex flex-row justify-around border-white poiret-20 items-center'>
                        <p>Create Note:</p>
                        <div className='flex flex-row justify-center items-center gap-4'>
                            <img name="createFolderButton" className='cursor-pointer w-5 h-5 hover:bg-gray-800 rounded' alt='' src={folderIcon} onClick={() => handleCreateNotes("createFolderButton")} />
                            <img name="createNoteButton" className='cursor-pointer w-5 h-5 hover:bg-gray-800 rounded' alt='' src={fileIcon} onClick={() => handleCreateNotes("createNoteButton")} />
                        </div>
                    </div>
                    <p className='text-red-300 text-center sulphur-15'>{alertText}</p>
                </div>

                <div>
                    
                    {isCreateNoteClicked &&  
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-around poiret-20 items-center playgroundAside-form p-1'>
                            <input onKeyDown={handleKeyPress} className='w-9/12' type='text' ref={inputRef} placeholder={placeholder} />
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <img onClick={handleChecked} className='cursor-pointer w-5 h-5' alt='' src={checkedIcon} />
                                <img onClick={handleCanceled} className='cursor-pointer w-5 h-5' alt='' src={cancelIcon} />
                            </div>
                        </div>
                       {
                        isFieldEmpty &&  <p className='text-center text-red-300 sulphur-15'>Field must be filled</p>
                       }
                    </div>
                     }


                    
                    <div>

                        {
                            filesAndFolders && filesAndFolders.map(file => {
                                return <div key={file.customId}>
                                            {
                                                file.fileType === 'folder' ? 
                                                <>
                                                    <div className='flex flex-col cursor-pointer'>
                                                        <div className='flex justify-between items-center p-1 folder'>
                                                            <div className='flex items-center'>
                                                                <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
                                                                <p className='ml-1 sulphur-20'>{truncateText(file.title, 13)}</p>
                                                            </div>
                                                            <div className='flex flex-row gap-2'>
                                                                <img name="createNoteButton" className='cursor-pointer w-4 h-4 ml-auto hover:bg-gray-700 rounded' alt='' src={fileIcon} onClick={() => handleCreateNotes("createNoteInsideFolder", file.customId)} />
                                                                <img src={deleteIcon} onClick={() => deleteFolder(file.customId)} className='cursor-pointer w-4 h-4 ml-auto hover:bg-gray-700 rounded' alt='' />
                                                            </div>
                                                        </div>

                                                    {
                                                        file.notes && file.notes.map(note => {
                                                            return <div key={note.customId} className='hover:bg-gray-800 flex flex-col items-center cursor-pointer overflow-hidden'>
                                                            <div onClick={() => updateSelectedFile(note.customId, note.belongsToFolderId)} className='flex w-full p-2 items-center'>
                                                                <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                                                <p className='ml-1 sulphur-15'>{truncateText(note.title, 26)}</p>
                                                            </div>
                                                        </div>
                                                        })
                                                    }
                                                    </div>
                                                </>
                                            :
                                                <> 
                                                    <div key={file.customId} className='flex flex-col cursor-pointer'>
                                                        <div onClick={() => updateSelectedFile(file.customId, file._id)} className='flex items-center justify-between p-1 folder hover:bg-gray-800'>
                                                            <div className='flex items-center'>
                                                                <img className='w-5 h-5 ml-2' alt='' src={fileIcon} />
                                                                <p className='ml-1 sulphur-20'>{truncateText(file.title, 13)}</p>
                                                            </div>
                                                            <div>
                                                                <img src={deleteIcon} onClick={() => deleteFolder(file.customId)} className='cursor-pointer w-4 h-4 ml-auto hover:bg-gray-700 rounded' alt='' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            
                                        </div>
                            }) 
                        }
                    </div>
                </div>
            </aside>
    );
};

export default PlaygroundAside;
