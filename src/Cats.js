
 import './Cats.css';
 import React, { useState, useEffect } from 'react';
 import CatModal from './CatModal';

 function Cats() {
     const [catsData, setCatsData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [searchTerm, setSearchTerm] = useState('');
     const [selectedCat, setSelectedCat] = useState(null);
 
     useEffect(() => {
         const catsUrl = 'https://freetestapi.com/api/v1/cats';
 
         fetch(catsUrl)
             .then((response) => response.json())
             .then((data) => {
                 setCatsData(data);
                 setLoading(false);
             })
             .catch((error) => {
                 console.error('Error fetching cats data:', error);
                 setLoading(false);
             });
     }, []);
 
     if (loading) {
         return <div>Loading...</div>;
     }

     
    const openModal = (cat) => {
        setSelectedCat(cat);
    };

    const closeModal = () => {
        setSelectedCat(null);
    };

     const filteredCats = catsData.filter(cat =>
         cat.name.toLowerCase().includes(searchTerm.toLowerCase())
     );
     
     return (
         <div>
             <h1>CATS Data</h1>
             <input
                type="text"
                placeholder="Search cats by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
             <ul className='petslist'  id="catslist ">
                 {filteredCats.map((cat) => (
                     <li key={cat.id}  onClick={() => openModal(cat)}>
                         <img src={cat.image} alt={cat.name} />
                         <h2>{cat.name}</h2>
                         <p>{cat.origin}</p>
                     </li>
                 ))}
             </ul>
             {selectedCat && (
             <CatModal cat={selectedCat} onClose={closeModal} />
            )}
         </div>
     );
 }

 
 export default Cats;
 