import { React } from 'react';
import { Route, Routes, BrowserRouter, Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import { BookGrid } from './BookGrid';

function HomePage({ books }) {
    return (
        <>
            <NavBar />
            <BookGrid books={books} />
        </>
    );
}

function DetailPage() {
    const location = useLocation();
    const { book } = location.state;
    return (
        <>
            <p>{book.name}</p>
            <p>{book.course}</p>
            <p>{book.price}</p>
            <Link to="/">Go Back</Link>
        </>
    );
}

function App({ books }) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage books={books} />} />
                <Route path='/detail' element={<DetailPage/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;