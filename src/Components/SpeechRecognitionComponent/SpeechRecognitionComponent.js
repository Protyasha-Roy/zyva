import React, { useState, useEffect, useMemo } from 'react';

const SpeechRecognitionComponent = () => {
  const [transcript, setTranscript] = useState('');
  const [language, setLanguage] = useState('en-US');
  const [isRecognitionActive, setIsRecognitionActive] = useState(false);

  const recognition = useMemo(() => {
    const recognitionInstance = new window.webkitSpeechRecognition();
    recognitionInstance.lang = language;
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    return recognitionInstance;
  }, [language]);

  useEffect(() => {
    if (isRecognitionActive) {
      recognition.start();
    }

    // Cleanup function to stop recognition when the component unmounts
    return () => {
      recognition.stop();
    };
  }, [isRecognitionActive, recognition]);

  recognition.onresult = (event) => {
    const lines = [];
    for (let i = 0; i < event.results.length; i++) {
      const text = event.results[i][0].transcript;
      const lastChar = lines[lines.length - 1]?.slice(-1);
      const isFirstChar = lines.length === 0 || lastChar === '.';
      const capitalizedLine = isFirstChar
        ? capitalizeFirstLetter(text)
        : text;
      lines.push(capitalizedLine);
    }
    setTranscript(lines.join(' '));
  };

  recognition.onend = () => {
    if (transcript.trim() !== '') {
      setTranscript((prevTranscript) => prevTranscript + '. ');
    }
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const toggleRecognition = () => {
    setIsRecognitionActive((prev) => !prev);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div>
      <label>
        Select Language:
        <select className='ml-10 text-black' value={language} onChange={handleLanguageChange}>
          <option value="en-US">English (United States)</option>
          <option value="es-ES">Spanish (Spain)</option>
          {/* Add more language options as needed */}
        </select>
      </label>
      <button className='ml-10' onClick={toggleRecognition}>
        {isRecognitionActive ? 'Stop' : 'Start'} Speech Recognition
      </button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
