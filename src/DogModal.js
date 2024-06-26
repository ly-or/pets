import React, { useEffect } from 'react';
import './Modal.css';
 
 
function Modal({ dog, onClose }) {
    useEffect(() => {
        // Event listener per te mbyllur popupin kur klikojme jashte
        const handleClickOutside = (event) => {
            if (!event.target.closest('.modal-content')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Funksion per te hequr event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={dog.image}/>
                <h2>{dog.name}</h2>
                <p>Breed Group: {dog.breed_group}</p>
                <p>Size: {dog.size}</p>
                <p>Lifespan: {dog.lifespan}</p>
                <p>Origin: {dog.origin}</p>
                <p>Temperament: {dog.temperament}</p>
                <p>Colors: {dog.colors}</p>
                <p>Description: {dog.description}</p>
                <p>Lifespan: {dog.lifespan}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
}
export default Modal;