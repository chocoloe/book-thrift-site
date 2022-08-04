import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import AddBook from './AddBook';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/detail' element={<DetailPage/>} />
                <Route path='/addBook' element={<AddBook/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;