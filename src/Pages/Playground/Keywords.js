import React from 'react';
import './keywordsStyles.css';
import KeywordHolder from '../../Components/KeywordHolder/KeywordHolder';
import cancel from '../../assets/images/Icon-images/cancel.png';

const Keywords = ({updateKeywordsToggle}) => {
    
    return (
        <div className='fixed top-0 left-0 bottom-0 right-0 z-20 text-white keywordsModal flex items-center justify-center'>
            <div className='bg-gray-900 p-2 rounded'>
                <div className='flex flex-row justify-between'>
                    <h3 className='poiret-20 text-center border-bottom'>Keywords</h3>
                    <img onClick={() => updateKeywordsToggle(false)} className='cursor-pointer hover:bg-gray-600 rounded' src={cancel} alt='' />
                </div>
                <div className='mt-3 keywordsSection h-96'>
                    <div>
                        <p className='sulphur-15 text-blue-300 text-center'>General commands</p>
                        <KeywordHolder start={'heading start'} end={'heading close'} meaning={'to create a heading'} />
                        <KeywordHolder start={'topic start'} end={'topic close'} meaning={'to create a topic name'} />
                        <KeywordHolder start={'note start'} end={'note close'} meaning={'to start writing a note'} />
                        <KeywordHolder start={'new line'} end={''} meaning={'to create a new sentence/capitalize'} />
                        <KeywordHolder start={'next line'} end={''} meaning={'to go to bottom line directly'} />
                        <KeywordHolder start={'horizontal line'} end={''} meaning={'to create a horizontal line'} />
                        <KeywordHolder start={'list start'} end={'list close'} meaning={'to create a list of things'} />
                        <KeywordHolder start={'underline start'} end={'underline close'} meaning={'to create an underlined text'} />
                        <KeywordHolder start={'bold start'} end={'bold close'} meaning={'to create a bold text'} />
                        <KeywordHolder start={'italic start'} end={'italic close'} meaning={'to create an italic text'} />
                    </div>
                    <div>
                        <p className='sulphur-15 text-blue-300 text-center'>Symbols</p>
                        <KeywordHolder start={'period'} end={''} meaning={'to create a period/full-stop'} />
                        <KeywordHolder start={'comma'} end={''} meaning={'to create comma'} />
                        <KeywordHolder start={'question mark'} end={''} meaning={'to create a question mark'} />
                        <KeywordHolder start={'exclamatory'} end={''} meaning={'to create an exclamatory sign'} />
                        <KeywordHolder start={'single quote'} end={''} meaning={'to create a single quote/apostrophe'} />
                        <KeywordHolder start={'double quote'} end={''} meaning={'to create a double quote'} />
                        <KeywordHolder start={'slash'} end={''} meaning={'to create a forward slash'} />
                        <KeywordHolder start={'hyphen'} end={''} meaning={'to create a hyphen'} />
                        <KeywordHolder start={'colon'} end={''} meaning={'to create a colon'} />
                        <KeywordHolder start={'semicolon'} end={''} meaning={'to create a semicolon'} />
                        <KeywordHolder start={'angle braces'} end={''} meaning={'to create <>'} />
                        <KeywordHolder start={'greater than sign'} end={''} meaning={'to create >'} />
                        <KeywordHolder start={'less than sign'} end={''} meaning={'to create <'} />
                        <KeywordHolder start={'first brace'} end={''} meaning={'to create ('} />
                        <KeywordHolder start={'first brace right'} end={''} meaning={'to create )'} />
                        <KeywordHolder start={'second brace'} end={''} meaning={'to create {'} />
                        <KeywordHolder start={'second brace right'} end={''} meaning={'to create }'} />
                        <KeywordHolder start={'third brace'} end={''} meaning={'to create ['} />
                        <KeywordHolder start={'third brace right'} end={''} meaning={'to create ]'} />
                        <KeywordHolder start={'hash'} end={''} meaning={'to create #'} />
                        <KeywordHolder start={'dollar sign'} end={''} meaning={'to create $'} />
                        <KeywordHolder start={'percentage sign'} end={''} meaning={'to create %'} />
                        <KeywordHolder start={'plus sign'} end={''} meaning={'to create +'} />
                        <KeywordHolder start={'minus sign'} end={''} meaning={'to create minus sign -'} />
                        <KeywordHolder start={'asterisk'} end={''} meaning={'to create *'} />
                        <KeywordHolder start={'at the rate'} end={''} meaning={'to create @'} />
                        <KeywordHolder start={'ampersand'} end={''} meaning={'to create &'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keywords;