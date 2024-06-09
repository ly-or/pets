import React, { useEffect } from 'react';
import './Modal.css';
 
 
function BirdModal({ bird, onClose }) {
    useEffect(() => {
        // Add event listener to close modal when clicking outside of it
        const handleClickOutside = (event) => {
            if (!event.target.closest('.modal-content')) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={bird.image}/>
                <h2>{bird.name}</h2>
                <p>Species : {bird.species}</p>
                <p>Family: {bird.family}</p>
                <p>Habitat: {bird.habitat}</p>
                <p>Place of found: {bird.place_of_found}</p>
                <p>Diet: {bird.diet}</p>
                <p>Weight: {bird.weight_kg}kg</p>
                <p>Height: {bird.height_cm}cm</p>
                <p>Description: {bird.description}</p>
            </div>
        </div>
    );
}
export default BirdModal;