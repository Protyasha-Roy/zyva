import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { v4 as uuidv4 } from 'uuid';

const SpeechToHtmlConverter = () => {
  const [isListening, setIsListening] = useState(false);
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const commands = ['heading', 'paragraph', 'link'];
  const [generatedContent, setGeneratedContent] = useState([]);



  const startListening = () => {
    SpeechRecognition.startListening();
    setIsListening(true);
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  useEffect(() => {
    return () => SpeechRecognition.stopListening();
  }, []);

  useEffect(() => {
    handleSpeechResult();
  }, [transcript]);

  const handleSpeechResult = () => {
    const words = transcript.split(' ');

    words.forEach((word) => {
      if (commands.includes(word.toLowerCase())) {
        handleCommand(word.toLowerCase());
      }
    });
  };

  const handleCommand = (command) => {
    switch (command) {
      case 'heading':
        generateHeading();
        break;
      case 'paragraph':
        generateParagraph();
        break;
      case 'link':
        generateLink();
        break;
      default:
        break;
    }
  };

  const generateHeading = () => {
    const headingText = extractContent(transcript, 'heading');
    const newHeading = <h1 key={uuidv4()}>{headingText}</h1>;
    setGeneratedContent((prevContent) => [...prevContent, newHeading]);
  };

  const generateParagraph = () => {
    const paragraphText = extractContent(transcript, 'paragraph');
    const newParagraph = <p key={uuidv4()}>{paragraphText}</p>;
    setGeneratedContent((prevContent) => [...prevContent, newParagraph]);
  };

  const generateLink = () => {
    const linkText = extractContent(transcript, 'link');
    const newLink = <a key={uuidv4()} href="#">{linkText}</a>;
    setGeneratedContent((prevContent) => [...prevContent, newLink]);
  };

  const extractContent = (fullText, command) => {
    const startIndex = fullText.indexOf(command) + command.length + 1;
    return fullText.substring(startIndex).trim();
  };

  return (
    <div>
      <div>
        <strong>Generated Content:</strong>
        {generatedContent.map((element, index) => (
          <div key={index}>{element}</div>
        ))}
      </div>

      <div>
        <strong>Transcript:</strong>
        <div>{transcript}</div>
      </div>

      <div>
        <button onClick={isListening ? stopListening : startListening}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
      </div>
    </div>
  );
};

export default SpeechToHtmlConverter;
