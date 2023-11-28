// import React, { useEffect, useRef, useState } from 'react';
// import folderIcon from '../../assets/images/Icon-images/folder.png';
// import fileIcon from '../../assets/images/Icon-images/document.png';
// import './Playground.css';
// import checkedIcon from '../../assets/images/Icon-images/checked.png';
// import cancelIcon from '../../assets/images/Icon-images/cancel.png';
// import { click } from '@testing-library/user-event/dist/click';


// const PlaygroundAside = () => {
//     const inputRef = useRef(null);

    
//     const folders = [{id: "2345tye", title: "Nightmares", notes: [{id:"3425ertghdf",title: "one day"}, {id:"34wrtg",title: "two day"}]},{id: "43253tergf", title: "Daytimes", notes: [{id:"gsflgk",title: "third day"}, {id:"fslkjjp23",title: "fourth day"}]}];
//     const notes = [{id:"3425ertghdf",title: "fifth day"}, {id:"34wrtg",title: "sixth day"}];

//     const [foldersArray, setFoldersArray] = useState(folders);
//     const [notesArray, setNotesArray] = useState(notes);
//     const [createFileClicked, setCreateFileClicked] = useState(false);
//     const [buttonClicked, setButtonClicked] = useState('');
//     const [selectedFolder, setSelectedFolder] = useState([]);
//     const [notesInsideFolder, setNotesInsideFolder] = useState([]);


//     const handleCreateFolder = (e) => {
//         setButtonClicked("Enter Folder Name");
//         setCreateFileClicked(true);
//     }

//     const handleCreateNote = (e) => {
//         setButtonClicked("Enter Note Name");
//         setCreateFileClicked(true);
//     }

//     const handleChecked = () => {
//         const inputValue = inputRef.current.value.trim();
//         if(inputValue === '') {
//             alert("Ënter a name first")
//         }
//         else{
//             if(buttonClicked === "Enter Folder Name") {
//                 const newFolders = [...foldersArray, {
//                     id: inputValue,
//                     title: inputValue,
//                     notes: []
//                 }]
//                 setFoldersArray(newFolders);
//             }
//             else if(buttonClicked === "Enter Note Name") {
//                 const newNotes = [...notesArray, {
//                     id: inputValue,
//                     title: inputValue,
//                 }]
//                 setNotesArray(newNotes);
//             }
//             setCreateFileClicked(false);
//         }
//         console.log(folders);
//     }
    
//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             const inputValue = inputRef.current.value.trim();
//         if(inputValue === '') {
//             alert("Ënter a name first")
//         }
//         else{
//             if(buttonClicked === "Enter Folder Name") {
//                 const newFolders = [...foldersArray, {
//                     id: inputValue,
//                     title: inputValue,
//                     notes: []
//                 }]
//                 setFoldersArray(newFolders);
//             }
//             else if(buttonClicked === "Enter Note Name") {
//                 const newNotes = [...notesArray, {
//                     id: inputValue,
//                     title: inputValue,
//                 }]
//                 setNotesArray(newNotes);
//             }
//             setCreateFileClicked(false);
//         }
//         }
//     }

//     const handleCanceled = () => {
//         setCreateFileClicked(false);
//     }

//     const handleSelectedFolder = (folder) => {
//         const folderId = folder.id;
//         const clickedFolder = folders.filter((folder) => folderId === folder.id);
//         setSelectedFolder(clickedFolder[0]);
//         console.log(selectedFolder);
//     }

//     return (
//         <aside className='col-span-1 bg-black overflow-hidden'>
//                 <div className='p-1 text-blue-400 flex flex-row justify-around sulphur-15 border-white'>
//                     <p>Instructions</p>
//                     <p className='text-white'>|</p>
//                     <p>Keywords</p>
//                 </div>

//                 <div className='flex flex-row justify-around border-white poiret-20 items-center'>
//                     <p>Create Note:</p>
//                     <div className='flex flex-row justify-center items-center gap-4'>
//                         <img name="createFolderButton" className='cursor-pointer w-5 h-5' onClick={handleCreateFolder} alt='' src={folderIcon} />
//                         <img name="createNoteButton" className='cursor-pointer w-5 h-5' onClick={handleCreateNote} alt='' src={fileIcon} />
                       
//                     </div>

//                 </div>

//                 <div>
//                     {createFileClicked && 
//                         <div className='flex flex-row justify-around poiret-20 items-center playgroundAside-form p-1'>
//                             <input onKeyDown={handleKeyPress} className='w-9/12' type='text' ref={inputRef} placeholder={buttonClicked} />
//                             <div className='flex flex-row justify-center items-center gap-2'>
//                                 <img onClick={handleChecked} className='cursor-pointer w-5 h-5' alt='' src={checkedIcon} />
//                                 <img className='cursor-pointer w-5 h-5' onClick={handleCanceled} alt='' src={cancelIcon} />
//                             </div>
//                         </div> 
//                     }

                    

