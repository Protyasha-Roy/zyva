import React, { useEffect, useRef, useState } from 'react';
import signOutIcon from '../../assets/images/Icon-images/sign-out.png';
import editIcon from '../../assets/images/Icon-images/edit.png';
import saveIcon from '../../assets/images/Icon-images/diskette.png';
import deleteIcon from '../../assets/images/Icon-images/delete.png';
import playButton from '../../assets/images/Icon-images/play-button.png';
import pauaseButton from '../../assets/images/Icon-images/pause-button.png';
import './keywordsStyles.css';
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const PlaygroundEditor = ({selectedFileData, updateSetShowEditor, showEditor}) => {
    const { transcript, browserSupportsSpeechRecognition, isMicrophoneAvailable, resetTranscript} = useSpeechRecognition({clearTranscriptOnListen: false});
    const navigate = useNavigate();
    const editorRef = useRef();
    
    const [isPlayed, setIsplayed] = useState(false);
    const [modifiedInnerHTML, setModifiedInnerHTML] = useState(''); 
    const [isEditable, setIsEditable] = useState(false);
    const [isContentEdited, setIsContentEdited] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    

    
  //Speech recognition functoins
    const startListening = () => {
      SpeechRecognition.startListening({ continuous: true });
      setIsplayed(true);
    }
    
    useEffect(() => {
      const getNewLineIndices = () => {
        const indices = [];
        let index = transcript.indexOf('new line');
        while (index !== -1) {
          indices.push(index);
          index = transcript.indexOf('new line', index + 1);
        }
        return indices;
      };

    
      const capitalizeFirstLetterAfterNewLine = (input) => {
        let result = input;
    
        const newLineIndices = getNewLineIndices();
        newLineIndices.forEach((newLineIndex) => {
          const indexOfFirstLetter = newLineIndex + 'new line'.length + 1;
    
          if (indexOfFirstLetter < result.length) {
            const firstLetterAfterNewLine = result.charAt(indexOfFirstLetter).toUpperCase();
            result =
              result.substring(0, indexOfFirstLetter) +
              firstLetterAfterNewLine +
              result.substring(indexOfFirstLetter + 1);
            }
          });
    
        return result;
      };

    
      const replaceWords = (input, replacementPairs) => {
        let result = input;
        
    
        replacementPairs.forEach(([originalWord, replacement]) => {
          result = result.replace(new RegExp(originalWord, 'gi'), replacement);
        });
        
        return result;
      };
      
      if (transcript !== '') {
        const replacementPairs = [
          ['period', '.'],
          ['new line', ''],
          ['comma', ','],
          ['question mark', '?'],
          ['exclamatory', '!'],
          ['single quote', "'"],
          ['double quote', '"'],
          ['hyphen', '-'],
          ['colon', ':'],
          ['semicolon', ';'],
          ['first brace', '('],
          ['first brace right', ')'],
          ['second brace', '{'],
          ['second brace right', '}'],
          ['third brace', '['],
          ['third brace right', ']'],
          ['hash', '#'],
          ['dollar sign', '$'],
          ['percentage sign', '%'],
          ['space sign', ' '],
          ['plus sign', '+'],
          ['minus sign', '-'],
          ['asterisk', '*'],
          ['slash', '/'],
          ['next line', '<br />'],
          [`heading start`, `<h1 class='heading'>`],
          ['heading close', '</h1>'],
          ['topic start', "<h3 class='topic'>"],
          ['topic close', '</h3>'],
          ['note start', '<p>'],
          ['note close', '</p>'],
          ['list start', '<li>'],
          ['list close', '</li>'],
          ['coding start', '<code style="background-color: black">'],
          ['coding close', '</code>'],
          ['underline start', '<u>'],
          ['underline close', '</u>'],
          ['bold start', '<b>'],
          ['bold close', '</b>'],
          ['italic start', '<i>'],
          ['italic close', '</i>'],
          ['horizontal line', '<hr />'],
        ];
    
        const transcriptWithCapitalization = capitalizeFirstLetterAfterNewLine(transcript);
        const newlyModifiedTranscript = replaceWords(transcriptWithCapitalization, replacementPairs);
    
        setModifiedInnerHTML(newlyModifiedTranscript);
      }
    }, [transcript]);


    useEffect(() => {
      setModifiedInnerHTML('');
      resetTranscript()
    }, [selectedFileData, resetTranscript])

    useEffect(() => {
      if(selectedFileData.length === undefined) {
        const contentToUpdate = selectedFileData.content + modifiedInnerHTML;
       if( editorRef.current !== null){
        editorRef.current.innerHTML = contentToUpdate;
       }
      }
    }, [selectedFileData, modifiedInnerHTML])
    

    useEffect(() => {
      if(modifiedInnerHTML.includes('reset')) {
        resetTranscript();
      } 
    }, [modifiedInnerHTML, resetTranscript])
  

    const stopListening = () => {
        SpeechRecognition.stopListening();
        setIsplayed(false);
    } 
  
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    if(!isMicrophoneAvailable) {
      return null;
    }

    const handleSaveContent = () => {
      if(selectedFileData.length !== 0) {
        const contentToUpdate = isContentEdited ? editorRef.current.innerHTML : selectedFileData.content + ' ' +  modifiedInnerHTML;
        if(selectedFileData.isSingleNote) {
         
            axios.put(`https://zyva-server.onrender.com/updateContent/${selectedFileData._id}/${selectedFileData.customId}/${selectedFileData.isSingleNote}`, {contentToUpdate})
            .then((response) => {
              console.log("saved");
            })
            .catch(function (error) {
              console.log(error);
            });
          
         
        }
        else if(selectedFileData.isFileInsideFolder) {
         
            axios.put(`https://zyva-server.onrender.com/updateContent/${selectedFileData.belongsToFolderId}/${selectedFileData.customId}/${selectedFileData.isSingleNote}`, {contentToUpdate})
            .then((response) => {
            })
            .catch(function (error) {
              console.log(error);
            });
          
          
        }
        setIsEditable(false);
        setIsContentEdited(false);
        setAlertMessage('saved');
        setTimeout(() => {
          setAlertMessage('');
        }, 1200);
        }
      }

      const handleEdit = () => {
        setIsEditable(!isEditable);

        if(isEditable === false) {
          setAlertMessage('Editing Activated');
          setTimeout(() => {
            setAlertMessage('');
          }, 1200);
        }
        else {
          setAlertMessage('Editing Deactivated');
          setTimeout(() => {
            setAlertMessage('');
          }, 1200);
        }
      }
    

      const deleteFile = () => {
        if(selectedFileData.isSingleNote) {
          axios.delete(`https://zyva-server.onrender.com/delete/${selectedFileData._id}/${selectedFileData.customId}/${selectedFileData.isSingleNote}`)
          .then((response) => {
            if(response.status === 200) {
              updateSetShowEditor(false);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        else if(selectedFileData.isFileInsideFolder) {
          axios.delete(`https://zyva-server.onrender.com/delete/${selectedFileData.belongsToFolderId}/${selectedFileData.customId}/${selectedFileData.isSingleNote}`)
          .then((response) => {
            if(response.status === 200) {
              updateSetShowEditor(false);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }


      const handleSignOut = () => {
        navigate('/');
        localStorage.setItem('isUserSignedin', false);
        localStorage.removeItem('signedInEmail');
      }

      const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.substring(0, maxLength) + '..';
        }
    };

  return (
    <section style={{ position: 'relative'}} className='flex flex-col items-center h-fit md:col-span-4 lg:col-span-5 m-2'>
      <div className='flex justify-between w-11/12 items-center'>
        <Link to='/' className='sulphur-30 cursor'>zyva</Link>
        <img onClick={handleSignOut} className='w-5 h-5 cursor-pointer hover:bg-green-800' src={signOutIcon} alt="" />
      </div>

      {
        showEditor && selectedFileData.title ? 
      <div className='rounded playground p-3 mt-2 h-96'>
        <div className='flex justify-between items-center'>
          <p className='sulphur-15 file-title'>{truncateText(selectedFileData.title, 20)}</p>
          <p className='text-center text-green-400 sulphur-15'>{alertMessage}</p>
          <div className='flex gap-2'>
          <img onClick={handleSaveContent} className='hover:border rounded hover:bg-black w-5 h-5 cursor-pointer' src={saveIcon} alt='' />
            <img onClick={handleEdit} className='hover:border rounded hover:bg-black cursor-pointer w-5 h-5' src={editIcon} alt="" />
            <img onClick={deleteFile} className='hover:border rounded hover:bg-black cursor-pointer w-5 h-5' src={deleteIcon} alt="" />
            {/* <img className='cursor-pointer w-5 h-5' src={downloadPdfIcon} alt="" /> */}
          </div>
        </div>

        <div
        onInputCapture={() => setIsContentEdited(true)}
        contentEditable={isEditable}
      ref={editorRef}
         className='speech-container mt-2 rounded p-3 sulphur h-4/6'>

        </div>

        <div className='p-2 flex flex-row justify-around items-center w-80 m-auto'>
            {isPlayed ? <img className='cursor-pointer' onClick={stopListening} src={pauaseButton} alt='' /> : <img className='cursor-pointer' onClick={startListening} src={playButton} alt='' />}
        </div>
      </div>
      :
      <p className='sulphur-20 mt-40 text-blue-300'>Select a file and start taking notes</p>
      }

    </section>
  );
};

export default PlaygroundEditor;