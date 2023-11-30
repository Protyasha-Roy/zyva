import React from 'react';

const ContextMenu = ({ top, left, visible, onSelect }) => {
  const style = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    display: visible ? 'flex' : 'none',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '5px',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '500px',
    fontFamily: 'Poiret One'
  };

  return (
    <div style={style}>
      <div className='cursor-pointer' onClick={() => onSelect('edit')}>Edit</div>
      <div className='cursor-pointer' onClick={() => onSelect('center')}>center</div>
      <div className='cursor-pointer' onClick={() => onSelect('delete')}>Delete</div>
    </div>
  );
};

export default ContextMenu;