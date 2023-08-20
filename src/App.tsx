import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/dashboard"  element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
