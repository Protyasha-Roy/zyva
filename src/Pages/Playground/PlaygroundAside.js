import React, { useRef, useState } from 'react';
import folderIcon from '../../assets/images/Icon-images/folder.png';
import fileIcon from '../../assets/images/Icon-images/document.png';
import './Playground.css';
import checkedIcon from '../../assets/images/Icon-images/checked.png';
import cancelIcon from '../../assets/images/Icon-images/cancel.png';


const PlaygroundAside = () => {
    const inputRef = useRef(null);


    const [filesAndFolders, setFilesAndFolders] = useState({
        folders: [],
        singleNotes: []
    });
    const [isCreateNoteClicked, setIsCreateNoteClicked] = useState(false);
    const [placeholder, setPlaceholder] = useState("");
    const [fileTypeName, setFileTypeName] = useState("");
    const [selectedFolderId, setSelectedFolderId] = useState(null);


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
                setSelectedFolderId(folderId)
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
            alert("enter a name first");
        }
        else{
            if(fileTypeName === "folder") {
                const newFolder = {
                    isfolder: true,
                    id: inputValue,
                    title: inputValue,
                    notes: []
                }
                setFilesAndFolders((prevFilesAndFolders) => ({
                    ...prevFilesAndFolders,
                    folders: [...prevFilesAndFolders.folders, newFolder],
                  }));
                
                  
                  setIsCreateNoteClicked(false);
                }
                else if(fileTypeName === "singleNote") {
                    const newSingleNote = {
                        isfolder: false,
                        id: inputValue,
                        title: inputValue,
                        content: ""
                    }
                    setFilesAndFolders((prevFilesAndFolders) => ({
                        ...prevFilesAndFolders,
                        singleNotes: [...prevFilesAndFolders.singleNotes, newSingleNote],
                      }));
                    
                      setIsCreateNoteClicked(false);
                }
                else if(fileTypeName === "noteInsideFolder") {
                    const newNoteInsideFolder = {
                        isfolder: false,
                        id: inputValue,
                        title: inputValue,
                        content: ""
                    }
                    const updatedFolders = filesAndFolders.folders.map(folder => {
                        if (folder.id === selectedFolderId) {
                            return {
                                ...folder,
                                notes: [...folder.notes, newNoteInsideFolder]
                            };
                        }
                        return folder;
                    });
    
                    setFilesAndFolders((prevFilesAndFolders) => ({
                        ...prevFilesAndFolders,
                        folders: updatedFolders,
                    }));
                    
                    setIsCreateNoteClicked(false);
                }
            }
    }

    const handleCanceled = () => {
        setIsCreateNoteClicked(false);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleChecked();
        }
    }


    return (
        <aside className='col-span-1 bg-black overflow-hidden'>
                <div className='p-1 text-blue-400 flex flex-row justify-around sulphur-15 border-white'>
                    <p>Instructions</p>
                    <p className='text-white'>|</p>
                    <p>Keywords</p>
                </div>

                <div className='flex flex-row justify-around border-white poiret-20 items-center'>
                    <p>Create Note:</p>
                    <div className='flex flex-row justify-center items-center gap-4'>
                        <img name="createFolderButton" className='cursor-pointer w-5 h-5' alt='' src={folderIcon} onClick={() => handleCreateNotes("createFolderButton")} />
                        <img name="createNoteButton" className='cursor-pointer w-5 h-5' alt='' src={fileIcon} onClick={() => handleCreateNotes("createNoteButton")} />
                    </div>
                </div>

                <div>
                    
                    {isCreateNoteClicked &&  
                    <div className='flex flex-row justify-around poiret-20 items-center playgroundAside-form p-1'>
                        <input onKeyDown={handleKeyPress} className='w-9/12' type='text' ref={inputRef} placeholder={placeholder} />
                        <div className='flex flex-row justify-center items-center gap-2'>
                            <img onClick={handleChecked} className='cursor-pointer w-5 h-5' alt='' src={checkedIcon} />
                            <img onClick={handleCanceled} className='cursor-pointer w-5 h-5' alt='' src={cancelIcon} />
                            </div>
                    </div> }


                    
                    <div>
                        {
                            filesAndFolders.folders.length > 0 && filesAndFolders.folders.map(folder => {
                                return <div key={folder.id}>
                                            <div className='flex flex-col cursor-pointer border-bottom'>
                                                <div className='flex items-center p-1 folder'>
                                                    <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
                                                    <p className='ml-1 sulphur-20'>{folder.title}</p>
                                                    <img name="createNoteButton" className='cursor-pointer w-4 h-4 ml-auto' alt='' src={fileIcon} onClick={() => handleCreateNotes("createNoteInsideFolder", folder.id)} />
                                                </div>

                                                {
                                                    folder.notes.length > 0 && folder.notes.map(note => {
                                                        return <div key={note.id} className='flex flex-col items-center cursor-pointer border-bottom'>
                                                        <div className='flex w-full p-2 items-center'>
                                                            <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                                            <p className='ml-1 sulphur-15'>{note.title}</p>
                                                        </div>
                                                    </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                            })
                        }

                        {
                            filesAndFolders.singleNotes.length > 0 && filesAndFolders.singleNotes.map(note => {
                                return <div key={note.id} className='flex flex-col cursor-pointer border-bottom'>
                                            <div className='flex items-center p-1 folder'>
                                                <img className='w-5 h-5 ml-2' alt='' src={fileIcon} />
                                                <p className='ml-1 sulphur-20'>{note.id}</p>
                                            </div>
                                        </div>
                            })
                        }
                                
                    </div>
                </div>
            </aside>
    );
};

export default PlaygroundAside;