//                     {
//                         foldersArray.map((folder) => {
//                             return <div key={folder.id}>
//                                 <div className='flex flex-col cursor-pointer border-bottom'>
//                                     <div className='flex items-center p-1 folder' onClick={() => handleSelectedFolder(folder)}>
//                                         <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
//                                         <p className='ml-1 sulphur-20'>{folder.title}</p>
//                                     </div>

//                                     {
//                                         notesInsideFolder.map((notes) => {
//                                             return <div key={notes.id} className='flex flex-col items-center cursor-pointer border-bottom'>
//                                                 <div className='flex w-full p-2 items-center'>
//                                                     <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
//                                                     <p className='ml-1 sulphur-15'>{notes.title}</p>
//                                                 </div>
//                                             </div>
//                                         })
//                                     }

//                                 </div>
//                             </div>
//                         })
//                     }


//                     { notesArray.map((notes) => {
//                             return <div key={notes.id} className='flex flex-col cursor-pointer border-bottom'>
//                                         <div className='flex items-center p-1 folder'>
//                                             <img className='w-5 h-5 ml-2' alt='' src={fileIcon} />
//                                             <p className='ml-1 sulphur-20'>{notes.title}</p>
//                                         </div>
//                                     </div>
//                         })
//                     }

//                 </div>
//             </aside>
//     );
// };

// export default PlaygroundAside;



// import React, { useRef, useState } from 'react';
// import folderIcon from '../../assets/images/Icon-images/folder.png';
// import fileIcon from '../../assets/images/Icon-images/document.png';
// import './Playground.css';
// import checkedIcon from '../../assets/images/Icon-images/checked.png';
// import cancelIcon from '../../assets/images/Icon-images/cancel.png';

// const PlaygroundAside = () => {
//     const inputRef = useRef(null);

//     const folders = [
//         { id: "2345tye", title: "Nightmares", notes: [{ id: "3425ertghdf", title: "one day" }, { id: "34wrtg", title: "two day" }] },
//         { id: "43253tergf", title: "Daytimes", notes: [{ id: "gsflgk", title: "third day" }, { id: "fslkjjp23", title: "fourth day" }] }
//     ];
//     const notes = [{ id: "3425ertghdf", title: "fifth day" }, { id: "34wrtg", title: "sixth day" }];

//     const [foldersArray, setFoldersArray] = useState(folders);
//     const [notesArray, setNotesArray] = useState(notes);
//     const [createFileClicked, setCreateFileClicked] = useState(false);
//     const [buttonClicked, setButtonClicked] = useState('');
//     const [creatingNoteForFolder, setCreatingNoteForFolder] = useState(null);
//     const [selectedFolder, setSelectedFolder] = useState(null);

//     const handleCreateFolder = () => {
//         setButtonClicked("Enter Folder Name");
//         setCreateFileClicked(true);
//     }

//     const handleCreateNote = () => {
//         setButtonClicked("Enter Note Name");
//         setCreateFileClicked(true);
//     }

//     const handleCreateNoteForFolder = (folder) => {
//         setButtonClicked("Enter Note Name");
//         setCreatingNoteForFolder(folder);
//         setCreateFileClicked(true);
//     }

//     const handleChecked = () => {
//         const inputValue = inputRef.current.value.trim();
//         if (inputValue === '') {
//             alert("Enter a name first");
//         } else {
//             const newItem = {
//                 id: inputValue,
//                 title: inputValue,
//                 notes: [],
//             };

//             if (buttonClicked === "Enter Folder Name") {
//                 setFoldersArray([...foldersArray, newItem]);
//             } else if (buttonClicked === "Enter Note Name") {
//                 if (creatingNoteForFolder) {
//                     const updatedFolders = foldersArray.map(folder =>
//                         folder.id === creatingNoteForFolder.id
//                             ? { ...folder, notes: [...folder.notes, newItem] }
//                             : folder
//                     );
//                     setFoldersArray(updatedFolders);
//                     setCreatingNoteForFolder(null);
//                 } else {
//                     setNotesArray([...notesArray, newItem]);
//                 }
//             }

//             setCreateFileClicked(false);
//         }
//     }


//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             handleChecked();
//         }
//     }

//     const handleCanceled = () => {
//         setCreateFileClicked(false);
//         setCreatingNoteForFolder(null);
//     }

