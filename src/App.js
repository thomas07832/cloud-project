// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Cardsection from './components/Cardsection';
import Reviewsection from './components/Reviewsection';
import Home from './view/Home';
import Contact from './view/Contact';
// Uncomment the following line if you implement the Blog component
// import Blog from './view/Blog';
import './App.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App bgx ">
   
        <Navbar />
        <main>
          <Routes>
            <Route path="/view/Home" element={<Home />} /> {/* Set home route */}
            <Route path="/view/contact" element={<Contact />} />
            {/* Uncomment the following line if you implement the Blog component */}
            {/* <Route path="/view/blog" element={<Blog />} /> */}
          </Routes>
        </main>
    <Herosection/>
    <Cardsection />
    <Reviewsection />
      </div>
    </Router>
  );
}

export default App;
