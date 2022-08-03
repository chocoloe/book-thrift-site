import { React, useState } from 'react';
import { Route, Routes, BrowserRouter, Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import { BookGrid } from './BookGrid';
import { SearchForm } from './SearchForm';

function HomePage(props) {
    const [books, setBooks] = useState(props.books);
    return (
        <>
            <NavBar />
            <SearchForm allBooks={props.books} setBooks={setBooks} />
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