//     const handleSelectedFolder = (folder) => {
//         setSelectedFolder(folder);
//     }

//     return (
//         <aside className='col-span-1 bg-black overflow-hidden'>
//             <div className='p-1 text-blue-400 flex flex-row justify-around sulphur-15 border-white'>
//                 <p>Instructions</p>
//                 <p className='text-white'>|</p>
//                 <p>Keywords</p>
//             </div>

//             <div className='flex flex-row justify-around border-white poiret-20 items-center'>
//                 <p>Create Note:</p>
//                 <div className='flex flex-row justify-center items-center gap-4'>
//                     <img name="createFolderButton" className='cursor-pointer w-5 h-5' onClick={handleCreateFolder} alt='' src={folderIcon} />
//                     <img name="createNoteButton" className='cursor-pointer w-5 h-5' onClick={handleCreateNote} alt='' src={fileIcon} />
//                 </div>
//             </div>

//             <div>
//                 {createFileClicked &&
//                     <div className='flex flex-row justify-around poiret-20 items-center playgroundAside-form p-1'>
//                         <input onKeyDown={handleKeyPress} className='w-9/12' type='text' ref={inputRef} placeholder={buttonClicked} />
//                         <div className='flex flex-row justify-center items-center gap-2'>
//                             <img onClick={handleChecked} className='cursor-pointer w-5 h-5' alt='' src={checkedIcon} />
//                             <img className='cursor-pointer w-5 h-5' onClick={handleCanceled} alt='' src={cancelIcon} />
//                         </div>
//                     </div>
//                 }

//                 {foldersArray.map((folder) => (
//                     <div key={folder.id} className='flex flex-col cursor-pointer border-bottom'>
//                         <div className='flex items-center p-1 folder' onClick={() => handleSelectedFolder(folder)}>
//                             <img className='w-5 h-5 ml-2' alt='' src={folderIcon} />
//                             <p className='ml-1 sulphur-20'>{folder.title}</p>
//                             <img
//                                 className='cursor-pointer w-5 h-5 ml-auto'
//                                 alt=''
//                                 src={fileIcon}
//                                 onClick={() => handleCreateNoteForFolder(folder)}
//                             />
//                         </div>

//                         {selectedFolder && selectedFolder.id === folder.id && (
//                             selectedFolder.notes.map((note) => (
//                                 <div key={note.id} className='flex flex-col items-center cursor-pointer border-bottom'>
//                                     <div className='flex w-full p-2 items-center'>
//                                         <img className='w-5 h-5 ml-4' alt='' src={fileIcon} />
//                                         <p className='ml-1 sulphur-15'>{note.title}</p>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 ))}

//                 {notesArray.map((note) => (
//                     <div key={note.id} className='flex flex-col cursor-pointer border-bottom'>
//                         <div className='flex items-center p-1 folder'>
//                             <img className='w-5 h-5 ml-2' alt='' src={fileIcon} />
//                             <p className='ml-1 sulphur-20'>{note.title}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </aside>
//     );
// };

// export default PlaygroundAside;




import React, { useEffect, useRef, useState } from 'react';
import folderIcon from '../../assets/images/Icon-images/folder.png';
import fileIcon from '../../assets/images/Icon-images/document.png';
import './Playground.css';
import checkedIcon from '../../assets/images/Icon-images/checked.png';
import cancelIcon from '../../assets/images/Icon-images/cancel.png';


const PlaygroundAside = () => {
    const inputRef = useRef(null);

    const [filesAndFolders, setFilesAndFolders] = useState({
        id: "",
        folders: [],
        singleNotes: []
    });
    const [isCreateNoteClicked, setIsCreateNoteClicked] = useState(false);
    const [placeholder, setPlaceholder] = useState("");



    const handleCreateNotes = (name) => {
        if(name === "createFolderButton") {
            setPlaceholder("Enter Folder Name");
        }
        else{
            setPlaceholder("Enter Note Name");

        }
        setIsCreateNoteClicked(true);
    }

    const handleChecked = () => {
        const inputValue = inputRef.current.value.trim();
        
        if(inputValue === '') {
            alert("enter a name first");
        }
        else{
            if(placeholder === "Enter Folder Name") {
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
                else {
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
            }
    }

    const handleCanceled = () => {
        setIsCreateNoteClicked(false);
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
                        <input className='w-9/12' type='text' ref={inputRef} placeholder={placeholder} />
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
                                                    <img name="createNoteButton" className='cursor-pointer w-4 h-4 ml-auto' alt='' src={fileIcon} onClick={() => handleCreateNotes("createNoteButton")} />
                                                </div>

                                                {
                                                    folder.length > 0 && folder.map(note => {
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