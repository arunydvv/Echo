import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Hello</h1>}></Route>
        <Route path='/about' element={<h1>about</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App