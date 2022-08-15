import React from 'react';
import { Route, Routes, BrowserRouter, Outlet, Navigate, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import AddBook from './AddBook';
import { Signin } from './Signin';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route index element={NavBar} /> */}
                <Route element={<AppLayout />}>
                    <Route path='/' element={<AboutUs />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/detail' element={<DetailPage/>} />
                    <Route path='/addBook' element={<AddBook/>} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

function AppLayout() {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    )
  }

export default App;