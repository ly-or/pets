import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Contact from './Contact';
import Cats from './Cats';
import Dogs from './Dogs';
import Birds from './Birds';

function App() {
    return (
        <div id="main">
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/cats" element={<CatsPage />} />
                <Route path="/dogs" element={<DogsPage />} />
                <Route path="/birds" element={<BirdsPage />} />
            </Routes>
        </Router>
</div>
    );
  }

export default App;


const HomePage = () => (
  <>
      <Header />
      <Banner />
      <About/>
      <Contact/>
  </>
);


const CatsPage = () => (
    <>
        <Header />
        <Cats />
    </>
);

const DogsPage = () => (
  <>
      <Header />
      <Dogs />
  </>
);


const BirdsPage = () => (
  <>
      <Header />
      <Birds />
  </>
);
