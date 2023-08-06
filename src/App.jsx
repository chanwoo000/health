import React from 'react';
import {
  BrowserRouter, 
  Link, 
  Route, 
  Routes} 
  from 'react-router-dom';
import Login from "./Login";
import Time from "./Time";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Login" element={<Login />} />
        <Route path="Time" element={<Time />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
