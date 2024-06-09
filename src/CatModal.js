import React, { useEffect } from 'react';
import './Modal.css';
 
 
function CatModal({ cat, onClose }) {
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
                <img src={cat.image}/>
                <h2>{cat.name}</h2>
                <p>Origin: {cat.origin}</p>
                <p>Size: {cat.size}</p>
                <p>Temperament: {cat.temperament}</p>
                <p>Colors: {cat.colors}</p>
                <p>Description: {cat.description}</p>             
            </div>
        </div>
    );
}
export default CatModal;