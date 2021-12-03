import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Animals from './Animals.js';
import './App.css';

const App = () => {
    return (
      <div className = "App">
        <h1> Adopt A Pet </h1>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Animals/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default (App);