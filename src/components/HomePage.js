import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchForm } from './SearchForm';
import { BookGrid } from './BookGrid';

import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import { getAuth } from 'firebase/auth';


export default function HomePage(props) {

    const navigate = useNavigate();
    const auth = getAuth();
    
    useEffect(() => {
        if (!auth.currentUser) {
            console.log('LOGIN NOT ALLOWED');
            navigate('/signin');
            return;
        }
        console.log('LOGIN SUCCESS');
    }, []);

    const [books, setBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState(books);

    useEffect(() => {
        const bookRef = ref(db, 'Books');
        onValue(bookRef, (snapshot) => {
            const data = snapshot.val();
            setBooks(Object.values(data));
            setDisplayBooks(Object.values(data));
        });
    }, []);

    return (
        <>
            <SearchForm allBooks={books} setDisplayBooks={setDisplayBooks} />
            <BookGrid books={displayBooks} />
        </>
    );
}