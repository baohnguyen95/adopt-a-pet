import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Animals from './Animals.js'

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