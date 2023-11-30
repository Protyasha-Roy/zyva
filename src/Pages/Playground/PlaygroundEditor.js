import React, { useEffect, useRef, useState } from 'react';
import profileIcon from '../../assets/images/Icon-images/account.png';
import editIcon from '../../assets/images/Icon-images/edit.png';
import deleteIcon from '../../assets/images/Icon-images/delete.png';
import downloadPdfIcon from '../../assets/images/Icon-images/download-pdf.png';
import playButton from '../../assets/images/Icon-images/play-button.png';
import pauaseButton from '../../assets/images/Icon-images/pause-button.png';
import './keywordsStyles.css';

import { Link } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ContextMenu from './ContextMenu';

const PlaygroundEditor = () => {
    const { transcript, browserSupportsSpeechRecognition, isMicrophoneAvailable, resetTranscript} = useSpeechRecognition({clearTranscriptOnListen: false});
    
    const [isPlayed, setIsplayed] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const [modifiedInnerHTML, setModifiedInnerHTML] = useState(''); 
    const [modifiedInnerText, setModifiedInnerText] = useState('');


  const [contextMenu, setContextMenu] = useState({ top: 0, left: 0, visible: false });
  const editorRef = useRef();

  const handleMouseUp = (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText !== '') {
      const range = selection.getRangeAt(0).getBoundingClientRect();
      setContextMenu({
        top: range.bottom + window.scrollY,
        left: range.left + window.scrollX + range.width / 2,
        visible: true,
      });
      setSelectedText(selectedText);
    } else {
      setContextMenu({ top: 0, left: 0, visible: false });
    }
  };

  const handleContextMenuSelect = (action) => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const text = range.toString();
  
    switch (action) {
      case 'center':
        
        break;
  
      case 'font-size-small':
        document.execCommand('fontSize', false, '3'); // You can adjust the size value
        break;
  
      // Add more cases for other style actions
  
      default:
        break;
    }
  
    // Clear the selection after applying styles
    selection.removeAllRanges();
    setContextMenu({ top: 0, left: 0, visible: false });
  };
  
  
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);
    
    
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
          ['exclamatory sign', '!'],
          ['single quote', "'"],
          ['double quote', '"'],
          ['hyphen', '-'],
          ['colon', ':'],
          ['semicolon', ';'],
          ['first bracket', '('],
          ['first brace right', ')'],
          ['second bracket', '{'],
          ['second brace right', '}'],
          ['third bracket', '['],
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
          ['heading start', "<h1 class='heading'>"],
          ['heading close', '</h1>'],
          ['topic start', "<h3 class='topic'>"],
          ['topic close', '</h3>'],
          ['note start', '<p>'],
          ['note close', '</p>'],
          ['list start', '<li>'],
          ['list close', '</li>'],
          ['coding start', '<code>'],
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
      editorRef.current.innerHTML = modifiedInnerHTML;
      setModifiedInnerText(editorRef.current.innerText);
    }, [modifiedInnerHTML, modifiedInnerText])
    

    useEffect(() => {
      if(modifiedInnerText.includes('reset')) {
        editorRef.current.innerHTML = '';
        editorRef.current.innerText = '';
        resetTranscript();
      } 
    }, [modifiedInnerText, resetTranscript])
  

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

    
  return (
    <section style={{ position: 'relative'}} className='col-span-5 flex flex-col items-center p-2'>
      <div className='flex justify-between w-11/12 items-center'>
        <Link to='/' className='sulphur-30 cursor'>zyva</Link>
        <img className='w-10 h-10' src={profileIcon} alt="" />
      </div>

      <div className='rounded playground p-3 mt-2'>
        <div className='flex justify-between items-center'>
          <p className='sulphur-15 file-title'>Day Dreaming</p>
          <div className='flex gap-2'>
            <img className='w-5 h-5' src={editIcon} alt="" />
            <img className='w-5 h-5' src={deleteIcon} alt="" />
            <img className='w-5 h-5' src={downloadPdfIcon} alt="" />
          </div>
        </div>

        <div ref={editorRef}
         className='speech-container mt-2 rounded p-3 sulphur'>
        
        </div>

        <div className='p-2 flex flex-row justify-around items-center w-80 m-auto'>
            {isPlayed ? <img className='cursor-pointer' onClick={stopListening} src={pauaseButton} alt='' /> : <img className='cursor-pointer' onClick={startListening} src={playButton} alt='' />}
        </div>
      </div>
      <ContextMenu {...contextMenu} onSelect={handleContextMenuSelect} />
    </section>
  );
};

export default PlaygroundEditor;