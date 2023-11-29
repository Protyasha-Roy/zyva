import React, { useEffect, useState } from 'react';
import profileIcon from '../../assets/images/Icon-images/account.png';
import editIcon from '../../assets/images/Icon-images/edit.png';
import deleteIcon from '../../assets/images/Icon-images/delete.png';
import downloadPdfIcon from '../../assets/images/Icon-images/download-pdf.png';
import playButton from '../../assets/images/Icon-images/play-button.png';
import pauaseButton from '../../assets/images/Icon-images/pause-button.png';
import resetButton from '../../assets/images/Icon-images/reset.png';

import { Link } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const PlaygroundEditor = () => {
    const { transcript, browserSupportsSpeechRecognition, isMicrophoneAvailable, resetTranscript } = useSpeechRecognition({clearTranscriptOnListen: false});
    
    const [modifiedTranscript, setModifiedTranscript] = useState('');

    
    const startListening = () => {
      SpeechRecognition.startListening({ continuous: true });
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
          console.log(`First letter after new line at index ${newLineIndex}:`);
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
          ['example', 'replacement'],
          ['new line', '']
        ];
    
        const transcriptWithCapitalization = capitalizeFirstLetterAfterNewLine(transcript);
        const modifiedTranscript = replaceWords(transcriptWithCapitalization, replacementPairs);
    
        console.log("Modified Transcript:", modifiedTranscript);
    
        setModifiedTranscript(modifiedTranscript);
      }
    }, [transcript]);
    
    
    


    const stopListening = () => {
        SpeechRecognition.stopListening();
    } 

    const resetModifiedTranscript = () => {
      resetTranscript();
      setModifiedTranscript('');
    }
  
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    if(!isMicrophoneAvailable) {
        return null;
    }


    
  return (
    <section className='col-span-5 flex flex-col items-center p-2'>
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

        <div className='speech-container mt-2 rounded p-3 sulphur'>
          <p>{modifiedTranscript}</p>
        </div>

        <div className='p-2 flex flex-row justify-around items-center w-80 m-auto'>
            <img className='cursor-pointer' onClick={startListening} src={playButton} alt='' />
            <img className='cursor-pointer' onClick={stopListening} src={pauaseButton} alt='' />
            <img className='cursor-pointer' onClick={resetModifiedTranscript} src={resetButton} alt='' />
        </div>
      </div>
    </section>
  );
};

export default PlaygroundEditor;
