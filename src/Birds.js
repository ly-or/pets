import './Birds.css';
import React, { useState, useEffect } from 'react';
import BirdModal from './BirdModal';

function Birds() {
    const [birdsData, setBirdsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');    
    const [selectedBird, setSelectedBird] = useState(null);

    useEffect(() => {
        const birdsUrl = 'https://freetestapi.com/api/v1/birds';

        fetch(birdsUrl)
            .then((response) => response.json())
            .then((data) => {
                setBirdsData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching birds data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    
    const openModal = (bird) => {
        setSelectedBird(bird);
    };

    const closeModal = () => {
        setSelectedBird(null);
    };


    const filteredBirds = birdsData.filter(bird =>
        bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <h1>BIRDS Data</h1>
            <input
                type="text"
                placeholder="Search birds by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul  className='petslist' id="birdslist">
                {filteredBirds.map((bird) => (
                    <li  key={bird.id} onClick={() => openModal(bird)}>
                        <img src={bird.image} alt={bird.name} />
                        <h2>{bird.name}</h2>
                        <p>{bird.place_of_found}</p>
                    </li>
                ))}
            </ul>
            {selectedBird && (
                <BirdModal bird={selectedBird} onClose={closeModal} />
            )}
        </div>
    );
}

export default Birds;
