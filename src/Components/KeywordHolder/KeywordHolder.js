import React from 'react';

const KeywordHolder = ({start, end, meaning}) => {
    return (
        <p className='sulphur-15'>* <span className='bg-gray-700'>{start}</span> {end !== '' ? 'and' : ''}  <span className='bg-gray-700'>{end}</span> - {meaning}</p>
    );
};

export default KeywordHolder;