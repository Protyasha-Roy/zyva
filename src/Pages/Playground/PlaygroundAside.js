import React, { useRef, useState } from 'react';
import folderIcon from '../../assets/images/Icon-images/folder.png';
import fileIcon from '../../assets/images/Icon-images/document.png';
import './Playground.css';
import checkedIcon from '../../assets/images/Icon-images/checked.png';
import cancelIcon from '../../assets/images/Icon-images/cancel.png';


const PlaygroundAside = () => {
    const inputRef = useRef(null);

    
    const folders = [{id: "2345tye", title: "Nightmares", notes: [{id:"3425ertghdf",title: "day dreaming"}, {id:"34wrtg",title: "no where"}]},{id: "43253tergf", title: "Nightmares", notes: [{id:"gsflgk",title: "day dreaming"}, {id:"fslkjjp23",title: "no where"}]}];
    const notes = [{id:"3425ertghdf",title: "day dreaming"}, {id:"34wrtg",title: "no where"}];

    const [foldersArray, setFoldersArray] = useState(folders);
    const [notesArray, setNotesArray] = useState(notes);

    const [createFileClicked, setCreateFileClicked] = useState(false);
    const [buttonClicked, setButtonClicked] = useState('');


    const handleCreateFolder = (e) => {
        setButtonClicked("Enter Folder Name");
        setCreateFileClicked(true);
    }

    const handleCreateNote = (e) => {
        setButtonClicked("Enter Note Name");
        setCreateFileClicked(true);
    }

    const handleChecked = () => {
        const inputValue = inputRef.current.value.trim();
        if(inputValue === '') {
            alert("Ënter a name first")
        }
        else{
            if(buttonClicked === "Enter Folder Name") {
                const newFolders = [...foldersArray, {
                    id: inputValue,
                    title: inputValue,
                    notes: []
                }]
                setFoldersArray(newFolders);
            }
            else if(buttonClicked === "Enter Note Name") {
                const newNotes = [...notesArray, {
                    id: inputValue,
                    title: inputValue,
                }]
                setNotesArray(newNotes);
            }
            setCreateFileClicked(false);
        }
        console.log(folders);
    }

    const handleCanceled = () => {
        setCreateFileClicked(false);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const inputValue = inputRef.current.value.trim();
        if(inputValue === '') {
            alert("Ënter a name first")
        }
        else{
            if(buttonClicked === "Enter Folder Name") {
                const newFolders = [...foldersArray, {
                    id: inputValue,
                    title: inputValue,
                    notes: []
                }]
                setFoldersArray(newFolders);
            }
            else if(buttonClicked === "Enter Note Name") {
                const newNotes = [...notesArray, {
                    id: inputValue,
                    title: inputValue,
                }]
                setNotesArray(newNotes);
            }
            setCreateFileClicked(false);
        }
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
                        <img name="createFolderButton" className='cursor-pointer w-5 h-5' onClick={handleCreateFolder} alt='' src={folderIcon} />
                        <img name="createNoteButton" className='cursor-pointer w-5 h-5' onClick={handleCreateNote} alt='' src={fileIcon} />
                       
                    </div>

                </div>

                <div>
                    {createFileClicked && 
                        <div className='flex flex-row justify-around poiret-20 items-center playgroundAside-form p-1'>
                            <input onKeyDown={handleKeyPress} className='w-9/12' type='text' ref={inputRef} placeholder={buttonClicked} />
                            <div className='flex flex-row justify-center items-center gap-2'>
                                <img onClick={handleChecked} className='cursor-pointer w-5 h-5' alt='' src={checkedIcon} />
                                <img className='cursor-pointer w-5 h-5' onClick={handleCanceled} alt='' src={cancelIcon} />
                            </div>
                        </div> 
                    }

                    {
                        foldersArray.map((folder) => {
                            return <div key={folder.id}>
                                <div className='flex flex-col cursor-pointer border-bottom'>
                                    <div className='flex items-center p-1 folder'>
                                        <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
                                        <p className='ml-1 sulphur-20'>{folder.title}</p>
                                    </div>

                                    {
                                        folder.notes.map((notes) => {
                                            return <div key={notes.id} className='flex flex-col items-center cursor-pointer border-bottom'>
                                                <div className='flex w-full p-2 items-center'>
                                                    <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
                                                    <p className='ml-1 sulphur-15'>{notes.title}</p>
                                                </div>
                                            </div>
                                        })
                                    }

                                </div>
                            </div>
                        })
                    }


                    { notesArray.map((notes) => {
                            return <div key={notes.id} className='flex flex-col cursor-pointer border-bottom'>
                                        <div className='flex items-center p-1 folder'>
                                            <img className='w-5 h-5 ml-2' alt='' src={fileIcon} />
                                            <p className='ml-1 sulphur-20'>{notes.title}</p>
                                        </div>
                                    </div>
                        })
                    }

                </div>
            </aside>
    );
};

export default PlaygroundAside;