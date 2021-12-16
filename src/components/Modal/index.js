import React from 'react';

const Modal = ({ onClose, currentPhoto }) => {
    const {name, category, description} = currentPhoto;

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img alt={category} />
          <p>
           {description}
          </p>
          <button onClick={onClose} type="button">Close this modal</button>
        </div>
      </div>
    );
  }
  
  export default Modal;