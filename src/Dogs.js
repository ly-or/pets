// import './Dogs.css';
// import React, { useState, useEffect } from 'react';
// import Modal from './Modal';

// function Dogs() {
//     const [dogsData, setDogsData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedDog, setSelectedDog] = useState(null);

//     useEffect(() => {
//         const dogsUrl = 'https://freetestapi.com/api/v1/dogs?limit=5';

//         fetch(dogsUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 setDogsData(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching dogs data:', error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     } 
    
//     const filteredDogs = dogsData.filter(dog =>
//         dog.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     const openModal = (dog) => {
//         setSelectedDog(dog);
//     };

//     const closeModal = () => {
//         setSelectedDog(null);
//     };
 
//     return (
//         <div>
//             <h1>DOGS Data</h1>
//             <input
//                 type="text"
//                 placeholder="Search dogs by name"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <ul  id="dogslist">
//                 {filteredDogs.map((dog) => (
//                     <li key={dog.id}>
//                         <img src={dog.image} alt={dog.name} />
//                         <h2>{dog.name}</h2>
//                         <p>{dog.origin}</p>
//                     </li>
//                 ))}
//             </ul>
//             {selectedDog && (
//                 <Modal dog={selectedDog} onClose={closeModal} />
//             )}
//         </div>
//     );
// }


// export default Dogs;


// Dogs.js
import React, { useState, useEffect } from 'react';
import DogModal from './DogModal';

function Dogs() {
    const [dogsData, setDogsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDog, setSelectedDog] = useState(null);

    useEffect(() => {
        const dogsUrl = 'https://freetestapi.com/api/v1/dogs';

        fetch(dogsUrl)
            .then((response) => response.json())
            .then((data) => {
                setDogsData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching dogs data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    const openModal = (dog) => {
        setSelectedDog(dog);
    };

    const closeModal = () => {
        setSelectedDog(null);
    };

    const filteredDogs = dogsData.filter(dog =>
        dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>DOGS Data</h1>
            <input
                type="text"
                placeholder="Search dogs by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul  className='petslist' id="dogslist">
                {filteredDogs.map((dog) => (
                    <li key={dog.id} onClick={() => openModal(dog)}>
                        <img src={dog.image} alt={dog.name} />
                        <h2>{dog.name}</h2>
                        <p>{dog.origin}</p>
                    </li>
                ))}
            </ul>
            {selectedDog && (
                <DogModal dog={selectedDog} onClose={closeModal} />
            )}
        </div>
    );
}

export default Dogs;
